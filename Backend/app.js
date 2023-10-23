const express = require('express');
const app = express();
const otpschemaobj = require('./Module/otpschema');
const mongoose = require('mongoose');
const { client, twilioPhone } = require('./Connect');
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
        const data = await otpschemaobj.find({ phone: contact, status: true });
        if (data[0].status) {
            await otpschemaobj.updateOne({ phone: contact }, { status: false, otp: '' });
            res.status(200).json({ message: 'Logout successfully' });
        } else {
            res.status(400).json({ message: 'Logout failed' });
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
        const data = await otpschemaobj.find({ phone: address.phone, status: true });
        if (data[0] && data[0].status) {
            const addressObj = new Address({
                phone: address.phone,
                name: address.name,
                homeNo: address.homeNo,
                roadarea: address.roadarea,
                pincode: address.pincode,
                city: address.city,
                state: address.state,
                nearby: address.nearby
            });
            await addressObj.save();

            res.status(200).json({ message: 'Address set successfully' });

        } else {
            res.status(400).json({ message: 'Address set failed' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error finding data' });
    }
});



// update address by usin phone number

app.post('/updateaddress', async (req, res) => {
    try {
        const address = req.body.address;
        const data = await otpschemaobj.find({ phone: address.phone, status: true });
        if (data[0] && data[0].status) {
            await Address.updateOne({ phone: address.phone }, {
                name: address.name,
                homeNo: address.homeNo,
                roadarea: address.roadarea,
                pincode: address.pincode,
                city: address.city,
                state: address.state,
                nearby: address.nearby
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