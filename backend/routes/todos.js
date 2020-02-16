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

router.route('/:id').delete((req, res) => {
    // console.log(req.params.id);
    console.log(req.params);
    ToDo.findByIdAndDelete(req.params.id)
    .then(() => res.json('ToDo Deleted'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/update/:id').post((req, res) => {
    ToDo.findById(req.params.id)
        .then(todo => { //'todo' is the todo we just got back from the database.
            todo.todo = req.body.todo;
            todo.save()
                .then(() => res.json('ToDo Updated'))
                .catch(err => res.status(400).json('Error :', err))
        })
        .catch(err => res.status(400).json('Error :', err))
})

module.exports = router;

