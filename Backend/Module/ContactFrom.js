const mongoose = require("mongoose");
const contactFormSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});

const ContactForm = mongoose.model("ContactForm", contactFormSchema);
module.exports = ContactForm;