const geoCode = require('../weather')
const forecast = require('../forecast')

const address = process.argv

if(!address) {
    console.log('Please provide an address')
}
else {
    geoCode(address, (error, data) => {
        if (error) {
            console.log('error', error)
        }
        //console.log('here:', data)
    
        forecast(data.Longitude, data.Latitude, (err, data) => {
            if( err) {
                console.log(err)
            }
            console.log('here', {
                location: data.location,
                forecast: data.weather_descriptions,
                temperature: data.temperature
            })
        })
    }) 
}


console.log(process.argv)