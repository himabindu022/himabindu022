const request = require('request')

const forecast = (Longitude,Latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=eea41708284f798ca7dce6f3943f47e3&query=${Longitude,Latitude}`

    request(url, (err, resp) =>{
        const lonLatData = JSON.parse(resp.body)
        if(err){
            callback('unable to connect', undefined)
        } else if (lonLatData.error){
            callback('no data found', undefined)
        } else {
            callback(err, {
                forecast: lonLatData.current.weather_descriptions[0],
                location: lonLatData.location.name,
                temperature: lonLatData.current.temperature
            })
        }
    })
}

// forecast('83.340','17.220', (err, data) => {
//     if( err) {
//         console.log(err)
//     }
//     console.log('here',data)
// })


module.exports = forecast