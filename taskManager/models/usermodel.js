
const mongoose =require("mongoose");
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = mongoose.Schema ({
    name: {
      type: String,
      required: true,
      trim: true,
    }, 
    age: {
      type: Number,
      validate(){
          if(this.age<0) {
              throw new Error(' Must given in positive number')
          }
      }
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      validate() {
          if(!validator.isEmail(this.email)) {
              throw new Error("Email is Invalid")
          }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      validate() {
          if(this.password.includes('password')) {
              throw new Error('Password cannot contain Password')
      } 
    }
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
  })

UserSchema.methods.generateAuthToken = async function(){
  const user = this
  const token = jwt.sign({ _id: user._id }, 'thismynewcouse')
  user.tokens = user.tokens.concat({ token })
  return token
}


UserSchema.statics.findByCredentials = async( email, password) => {
    const user = await UserData.findOne(email)

    if(!user) {
      return res.json('no user found')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) {
      return res.json('Invalid password')
    }
    return res.send(user)
}


//Hash plain text the password  before saving
UserSchema.pre('save', async function(next) {
      const data = this
      console.log('it is just before')
      if(data.isModified('password')){
        data.password = await bcrypt.hash(data.password, 10)
      }
      next()
  })

  const UserData = mongoose.model('UserData', UserSchema)

  module.exports = UserData
  
//   const me = new UserData({
//     name: 'John Doe',
//     age: 21,
//     email: 'john.doe@gmail.com',
//     password:'    hello@1   '
//   })
  
//   me.save().then(() =>  {
//       console.error(me);
//       }).catch((error) =>  {
//         console.log(error);
//       })