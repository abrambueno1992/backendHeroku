const CreateNote = require('../models/NoteCreationModel');
const Notes = require('../models/NoteModel')
const bcrypt = require('bcrypt');

const createNotes = (req, res) => {
    const { title, note, check, tag, _creator } = req.body;

    if (req.decoded) {

        const noteData = new CreateNote({ title, note, check, tag, _creator });
        noteData
            .save()
            .then(newNote =>
                res.status(201).send(newNote))
            .catch(err => res.status(500).send(err))
    } else {
        return res.status(422).json({ error: `Error can't create the note` })
    }
};
module.exports = {
    createNotes
};





























            // Note.findById(idd) 
            //     .then(userdata => {
            //         // note
            //         //     .save()
            //         //     .then(newNote => res.status(201).send(newNote))
            //         //     .catch(err => res.status(500).send(err))
            //         // res.status(201).json({ UserInfo: userdata.title + userdata.note + userdata.check + userdata.tag})
            //         update = {
            //             title: title.push(userdata.title),
            //             note: note.push(userdata.note),
            //             check: check.push(userdata.check),
            //             tag: tag.push(userdata.tag),
            //         };
            //     });
            // Note.findByIdAndUpdate(idd, update, options)
            //     .then(user => {
            //         if (user) {
            //             res.status(201).json({ UserInfo: user })
            //         } else {
            //             rs.status(404).json({ msg: 'User not found' });
            //         }
            //     })
            //     .catch(err => {
            //         res.status(500).json({ error: err })
            //     })