const express = require('express')
const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require('../models/User')
const router = express.Router()
// const user = User
// const { query } = require('express-validator');
const { body, validationResult } = require('express-validator');

//Create a user using: POST "/api/auth/". Doesn't require Auth
router.post('/',[
    body('name','Enter a valid name').isLength({min:3}),
     body('email','Enter a valid email').isEmail(),
     body('password','Password at-least of 5 characters').isLength({min: 5})
],
    (req,res)=>{

    // const obj = {
    //     a: 'thios',
    //     number: 34
    // }
    // res.json(obj)

    //console.log(req.body)
    // res.send("hello")

    // const user = User(req.body);
    // user.save()

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
     User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).then(user => res.json(user)).catch(errors=>console.log(errors));
    res.json({errors:'Please enter a unique value for email', message:errors.messages})
})
module.exports = router
