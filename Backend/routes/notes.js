const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
var fetchuser  = require('../middleware/fetchuser')
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');


// ----------------------------------------------------------------------------------------------------------
//Route 1 Get all the notes: Get "/api/notes/fetchAllNotes". to login required
router.get('/fetchAllNotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({user: req.user.id})
    res.json(notes)
})

//Route 2 Adding the notes: Post "/api/notes/AddAllNotes". to login required
router.post('/addNotes', fetchuser, [
    body('title','Enter a valid title').isLength({min:3}),
     body('description','Description at-least of 5 characters').isLength({min: 5})
], async (req, res) => {

    try {
        const {title, description, tag } = req.body;
         //If there are errors, return bad request amd the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const note = new Notes({
            title, description, tag, user: req.user.id
        })

        const savedNote = await note.save()
  //  const notes = await Notes.find({user: req.user.id})
    res.json(savedNote)
    }catch (e) {
         console.log(e.message)
            res.status(500).send("Some error occured")
    }
})

//Route 3 updating the notes: Post "/api/notes/updateNotes". to login required
router.put('/updateNotes/:id', fetchuser,
    async (req, res) => {

    try {
        const {title, description, tag } = req.body;

        //create the newNote object
        const newNote = {};
        if (title){newNote.title = title};
        if (description){newNote.description = description};
        if (tag){newNote.tag = tag};

        //find the note to be updated and update it
        let note = await Notes.findById(req.params.id)
        if (!note){return res.status(404).send("Not Found")}

        if (note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed")
        }

        note = await Notes.findByIdAndUpdate(req.params.id,
            {$set: newNote},
            {returnDocument: 'after'})
        res.json({note})

    }catch (e) {
         console.log(e.message)
            res.status(500).send("Some error occured")
    }
})
module.exports = router
