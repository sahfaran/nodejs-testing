
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Removes extra spaces
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Invalid email address'], // Basic email validation
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Password must be at least 6 characters
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isAdmin: {
        type: Boolean,
        default: false, // Default role for new users
    },
});

module.exports = mongoose.model('User',userSchema)