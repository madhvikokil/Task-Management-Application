const ToDoModel = require('../models/todoModel');

module.exports.saveToDo = (req, res) => {
    const { title, description, status, actualHours, budgetedHours } = req.body;

    ToDoModel.create({ title, description, status, actualHours, budgetedHours })
    .then((data) => {
        console.log("Saved Successfully");
        res.status(201).send(data);
    })
    .catch((error) => {
        console.log(error);
        res.send({error: error, msg: "Something went Wrong!"})
    })
};

module.exports.updateToDo = (req, res) => {
    const { id } = req.params;
    const { title, description, status, actualHours, budgetedHours } = req.body;

    ToDoModel.findByIdAndUpdate(id, { title, description, status, actualHours, budgetedHours })
    .then(() => {
        res.send("Updated Successfully");
    })
    .catch((error) => {
        console.log(error);
        res.send({error: error, msg: "Something went Wrong!"})
    })
};

module.exports.deleteToDo = (req, res) => {
    const { id } = req.params;
    console.log("Id: ", id);
    ToDoModel.findByIdAndDelete(id)
    .then(() => {
        res.send("Deleted Successfully");
    })
    .catch((error) => {
        console.log(error);
        res.send({error: error, msg: "Something went Wrong!"})
    })
};

module.exports.getATodo = (req, res) => {
    const { id } = req.params;
    ToDoModel.findById(id)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Something went Wrong!"})
    })
}

module.exports.getToDo = async(req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
};
