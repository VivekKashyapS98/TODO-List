const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
var todoSchema = mongoose.Schema({
    title:{
        type: String,
        required: 'Title cannot be blank'
    },
    date:{
        type: Date,
        default: Date.now
    },
    completed:{
        type: Boolean,
        default: false
    }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;