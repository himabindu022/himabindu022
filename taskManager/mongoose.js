
const mongoose =require("mongoose");
const validator = require('validator')

const dbURI = 'mongodb://127.0.0.1:27017/task-Manager'

mongoose.connect('mongodb://127.0.0.1:27017/task-Manager-API');
 
// const UserData = mongoose.model('UserData', {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   }, 
//   age: {
//     type: Number,
//     validate(){
//         if(this.age<0) {
//             throw new Error(' Must given in positive number')
//         }
//     }
//   },
//   email: {
//     type: String,
//     required: true,
//     validate() {
//         if(!validator.isEmail(this.email)) {
//             throw new Error("Email is Invalid")
//         }
//     }
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 7,
//     validate() {
//         if(this.password.includes('password')) {
//             throw new Error('Password cannot contain Password')
//     }
//   }
// }
// })

// const me = new UserData({
//   name: 'John Doe',
//   age: 21,
//   email: 'john.doe@gmail.com',
//   password:'    hello@1   '
// })

// me.save().then(() =>  {
//     console.error(me);
//     }).catch((error) =>  {
//       console.log(error);
//     })


const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: 'Buy milk'
    
    ,
    completed: false
})

task.save().then(() => {
    console.log(task);
}).catch ((error) => {
    console.log(error);
})