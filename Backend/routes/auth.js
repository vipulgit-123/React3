const express = require('express')
const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const JWT_Secret = '#@IamABaDBoy#BAD_BOY'
//Create a user using: POST "/api/auth/". Doesn't require Auth
router.post('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
     body('email','Enter a valid email').isEmail(),
     body('password','Password at-least of 5 characters').isLength({min: 5})
],

    async (req, res) => {

      //If there are errors, return bad request amd the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        //check whether the user with this email exist already

        try {

            let user = await User.findOne({email: req.body.email});
            if (user) {
                return res.status(400).json({errors: "Sorry a user with this email already exists"})
            }

            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password,salt)

            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            })


            const data ={
                user:
                    {
                        id: user.id
                    }
            }

            const authtoken = jwt.sign(data, JWT_Secret)
            console.log(authtoken)

            // res.json({user})
            res.json({authtoken})

        }catch (e) {
            console.log(e.message)
            res.status(500).send("Some error occured")
        }
    })
module.exports = router
