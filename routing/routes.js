const express = require('express');
const router = express.Router();
const todos = require('../models/model');

router.get('/', function(req, res){
    todos.find(function(err, data){
        if(err) res.send(err);
        res.json(data);
    });
});

router.post('/', function(req, res){ 
    var newTodo = todos(req.body);
    todos.create(req.body)
        .then(function(todo){
            res.json(todo)
        })
        .catch(function(err){
            res.send(err);
        });
});

router.put('/:todoId', function(req, res){
    todos.findOneAndUpdate({_id: req.params.todoId}, req.body)
        .then(function(todo){
            res.json(todo);
        })
        .catch(function(err){
            res.send(err);
        })
});

router.delete('/:todoId', function(req, res){
    todos.remove({_id: req.params.todoId})
        .then(function(){
            res.json({message: "Removed!"});
        })
        .catch(function(err){
            res.send(err);
        });
});

module.exports = router;
