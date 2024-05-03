

const { wordsSchema, User } = require("../model.js");
const express = require('express')
const router = express.Router()
const app = express();
const path = require("path")
const cors = require("cors")
const mongoose = require("mongoose")
const hostname = '0.0.0.0';
const jwt = require("jsonwebtoken");
const { verify } = require("../verify");
const { route } = require("./regsiter.js");
const axios = require("axios")

router.use( async (req, res) => {

    const data = req.body.data;
    console.log(data)
    const encodedParams = new URLSearchParams();
    encodedParams.append("language", "en-US");
    encodedParams.append("text", data);

    const options = {
        method: 'POST',
        url: 'https://dnaber-languagetool.p.rapidapi.com/v2/check',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'a80c4af8b0msh6942e237781f3a2p140239jsnbd13b084cde3',
            'X-RapidAPI-Host': 'dnaber-languagetool.p.rapidapi.com'
        },
        data: encodedParams
    };

    axios.request(options).then(function (response) {
        const match =response.data.matches;
        const correctedForm = match.map((value,index)=>{
                return {message:value.message,shortMessage:value.shortMessage}
        })

        jsonObject = correctedForm.map(JSON.stringify);

         
        uniqueSet = new Set(jsonObject);

        uniqueArray = Array.from(uniqueSet).map(JSON.parse);

        res.json({uniqueArray})
    }).catch(function (error) {
        console.error(error);
    });




})

module.exports = router


