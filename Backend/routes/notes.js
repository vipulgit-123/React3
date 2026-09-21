const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
var fetchuser  = require('../middleware/fetchuser')
const Notes = require('../models/Notes');

// ----------------------------------------------------------------------------------------------------------
//Route 1 Get all the notes: Get "/api/notes/fetchAllNotes". to login required
router.get('/fetchAllNotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({user: req.user.id})
    res.json(notes)

})
module.exports = router
