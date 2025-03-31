
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



//Promise
// app.post('/user', (req, res)=> {
//     //console.log(req.body)
//     const user = new UserData(req.body)
//     user.save()
//     .then((user) => {
//         return res.send(user)
//     }).catch((err) => {
//         return res.send(err)
//     })
// })


// app.post('/task', ( req, res) => {
//     const task = new Task(req.body)
//     task.save()
//     .then((task) => {
//         return res.send(task)
//     }).catch((err) => {
//         return res.send(err)
//     })
// })