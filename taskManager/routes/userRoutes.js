const express = require('express')
const bcrypt = require('bcrypt')
const UserData = require('../models/usermodel')
const route = express.Router()
const auth = require('../middleware/auth')


//Async await
route.post('/users/signup', async(req, res) => {
    try {
        const user = await UserData.create(req.body)
        console.log(user)
        if(!user) {
            return res.status(400).send({message: "User not created"})
        }
        const token  = await user.generateAuthToken()
        console.log(token)
        return res.send({user, token})   
    } catch (error) {
        return res.status(500).send({ message: "Internal Server hello Error" })
    }
})

route.post('/users/login', async(req, res) => {
    try {
        const user = await UserData.findOne({email:req.body.email})
        console.log(user)
        if(!user) {
            return res.status(400).send({message: "User not found"})
        }
        //const hashedPassword = await bcrypt.hash(req.body.password, 10)
        // console.log(user.password,  req.body.password)
        // const isMatch = await bcrypt.compare(req.body.password, user.password)
        // console.log(isMatch)
        // if(!isMatch) {
        //     return res.status(400).send({message: "Invalid Password"})
        // }
        const token  = await user.generateAuthToken()
        return res.send({user, token})
    } catch (error) {
        console.log(error)
    }
})

route.get('/user/:id', async(req, res) => {
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

route.get('/users', auth,async( req, res) => {
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

route.patch('/user/:id', async(req, res) => {
    try {
        //const user = await UserData.findByIdAndUpdate({_id:req.params.id}, req.body,{new: true})
        const user  = await  UserData.findById(req.params.id)

        if(!user) {
            return res.status(404).send({ message: "User not found" })
        }
        //const userData = await UserData.findByIdAndUpdate({_id:req.params.id}, req.body,{new: true})
        const updates = Object.keys(req.body)
        const allowedUpdates = ["name", "email", "password"]
        const isValidOperation = updates.every((each) => allowedUpdates.includes(each))

        if (!isValidOperation) {
            return res.status(400).send({ message: "Invalid updates!" })
        }
        updates.forEach((update) => {
            user[update] = req.body[update]
            console.log('hello',user[update],'nooooooo', req.body[update])
        })
        await user.save()
        return res.send(user)

    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error" })
    }
})


route.delete('/user/:id', async(req,res) => {
    try {
        const user = await UserData.findByIdAndDelete(req.params.id)
        if(!user) {
            return res.status(404).send({ message: "User not found" })
        }
        return res.send(user)
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error" }) 
    } 
})
module.exports = route;