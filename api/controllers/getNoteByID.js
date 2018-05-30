const CreatedNotes = require('../models/NoteCreationModel');
const ObjectId = require('mongoose').Types.ObjectId;
const getNoteByID = (req, res) => {
    const { Id } = req.body;
    const username = {
        username: "test1"
    }
    if (req.decoded) {
        CreatedNotes.find({'_creator': new ObjectId(Id)})
            // .populate('_creator')
            // .findById(Id)
            // .select('_creator')
            // .select('_creator')
            .then(users => {
                res.send(users)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    } else {
        return res.status(422).json({ error: `Can't get the notes` });
    }
};

module.exports = {
    getNoteByID
}