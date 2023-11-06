const dotenv = require('dotenv');
dotenv.config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE;


const client = require('twilio')(accountSid, authToken);

module.exports = {
    client,
    twilioPhone,

}
