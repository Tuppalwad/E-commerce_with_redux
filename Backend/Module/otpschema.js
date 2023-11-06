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

});

const otpschemaobj = mongoose.model('users', otpSchema);
module.exports = otpschemaobj;