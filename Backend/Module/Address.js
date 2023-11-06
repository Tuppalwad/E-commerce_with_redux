const mongoose = require('mongoose');

const address = new mongoose.Schema({
    fname: {
        type: String,
    },
    lname: {
        type: String,
    },
    email: {
        type: String,
    },
    pincode: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    address: {
        type: String,
    },
    country: {
        type: String,
    },
    phone: {
        type: String,
    }
}, { timestamps: true }
);

const Address = mongoose.model('address', address);

module.exports = Address;
