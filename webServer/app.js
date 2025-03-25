const express = require('express')  // function , object,  create new application 
const path = require('path')
const hbs = require('handlebars')


const geoCodeData = require('../weather app/weather')
const forecastData = require('../weather app/forecast')
const connectDB = require('../config/db')

const app = express()

console.log(__dirname) // current page directory path
console.log(__filename)
const publicfilepath = path.join(__dirname, './public')  //Toconnect the public folder
console.log(publicfilepath)
const viewfilePath = path.join(__dirname,'./views')
console.log(viewfilePath)

//app.set('view engine', 'hbs')
app.set('views', viewfilePath) // set the view engine to handlebars and set the views  for customize
app.use(express.static(publicfilepath)) //To serve the static files 


app.get('', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('<h1>This is the about page</h1>')
})

app.get('/weather', (req, res) => {
    res.render('index',{
        city: 'New York',
        forecast: 25,
    })
})

app.get('/weatherForecast', (req, res) => {
    console.log(req.query)
    if(!req.query.address){
        return res.send('Please provide the address')
    }
    res.send({
        address: req.query.address,
        forecast: 30,
        location: 'London'
    })
})

app.get('getWeatherData', (req, res) => {
    if(!req.query.address) {
        return res.send('Please provide the address')
    }

    geoCodeData((req.query.address), (err, res) => {
        const { Longitude, Latitude, Location} = req.body
        if(err) {
            res.send(error)
        } 
        forecastData((Longitude, Latitude, Location),(err, weatherData) => {
            if(err) {
                res.send(error)
            }
            res.send(weatherData)
        })
    })

})


app.get('*', (req, res) => {
    res.send('404 Page not found')
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

connectDB()