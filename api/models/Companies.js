const mongoose = require('mongoose')

const companiesLinkSchema = new mongoose.Schema({
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
    website: {
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

const companiesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true,
        required: true
    },
    company_name: {
        type: String,
        default: '',
        required: true
    },
    location: {
        type: String,
        default: '',
        required: true
    },
    sector: {
        type: String,
        default: '',
        required: true
    },
    contact_email: {
        type: String,
        default: '',
        required: true
    },
    phone: {
        type: String,
        default: '',
        required: true
    },
    description: {
        type: String,
        default: '',
        required: true
    },
    links: [companiesLinkSchema]
})

mongoose.model('Companies', companiesSchema)