const fetch = require('node-fetch');
const Notes = require('../models/NoteModel');
const CreatedNotes = require('../models/NoteCreationModel');
// const getNote = (req,res) =>  {
//     if (req.decoded) {
//         fetch(
//             'dummy url'
//         )
//             .then(ok => ok.json())
//             .then(notes => res.json(notes))
//             .catch(err => res.status(500).json({error: 'Error fetching Notes'}));
//     }   else {
//         return res.status(422).json({error: `Can't get the notes`});
//     }
// };

const getNote = (req, res) => {
    console.log("LOgged in get note", req.headers)
    if (req.decoded) {
        CreatedNotes.find()
            .populate('_creator')
            // .select('username')
            .then(users => {
                res.send(users)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }
    else {
        return res.status(422).json({ error: `Can't get the notes` });
    }
};
module.exports = {
    getNote
}