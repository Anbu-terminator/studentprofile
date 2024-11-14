// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String,},
    DateofBirth: { type: String, },
    gender: { type: String, },
    nation: { type: String,},
    fatherName: { type: String,},
    motherName: { type: String,  },
    address: { type: String, },
    city: { type: String, },
    state: { type: String, },
    country: { type: String, },
    aadhar: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    pin: { type: String, required: true },
    education: { type: String, },
    previous: { type: String, },
    skills: { type: String, },
    course: { type: String, },
    time: { type: String, },
    mode: { type: String, },
    fees: { type: String, },
    offer: { type: String, default: 'None' },
    duration: { type: String, }
});

module.exports = mongoose.model('Student', studentSchema);

