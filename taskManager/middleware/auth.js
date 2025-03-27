const jwt = require('jsonwebtoken')
const User = require('../models/usermodel')


const auth = async(req, res, next) => {
    try {
        //const token = await req.Authorzation.BearerToken.split('')[1]
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thismynewcouse')
        const user = await User.findOne({_id: decoded.id} )
        if(! user) {
            throw new Error('User not found')
        }
        req.user = user
        res.send(user)
        next()
    } catch (error) {
        
    }

}

module.exports = auth