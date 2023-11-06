const express = require('express');
const app = express();
const otpschemaobj = require('./Module/otpschema');
const nodemailer = require("nodemailer");

const mongoose = require('mongoose');
const { client, twilioPhone } = require('./Connect');
const ContactForm = require('./Module/ContactFrom')
const ContactFormFormat = require('./ContactFormFormat')
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
const Address = require('./Module/Address');
app.use(cors());
app.post('/sendsms', async (req, res) => {
    try {
        console.log(req.body);
        const otp = Math.floor(Math.random() * 1000000);
        const contact = "+" + req.body.contrycode + req.body.phone
        const sms = client.messages
            .create({
                body: `Your OTP is ${otp}`,
                from: twilioPhone,
                to: contact
            })
            .then(async (message) => {

                // chekc alred exist or not 
                const data = await otpschemaobj.find({ phone: contact });
                if (data.length > 0) {
                    // update otp and status
                    await otpschemaobj.updateOne({ phone: contact }, { otp: otp, status: false });
                } else {
                    // create new entry
                    const otpobj = new otpschemaobj({ phone: contact, otp: otp, status: false });
                    await otpobj.save();
                }

                res.status(200).json({ message: 'OTP sent successfully', status: 'true' });
            })
            .catch(err => {
                console.log(err);
                res.send({
                    message: 'Error sending message',
                    status: 'false'
                });
            });


    } catch (err) {
        console.log(err);
        res.send('Error sending message');
    }
});


app.post('/verifysms', async (req, res) => {
    try {
        const contact = req.body.phone;
        const otp = req.body.otp;
        const data = await otpschemaobj.find({ phone: contact, otp: otp });

        if (data.length > 0) {

            // set status to be true in the database
            await otpschemaobj.updateOne({ phone: contact, otp: otp }, { status: true });

            res.status(200).json({ message: 'OTP verified successfully' });
        } else {
            res.status(400).json({ message: 'OTP verification failed' });
        }

    } catch (err) {
        console.log(err);
        res.send('Error finding data');
    }

}
);


app.post('/logout', async (req, res) => {
    try {
        const contact = req.body.phone;
        console.log(contact);
        const data = await otpschemaobj.find({ phone: contact, status: true });
        if (data[0].status) {
            await otpschemaobj.updateOne({ phone: contact }, { status: false, otp: '' });
            res.status(200).json({ message: 'Logout successfully',status:"true" });
        } else {
            res.status(400).json({ message: 'Logout failed' ,status:"false"});
        }

    } catch (err) {
        console.log(err);
        res.send('Error finding data');
    }

}
);

// get user is logged in or not

app.post('/isloggedin', async (req, res) => {

    try {
        const contact = req.body.phone;
        console.log("teslkdla ");
        console.log(contact);
        const data = await otpschemaobj.find({ phone: contact });
        console.log(data);
        if (data[0].status) {
            res.status(200).json({ message: 'User is logged in', status: data[0].status });
        } else {
            res.status(400).json({ message: 'User is logged out' });
        }

    }
    catch (err) {
        console.log(err);
        res.send('Error finding data');
    }

}
);

app.post('/setaddress', async (req, res) => {
    try {
        const address = req.body.address;
        console.log(address);
        const data = await otpschemaobj.find({ phone: address.phone, status: true });
        console.log(data);
        if (data[0] && data[0].status) {
            const addressObj = new Address({
                fname: address.fname,
                lname: address.lname,
                email: address.email,
                pincode: address.pincode,
                city: address.city,
                state: address.state,
                address: address.address,
                country: address.country,
                phone: address.phone
            });
            await addressObj.save();

            res.status(200).json({ message: 'Address set successfully', status: 'true' });

        } else {
            res.status(400).json({ message: 'Address set failed', status: 'false' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error finding data', status: 'false' });
    }
});

app.post('/getaddress', async (req, res) => {
    try {
        const address = req.body;
        console.log(address);
        const data = await otpschemaobj.find({ phone: address.phone, status: true });
        if (data[0] && data[0].status) {
            const addressObj = await Address.find({ phone: address.phone });
            res.status(200).json({ message: 'Address get successfully', status: 'true', address: addressObj });

        } else {
            res.status(400).json({ message: 'Address get failed', status: 'false' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error finding data', status: 'false' });
    }
});

// update address by usin phone number

app.post('/updateaddress', async (req, res) => {
    try {
        const address = req.body.address;
        const data = await otpschemaobj.find({ phone: address.phone, status: true });
        console.log(data);
        if (data[0] && data[0].status) {
            await Address.updateOne({ phone: address.phone }, {
                fname: address.fname,
                lname: address.lname,
                email: address.email,
                pincode: address.pincode,
                city: address.city,
                state: address.state,
                address: address.address,
                country: address.country,
                phone: address.phone

            }).then((data) => {
                console.log(data);
            }).catch((err) => {
                console.log(err);
            });

            res.status(200).json({ message: 'Address updated successfully' });

        } else {
            res.status(400).json({ message: 'Address updated failed' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error finding data' });
    }
});


// delete address 

app.post('/deleteaddress', async (req, res) => {
    try {
        const address = req.body;
        console.log(address);
        const data = await otpschemaobj.find({ phone: address.phone, status: true });
        if (data[0] && data[0].status) {
            await Address.deleteOne({ phone: address.phone });
            res.status(200).json({ message: 'Address deleted successfully', status: 'true' });

        } else {
            res.status(400).json({ message: 'Address deleted failed', status: 'false' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error finding data', status: 'false' });
    }
});



app.post("/contactform", async (req, res) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });
    try {
        const { fname, lname, email, message, phone } = req.body;
        const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }
        if (!fname || !email || !message || !lname) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const obj = new ContactForm({
            fname, lname, email, message, phone
        })
        // const mailOptions = {
        //     from: process.env.SMTP_USER,
        //     to: "vtuppalwad@gmail.com",
        //     subject: "contact from info",
        //     html: ContactFormFormat(req.body),
        // };
        await obj.save().then((data) => {
            console.log(data);
            res.status(200).json({ message: "Email sent successfully", status: 'true' });
        }
        ).catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Error sending email" });
        });
        // await transporter.sendMail(mailOptions).then((info) => {
        //     console.log(info);
        //     res.status(200).json({ message: "Email sent successfully" });
        // }).catch((err) => {
        //     console.log(err);
        //     res.status(500).json({ message: "Error sending email" });
        // });


    }
    catch (err) {
        console.log(err);
    }
});


mongoose
    .connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB:", error);
    });