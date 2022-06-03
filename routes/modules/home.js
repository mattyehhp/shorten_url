const express = require('express')
const router = express.Router()
const Url = require('../../models/url')
const base_url = "http://localhost:3000/"
const validUrl = require('valid-url')

const nanoid = require('nanoid')
const number = '1234567890'
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const customAlphabet = number + lowerCaseLetters+ upperCaseLetters

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/:short_Code', (req, res) => {
    const short_Code = req.params.short_Code
    Url.find({ short_Code })
    .lean()
    .then(
        url => {
            res.redirect(url[0].formerUrl)
        }
    )
})

router.post('/', (req, res) => {
    const formerUrl = req.body.long_url
    const short_Code = nanoid.customAlphabet(customAlphabet, 5)()
    const shortUrl = base_url + short_Code
    // check whether there is the same url in db
    if (!validUrl.isUri(formerUrl)) {
        return res.render('index', { url_invalid: true })
    }
    Url.find({ formerUrl })
    .lean()
    .then(
        url => {
            if (url.length !== 0) {
                res.render('result', { shortUrl: url[0].shortUrl })
            } else {
                Url.create({
                    short_Code: short_Code,
                    formerUrl: formerUrl,
                    shortUrl: shortUrl
                })
                res.render('result', { shortUrl })
            }
        }
    )
})






module.exports = router