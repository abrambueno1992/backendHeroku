const Notes = require('../models/NoteModel');

const deleteUser = (req,res) => {
    const {Id} = req.body;
    const options = {
        new: true,
    };
    if (req.decoded) {
        Notes.findByIdAndRemove(Id)
            .then(user => {
                res.status(201).send(user);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }   else {
        return res.status(422).json({error: 'Unable to delete user'})
    }
};
module.exports = {
    deleteUser
}