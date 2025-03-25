const geoCodeData = require('./weather')
const forecastData = require('./forecast')



const weatherDataAsync = async( req, res ) => {
    try {
        const address = req.query.address
        if (!address) {
            return res.status(400).send({ error: 'You must provide an address' })
        }
        const geoCodeData = await geoCodeData(address)
        
        if(!geoCodeData) {
            return res.status(400).send({ error: 'Unable to find location' })
        }
        console.log(geoCodeData)
        const { Longitude, Latitude, Location } = geoCodeData

        const forecastData = await forecastData( Longitude, Latitude, Location )

        if(!forecastData) {
            return res.status(400).send({ error: 'Unable to find forecast' })
        }
        console.log(forecastData)
        return res.status(200).json({
            location: forecastData.location,
            forecast: forecastData.forecast,
            temperature: forecastData.temperature,
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = weatherDataAsync;

