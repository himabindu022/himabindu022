
const mongoose =require("mongoose");
const validator = require('validator')

//const dbURI = 'mongodb://127.0.0.1:27017/task-Manager'

mongoose.connect('mongodb://127.0.0.1:27017/task-Manager-API');
 



// const task = new Task({
//     description: 'Buy milk'
    
//     ,
//     completed: false
// })

// task.save().then(() => {
//     console.log(task);
// }).catch ((error) => {
//     console.log(error);
// })