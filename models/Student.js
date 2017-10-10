import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const studentSchema = new mongoose.Schema({

    name: { type: String, trim: true, required: 'Please enter a student name!' },

    email: { type: String, unique: true, trim: true, required: 'Please enter an email!' },

    age: { type: Number, trim: true, required: 'Please enter a age!' },

    sex: { type: String, trim: true, required: 'Please enter student sex' },

    department: { type: String, trim: true, required: 'Please enter a student name!' },

    created: { type: Date, default: Date.now },
    
});

module.exports = mongoose.model('Student', studentSchema);