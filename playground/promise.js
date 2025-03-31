require('../taskManager/mongoose')
//require('../config/db')
const UserData = require('../taskManager/models/tasks')

// const doWorkPromises = new Promise((resolve, reject) => {
//     const success = false
//     setTimeout(() => {
//        if(success) {
//         resolve('completedly')
//        } else {
//         reject('Work failed')
//        }
//     }, 1000)
// }) . then((res) => {
//     console.log('Work done '+ res)
// }).catch((err) => {
//     console.log('Work failed'+err)
// })




// //Promise Chaining in node js

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = a + b
            reject(result)
        }, 2000)
    })
}
add(4,5).then((sum) => {
    console.log(sum)
    return add(sum,4)
}).then((sum1) => {
    console.log('Final result '+ sum1)
}).catch((error) => {
    console.log(error)
})


// //In mongoose
// UserData.findByIdAndUpdate("67e26c2f8ffa6c079e3244b6",{ email: "bindu@1"}).then((user)=>{
//     //console.log(user)
// }).then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

// UserData.findOne({_id:'67e26c2f8ffa6c079e3244b6'})
//     .then((user) => {
//         console.log(user);  // Logs the user document if found
//     })
//     .catch((err) => {
//         console.log(err);  // Handles errors
//     });


//     const findUser = async( id) => {
//         const user = await UserData.findById(id)
//         console.log(user)
//         return user
//     }
//     findUser('67e26c2f8ffa6c079e3244b6').then((data) => {
//         console.log(data)
//     }).catch((err) => {
//         console.log(err)
//     })
        