
//   const data = mongoose.Schema({
//     name: String,
//     age: Number,
//   })

// const User = mongoose.model("User", data)

//console.log(User);

// insertOne
// const UserData = async() => {
//   const user = await  User.create({
//     name: "jack",
//     age: 250
//   })
//   if( user) {
//     console.log(user)
//   }
//   else {
//     console.log("Error")
//   }
// }
// UserData()


//insertMany 
// const insertManyUsers  = async() => {
//   const users = await User.insertMany([
//     {
//       name: "rock",
//       age: 30
//     },
//     {
//       name: "cake",
//       age: 20
//     },
//     {
//       name: "make",
//       age: 40
//     }
//   ])
//   if(users) {
//     console.log(users)
//   }
//   else {
//     console.log('error')
// }
// }
// insertManyUsers()


//update
// const UpdateUser = async() => {
//   const user = await User.updateOne({name: "jack"}, {age: 25})
//   if(user) {
//     console.log(user)
//     }
//     else {
//       console.log("Error")
//       }
// }
// UpdateUser()


//UpdateMany()

//  const UpdateManyUser = async() => {
//   try {
//     const user = await User.updateMany(
//       {age : 30}  , 
//       {$set: { address:'hyderabad'}},  
//   )
//   console.log(user)
//  } catch(error) {
//    console.log(error)
//  }
//  }
//  UpdateManyUser()



// const user = User.updateMany(
//   {age : 25}  , 
//   {$set: { address:'hyderabad'}},  
// )
// if(!user) {
//   console.log('error')
// }
// else {
//   console.log('updated'+ user)
// }


//////////////////*****Quert Document ************** /////??
//find
// const FindUser = async() => {
//     const user = await User.find({name: "jack"}) 
//     if(user) {
//       console.log(user)
//     }
//     console.log('error')
//   }
// FindUser()


//findOne 
// const FindOneUser = async() => {
//   const user = await User.findOne({name: "jack"})
//   if(user) {
//     console.log(user)
//   } else {
//     console.log("Error")
//   }
// } 
// FindOneUser()

//


// const MongoDB = require('mongodb').MongoClient

// const mongodb_url = 'mongodb://127.0.0.1:27017'

// const dataBaseName = 'taskManager'

//  MongoDB.connect(mongodb_url, { useNewUrlParser: true }, (err, connect) => {
//   if (err) {
//     console.log(err)
//   } 
   
//   const db = connect.db(dataBaseName)
//   console.log('Connected to MongoDB wiht'+ db)

//   const data = db.collection('user').insertOne({
//     name: 'John Doe',
//   })
//   console.log(data)
// }