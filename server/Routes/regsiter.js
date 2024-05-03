const { body, validationResult } = require('express-validator');


const { wordsSchema, User } = require("../model.js");
const express = require('express');

const router = express.Router()

router.use(async (req, res) => {




    const firstName = req.body.firstName;
    const lastName = req.body.lastName
    const email = req.body.email;
    const password = req.body.password;
    const topics = req.body.topics

    console.log(topics)
    const user = new User({
        firstName, lastName, email, password
    })

    const UserWords = new wordsSchema({
        email,
        topics: [...topics],
        knownWords: [],
        easy: 0,
        medium: 0,
        hard: 0
    })

    const finding = await User.findOne({ email })

    console.log(finding)

    if (finding === null) {

        user.save().then(data => {
            console.log(data)
            UserWords.save().then((v) => {
                res.status(200).json({
                    data: "Registered",
                    flag: true
                })
            })

        })

    }
    else {

        res.status(400).json({
            data: "User already available",
            flag: false
        })

    }



})



module.exports = router