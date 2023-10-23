const mongoose = require('mongoose');

const address = new mongoose.Schema({
    name: {
        type: String,
    },
    homeNo: {
        type: String,
    },
    roadarea: {
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
    nearby: {
        type: String,
    },
    phone: {
        type: String,
    }
}, { timestamps: true }
);

const Address = mongoose.model('address', address);

module.exports = Address;
