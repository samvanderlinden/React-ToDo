const router = require('express').Router();
let ToDo = require('../models/todo.model');

router.route('/').get((req, res) => {
    ToDo.find()
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req, res) => {
    const toDo = req.body;
    const newToDo = new ToDo(toDo);

    newToDo.save()
        .then(() => res.json('ToDo Added!!!'))
        .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;

