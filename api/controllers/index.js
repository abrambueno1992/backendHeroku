const {getNote} = require('./displayPath');
const {login} = require('./loginPath');
const {createNotes} = require('./createNotes');
const {createUser} = require('./createUser');
const {getNoteByID} = require('./getNoteByID')
const {updateNotes} = require('./updateNotes');
const {updateUser} = require('./updateUser');
const {deleteNote} = require('./deleteNote');
const {deleteUser} = require('./deleteUser');

module.exports = {
    getNote,
    login,
    createNotes,
    createUser,
    getNoteByID,
    updateNotes,
    updateUser,
    deleteNote,
    deleteUser
};