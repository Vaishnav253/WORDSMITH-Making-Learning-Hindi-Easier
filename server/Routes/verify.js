
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




router.use(async (req,res)=>{


    const token = req.body.token;

    if (token) {

        let decodedToken;
        try {
          
          decodedToken = jwt.verify(token, 'shhhhh');
          console.log("decodedToken+",decodedToken)
            if (decodedToken) {
                req.token = token;
                res.json({flag:true,data:"Valid user"})
            }
        }
        catch (e) {

            res.status(200).json({
                data: "Not auth"
            })


        }
    }
    else{
        res.status(200).json({
            data: "Not auth"
        })

    }




})


module.exports = router