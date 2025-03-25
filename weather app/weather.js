const fetch = require('fetch').fetchUrl
const { FetchStream } = require('fetch')
const request = require('request')

const ApiKey = "eea41708284f798ca7dce6f3943f47e3"
const url = "http://api.weatherstack.com/current?access_key=eea41708284f798ca7dce6f3943f47e3&query=17.4065,78.4772"

// const data = request((url), (err, res) => {
//     if (err) {
//         console.log(err)
//         }
//         else {
//             const weatherData = JSON.parse(res.body)
//             //console.log(weatherData)
//             const temp = weatherData.current.temperature
//             console.log('It is current temp :' + temp + ' It is : ' + weatherData.current.weather_descriptions[0])
//         }
// })



//getting  error
// const data1 =  async () => {
//     try {
//         const response = await fetch("http://api.weatherstack.com/current?access_key=eea41708284f798ca7dce6f3943f47e3&query=17.4065,78.4772")
//         const weatherData1 = await response.json()
//         console.log(weatherData1)
//     } catch (error) {
//         console.log(error)
//     }
// }
// data1()


const geoCode = (address, callback) => {
    
    const url = `http://api.weatherstack.com/current?access_key=eea41708284f798ca7dce6f3943f47e3&query=${address}`

    request( url, (error, res) => {
        if (error) {
            callback('unable to connect', undefined)
        } else if (!res.body ) {
            callback('no data found',undefined)
        }
        else {
            const data1 = JSON.parse(res.body)
            if( !data1.location) {
                callback('Unable to find location', undefined)
            }
            callback(undefined, {
                'location': data1.location.name,
                'Latitude': data1.location.lat,
                'Longitude': data1.location.lon
                })
            }
    })
}

// geoCode('london', (error, data) => {
//     if (error) {
//         console.log('error', error)
//     }
//     console.log('here:', data)
// })

module.exports = geoCode



  