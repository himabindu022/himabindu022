const express = require('express')
require('./mongoose')
//const UserData = require('./models/usermodel')
//const Task = require('./models/tasks')
const userRoute = require('./routes/userRoutes')

const app = express()
const port = process.env.PORT || 3000


// All the all routes middleware
// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down')
// })


app.use(express.json())//parse theincoming requests
app.use(userRoute)  //Handle the All routes in userRoute


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




app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
