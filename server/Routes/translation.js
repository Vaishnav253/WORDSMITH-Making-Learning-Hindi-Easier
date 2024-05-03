
const { wordsSchema, User } = require("../model.js");
const express = require('express')
const router = express.Router()
const app = express();
const path = require("path")
const cors = require("cors")
const mongoose = require("mongoose")
const hostname = '0.0.0.0';
const jwt = require("jsonwebtoken");
const { verify } = require("../verify")

const {translate} = require("@vitalets/google-translate-api");


router.use(async (req,res)=>{

    const translated =[]
    const lang = req.body.lang;
    const words = req.body.words;

    for ( let word of words){

        const { text } = await translate(word ,{ to: lang });

        translated.push(text)
    }
    

    res.json({
        translated
    })


})


module.exports = router