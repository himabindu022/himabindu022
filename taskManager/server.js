const express = require('express')
require('./mongoose')
const UserData = require('./models/usermodel')
const Task = require('./models/tasks')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())//parse theincoming requests


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


//Async await
app.post('/users', async(req, res) => {
    try {
        const user = await UserData.create(req.body)

        if(!user) {
            return res.status(400).send({message: "User not created"})
        }
        return res.send(user)   
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error" })
    }
})

app.get('/user/:id', async(req, res) => {
    try {
        const user = await UserData.findById(req.params.id)
        if (!user) {
            return res.status(404).send({ message: "User not found" })
        }
        return res.send(user)
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error" })
    }
})

app.get('/users', async( req, res) => {
    try {
        const users = await UserData.find({})

        if(!users) {
            return res.status(404).send({ message: "No users found" })
        }
        return res.send(users)
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error" })
    }
})

app.patch('/user/:id', async(req, res) => {
    try {
        const updates = Object.keys(req.body)
        const allowedUpdates = ["name", "email", "password"]
        const isValidOperation = updates.every((each) => allowedUpdates.includes(each))

        if (!isValidOperation) {
            return res.status(400).send({ message: "Invalid updates!" })
        }
    
        const user = await UserData.findByIdAndUpdate({_id:req.params.id}, req.body,{new: true})

        if(!user) {
            return res.status(404).send({ message: "User not found" })
        }
        return res.send(user) 
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error" })
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
