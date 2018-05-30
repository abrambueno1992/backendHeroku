const CreateNotes = require('../models/NoteCreationModel');

const updateNotes = (req,res) => {
    const {Id, title, note, check, tag} = req.body;
    const options = {
        new: true,
    }
    if (req.decoded) {
        CreateNotes.findByIdAndUpdate(Id, req.body, options)
        .then(users => {
            // res.status(201).json({success: users});
            res.send(users)
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }   else {
        return res.status(422).json({error: 'Unable to update notes'})
    }
};

module.exports = {
    updateNotes
}