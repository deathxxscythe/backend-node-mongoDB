const mongoose = require('mongoose')

const professionalsLinkSchema = new mongoose.Schema({
    linkedin: {
        type: String,
        default: '',
        required: false
    },
    facebook: {
        type: String,
        default: '',
        required: false
    },
    instagram: {
        type: String,
        default: '',
        required: false
    },
    twitter: {
        type: String,
        default: '',
        required: false
    },
    portfolio: {
        type: String,
        default: '',
        required: false
    },
    other: {
        type: String,
        default: '',
        required: false
    }
    
})

const professionalsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true,
        required: true
    },
    first_name: {
        type: String,
        default: '',
        required: true
    },
    last_name: {
        type: String,
        default: '',
        required: true
    },
    country: {
        type: String,
        default: '',
        required: true
    },
    profession: {
        type: String,
        default: '',
        required: true
    },
    contact_email: {
        type: String,
        default: '',
        required: false
    },
    phone: {
        type: String,
        default: '',
        required: false
    },
    bio: {
        type: String,
        default: '',
        required: false
    },
    links: [professionalsLinkSchema]
})

mongoose.model('Professionals', professionalsSchema)