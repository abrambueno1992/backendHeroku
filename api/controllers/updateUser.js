const Notes = require('../models/NoteModel');
const bcrypt = require('bcrypt');

const updateUser = (req, res) => {
    if (req.decoded) {
        let { Id, username, password } = req.body;
        const options = {
            new: true,
        };
        const newInfo = new Notes({ username, password });
        bcrypt.hash(password, 12, (err, hash) => {
            if (err) return next(err);
            password = hash;
            const update = {
                username: username,
                password: password
            }

            Notes
                // password.save()
                .findByIdAndUpdate(Id, update, options)
                .then(users => {
                    // newInfo
                    //     .save()
                    //     .then(newData => res.status(201).send(newData))
                    //     .catch(notResolved => res.status(500).send(notResolved));
                    res.send(users)
                })
                .catch(err => {
                    res.status(500).json(err);
                })


        });
    } else {
        return res.status(422).json({ error: 'Unable to update user information' })
    }
};
module.exports = {
    updateUser
}