const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    company: String,
    starting: String,
    ending: String
})

const profileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: false,
        required: true
    },
    company_name: {
        type: String,
    },
    user_name: {
        type: String
    },
    location: {
        type: String,
    },
    sector: {
        type: String,
    },
    contact_email: {
        type: String,
    },
    phone: {
        type: String,
    },
    blurb: {
        type: String,
    },
    roles: [],
    jobs: [jobSchema],
    skills: [],
    links: []
})

mongoose.model('Profiles', profileSchema)