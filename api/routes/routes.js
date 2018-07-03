const {authenticate} = require('../utils/middleware');
const {createUser, getNote, login, createNotes,  getNoteByID, deleteUser, updateNotes, deleteNote, updateUser} = require('../controllers') //updateNotes, deleteNote,
// const {createNote} = require('./createPath');
// const {login} = require('./loginPath');
// const {getNote} = require('./displayPath.js');

module.exports = server => {
    server.get('/api/notes/view', authenticate, getNote);
    server.route('/api/notes/create').post(authenticate, createNotes);
    // server.get('/api/notes/get',authenticate, getNoteByID);
    server.route('/api/notes/get').post(authenticate, getNoteByID);
    server.route('/api/notes/view/*').post(authenticate, getNoteByID);
    server.route('/api/notes/update').put(authenticate, updateNotes);
    server.route('/api/notes/userupdate').put(authenticate, updateUser);
    server.route('/api/notes/delete').delete(authenticate, deleteNote);
    server.route('/api/notes/userdelete').delete(authenticate, deleteUser);
    // server.route('/api/notes/edit/:id')
    server.route('/api/notes/new').post(createUser);

    server.route('/api/notes/login').post(login);
};