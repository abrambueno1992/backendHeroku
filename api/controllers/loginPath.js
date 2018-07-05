const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');

const Notes = require('../models/NoteModel');

const login = (req, res) => {
    const { username, password } = req.body;
    let Id;
    Notes.findOne({ username }, (err, user) => {
        if (err) {
            res.status(403).json({ error: 'Invalid username/password, credentials' });
            return;
        }
        if (user === null) {
            res.status(422).json({ error: 'No user with that username in notes DB' });
            return;
        }
        // user.findOne({username: username})
        //     .then(user => {
        //         Id=user._id
        //     })
        //     .catch(error => res.status(403).json({error: 'User not found'}))
        user.checkPassword(password, (nonMatch, hashMatches) => {
            console.log('this is the checkpassword:', nonMatch, hashMatches,user )
            if (hashMatches === false) {
                res.status(422).json({ error: 'passwords dont match' });
                return;
            }
            if (hashMatches) {

                const payload = {
                    username: user.username
                };
                Id = user._id
                const token = jwt.sign( payload, mysecret,{ expiresIn: 60 * 60 });
                res.json({ token, Id, username });
            }
        });
    });
};

module.exports = {
    login
}