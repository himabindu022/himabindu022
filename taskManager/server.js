const express = require('express')
const multer = require('multer')
require('./mongoose')
//const UserData = require('./models/usermodel')
//const Task = require('./models/tasks')
const userRoute = require('./routes/userRoutes')
const taskRoute = require('./routes/taskRoutes')

const app = express()
const port = process.env.PORT || 3000


//multer for upload image files
const upload = multer({
    dest:'images'
})

app.post('/upload', upload.single('image'),async(req, res) => {
    res.send()
    
})




// Apply to  ththe all routes middleware
// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down')
// })

//At specific conditions
// app.use((req, res, next) =>{
//     if (req.method === 'GET'){
//         res.send('Site is currently down')
//     }
//     else{
//         next()
//     }
// })


app.use(express.json())//parse theincoming requests
app.use(userRoute)  //Handle the All routes in userRoute
app.use(taskRoute)  //Handle the All routes in taskRoute




app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
