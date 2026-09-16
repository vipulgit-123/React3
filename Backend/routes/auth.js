const express = require('express')
const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require('../models/User')
const router = express.Router()
const user = User

//Create a user using: POST "/api/auth/". Doesn't require Auth
router.get('/',(req,res)=>{

    // const obj = {
    //     a: 'thios',
    //     number: 34
    // }
    // res.json(obj)

    console.log(req.body)
    // res.send("hello")

    const user = User(req.body);
    user.save()

    res.send(req.body)

})
module.exports = router
