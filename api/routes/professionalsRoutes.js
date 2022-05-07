const router = require("express").Router();
const mongoose = require('mongoose')
const User = mongoose.model('User')
const requireAuth = require('../middleware/requireAuth')

const professional = mongoose.model('Professionals')

router.use(requireAuth)

router.get('/', async (req, res) => {
    const professionals = await professional.find({})
    res.send(professionals)
})

router.post('/', async (req, res) => {
    const {first_name, last_name, country, profession} = req.body

    if (!first_name || !last_name || !country || !profession) {
        return res.status(422).send({error:'first and last name, country, and profession are required'})
    }

    try {
        const professional = new professional({ first_name, last_name, country, profession, userId: req.user._id})
        await professional.save()
        res.send(professional)
    } catch (err) {
        res.status(422).send({error:message})
    }
    
})

router.get('/profile', async (req, res) => {
    const professional = await professional.find({ userId: req.user._id})
    res.send(professional)
})

module.exports = router