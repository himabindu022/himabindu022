const  express = require('express')
const Task = require('../models/tasks')
const user = require('../models/usermodel')
const auth = require('../middleware/auth')

const route = express.Router()

route.post('/tasks', auth,async(req, res) => {
    try {
        //const task  = await Task.create(req.body)
        const task  = new Task({
            //task: req.body,
            ...req.body,
            owner: req.user._id
        })

        // if(!task) {
        //     return res.status(400).send({ message: "Task not created" })
        // }
        await task.save()
        res.send(task)
    } catch (error) {
        res.send(error)
    }
})

route.get('/tasks', auth, async(req, res) => {
    try {
        const match = {}
        const sort = {}
        //const tasks = await Task.find({owner:req.user._id})
        if( req.query.completed) {
            match.completed = req.query.completed === 'true'
        }

        if(req.query.sort) {
            const parts = req.query.sort.split(':')
            sort[parts[0]] = sort[parts[1]] ==='desc'? -1:1
        }
        await req.user.populate({
            path: 'tasks',
            match,
            options : {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip)
            },
            sort
        })
        console.log(req.user.tasks)

        // if(!tasks){
        //     return res.status(404).send({ message: "No tasks found" })
        // }
         res.send(req.user.tasks)
    } catch (error) {
        res.send(error)
    }
})


route.get('/task/:id', auth, async(req, res) => {

    try {
        //const task = await Task.findById({_id:req.params.id})
        const task = await Task.findOne({_id:req.params.id, owner: req.user._id})
    
        if(!task) {
            return res.status(404).send({ message: "Task not found" })
        }
        res.send(task)
    } catch (error) {
        res.send(error)
    }
})


route.patch('/task/:id', auth, async(req, res) => {

    try {
        //console.log(req.params.id)
        //console.log(req.user._id)
        //const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true})
        const task = await Task.findOneAndUpdate({_id: req.params.id, owner: req.user._id}, req.body, {new: true})

        if(!task) {
            return res.status(404).send({ message: "Task not found" })
        }
        console.log(req.body)
        //const updatetask = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true})
        //console.log(updatetask)
        res.send(task)
    } catch (error) {
        res.send(error)
    }
})

route.delete('/task/:id', auth, async(req, res) => {
    try {
        //const task = await Task.findByIdAndDelete(req.params.id)
        const task = await Task.findOneAndDelete({_id:req.params.id, owner:req.user._id})
        if(!task) {
            return res.status(404).send({ message: "Task not found" })
        }
        res.send({message: 'Deleted Successfully', task})
    } catch (error) {
        res.send(error)
    }
})

module.exports = route