const express = require('express')
const bcrypt = require('bcrypt')
const UserData = require('../models/usermodel')
const route = express.Router()
const auth = require('../middleware/auth')
const multer = require('multer')
const sharp = require('sharp')

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

route.post('/user/logout', auth, async(req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) =>{
            return token.token !== req.token
        })
        await req.user.save()
        res.send('logout successfull')
    } catch (error) {
        res.send(error)
    }
})

route.post('/user/logoutAll', auth, async(req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        return res.send('logout all successfull')
    } catch (error) {
        res.send(error)
    }
})

route.get('/users', auth, async( req, res) => {
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

route.patch('/user/me', auth, async(req, res) => {
    try {
       // const user = await UserData.findByIdAndUpdate({_id:req.params.id}, req.body,{new: true})
        //const user  = await  UserData.findById(req.params.id)

        // if(!user) {
        //     return res.status(404).send({ message: "User not found" })
        // }
        //const userData = await UserData.findByIdAndUpdate({_id:req.params.id}, req.body,{new: true})
        const updates = Object.keys(req.body)
        const allowedUpdates = ["name", "email", "password"]
        const isValidOperation = updates.every((each) => allowedUpdates.includes(each))

        if (!isValidOperation) {
            return res.status(400).send({ message: "Invalid updates!" })
        }
        updates.forEach((update) => {
            req.user[update] = req.body[update]
            console.log('hello',req.user[update],'nooooooo', req.body[update])
        })
        await req.user.save()
        return res.send(req.user)
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

const storage = multer.memoryStorage()
const upload = multer({
    storage: storage,
    //dest: 'Avatars',
    limits: {
        fileSize: 1000000 // 1MB
    },
    fileFilter(req, file, cd) {
        //To check the file extension
        // if(!file.originalname.endsWith('.pdf')) {
        //     return cd(new Error('Please upload a PDF'))
        // }
        //To check the file by using Regex
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cd(new Error('Please upload a image'))
        }
        cd(undefined, true)
    }
})

//handling error in express middleware
// const errorHandling = (req, res, next) => {
//     throw new Error('my from middleware')
// }

route.post('/users/me/avatar', auth, upload.single('avatar'), async(req, res) => {
    const buffer = await sharp(req.file.buffer)
    .resize ({width:300, height:250})
    .png()
    .toBuffer()
    req.user.avatar = buffer
    //req.user.avatar = req.file.buffer
    //console.log(req.user.avatar)
    await req.user.save()
   res.send()
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})


route.delete('/user/me/avatar', auth, upload.single('avatar'), async(req, res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.send()
})

route.get('/users/:id', async(req,res) => {
    try {
        const user = await UserData.findById(req.params.id)

        if(!user || !user.avatar) {
            return res.send('error')
        }
        res.set('content-Type', 'image/png')
        res.send(user.avatar)
    } catch (error) {
        res.send(error)
    }
})

module.exports = route;