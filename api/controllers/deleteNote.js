const CreateNotes = require('../models/NoteCreationModel');

const deleteNote = (req,res) => {
    const {Id} = req.body;
    const options = {
        new: true,
    };
    if (req.decoded) {
        CreateNotes.findByIdAndRemove(Id)
        .then(note => {
            res.status(201).send(users)
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }   else {
        return res.status(422).json({error: 'Unable to delete note'})
    }
};
module.exports = {
    deleteNote
}