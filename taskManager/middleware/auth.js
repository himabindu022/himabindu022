const jwt = require('jsonwebtoken')
const User = require('../models/usermodel')

const auth = async(req, res, next) => {
    try {
        //const token = await req.Authorzation.BearerToken.split('')[1]
        const token = req.header('Authorization').replace('Bearer ', '')
        console.log(token)
        const decoded = jwt.verify(token, 'thismynewcouse')
        console.log(decoded)
        const user = await User.findOne({_id: decoded._id} )
        console.log(user)
        if(! user) {
            throw new Error('User not found')
        }
        req.token = token
        req.user = user
        //res.send(user)
        next()
    } catch (error) {
        res.send('Please provide valid token')
    }
}

module.exports = auth