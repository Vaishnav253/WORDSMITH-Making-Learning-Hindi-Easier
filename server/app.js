const express = require("express");
const app = express();
const path = require("path")
const cors = require("cors")
const mongoose = require("mongoose")
const hostname = '0.0.0.0';
const { wordsSchema, User } = require("./model");
const jwt = require("jsonwebtoken");


const PORT = process.env.PORT || 4000

const register = require("./Routes/regsiter")
const login = require("./Routes/login")
const storeTopic = require("./Routes/storeTopic")
const getTopics = require("./Routes/getTopcs")
const getDifficultyLevel = require("./Routes/getDifficultyLevel")
const storeWords = require("./Routes/storeWords")
const getWords = require("./Routes/getWords");
const getWordsFromTopic = require("./Routes/getWordsFromTopic");
const translation = require("./Routes/translation");
const verify = require("./Routes/verify")
const grammarCorrection = require("./Routes/grammarCorrection")

app.use(cors())
app.use(express.static(__dirname))
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use("/register",register);
app.use("/login",login)
app.use("/storeTopic",storeTopic)
app.use("/getTopics",getTopics)
app.use("/getDifficultyLevel",getDifficultyLevel)
app.use("/storeWords",storeWords);
app.use("/getWords",getWords);
app.use("/getWordsFromTopic",getWordsFromTopic);
app.use("/verify",verify)
app.use("/translate",translation)
app.use("/grammarCorrection",grammarCorrection)



app.use("/", (req, res) => {
    res.send("Hello")
})

//mongodb+srv://Athul:Athulrithu%40123@cluster0.qhzaz.mongodb.net/?retryWrites=true&w=majority

mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0").then(result => {
    console.log("Conncted")
    app.listen(PORT);
}).catch(
    err => {
        console.log("Error")
    }
)


