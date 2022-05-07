const router = require("express").Router();
const mongoose = require('mongoose')
const User = mongoose.model('User')
const requireAuth = require('../middleware/requireAuth')

const company = mongoose.model('Companies')

router.use(requireAuth)

router.get('/', async (req, res) => {
    const companies = await company.find({})
    res.send(companies)
})

router.post('/', async (req, res) => {
    const {first_name, last_name, country, profession} = req.body

    if (!first_name || !last_name || !country || !profession) {
        return res.status(422).send({error:'first and last name, country, and profession are required'})
    }

    try {
        const companies = new companies({ first_name, last_name, country, profession, userId: req.user._id})
        await company.save()
        res.send(companies)
    } catch (err) {
        res.status(422).send({error:message})
    }
    
})

router.get('/id', async (req, res) => {
    const companies = await company.find({})
    res.send(companies)
})

router.get('/profile', async (req, res) => {
    const companies = await company.find({ userId: req.user._id})
    res.send(companies)
})

module.exports = router