const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');

const Notes = require('../models/NoteModel');

const login = (req, res) => {
    const { username, password } = req.body;
    Notes.findOne({ username }, (err, user) => {
        if (err) {
            res.status(403).json({ error: 'Invalid username/password, credentials' });
            return;
        }
        if (user === null) {
            res.status(422).json({ error: 'No user with that username in notes DB' });
            return;
        }
        user.checkPassword(password, (nonMatch, hashMatches) => {
            console.log('this is the checkpassword:', nonMatch, hashMatches)
            if (hashMatches === false) {
                res.status(422).json({ error: 'passwords dont match' });
                return;
            }
            if (hashMatches) {

                const payload = {
                    username: user.username
                };
                const token = jwt.sign(payload, mysecret);
                res.json({ token });
            }
        });
    });
};

module.exports = {
    login
}