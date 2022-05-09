const router = require("express").Router();
const mongoose = require('mongoose')
const User = mongoose.model('User')
const requireAuth = require('../middleware/requireAuth')

const profile = mongoose.model('Profiles')

router.use(requireAuth)

router.get('/', async (req, res) => {
    const profiles = await profile.find({})
    res.send(profiles)
})

router.post('/', async (req, res) => {
    const {company_name, user_name, location, sector, contact_email, phone, blurb, roles, jobs, skills, links} = req.body

    try {
        const userProfile = new profile({ company_name, user_name, location, sector, contact_email, phone, blurb, roles, jobs, skills, links, userId: req.user._id})
        await userProfile.save()
        res.send(userProfile)
    } catch (err) {
        res.status(422).send(err.message)
    }
    
})

router.get('/user-profile', async (req, res) => {
    const userProfile = await profile.find({ userId: req.user._id})
    res.send(userProfile)
})

router.get('/:id', async (req, res) => {
    const singleProfile = await profile.find({ _id: req.params.id })
    res.send(singleProfile)
})

module.exports = router