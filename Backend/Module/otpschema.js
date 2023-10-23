const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    phone: {
        type: String,
    },
    otp: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300 // expires in 5 minutes
    }
});

const otpschemaobj = mongoose.model('users', otpSchema);
module.exports = otpschemaobj;