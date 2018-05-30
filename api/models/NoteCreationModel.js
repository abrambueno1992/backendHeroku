const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CreateNote = Schema({
    _creator: {type: Schema.Types.ObjectId, ref: 'Notes'},
    title: [{
        type: String,
        required: false,
    }],
    note: [{
        type: String,
        required: false,
    }],
    check: [{
        type: Boolean,
    }],
    tag: [{
        type: String,
        required: false,
    }],
});
module.exports = mongoose.model('CreateNote', CreateNote);