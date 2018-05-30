// notes: [
//     {
//         title: '',
//         note: '',
//         check: true / false,
//         tag: ''
//     }
// ]
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Notes = Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
   

});

Notes.pre('save', function(next) {
    if (!this.isModified('password')) return next();
    bcrypt.hash(this.password, 12, (err,hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    });
});

Notes.methods.checkPassword = function(plainTextpassword, callBack) {
    bcrypt.compare(plainTextpassword, this.password, (err, match) => {
        if (err) return callBack(err);
        callBack(null, match);
    });
};

module.exports = mongoose.model('Notes', Notes);