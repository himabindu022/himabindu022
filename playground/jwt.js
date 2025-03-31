const jwt = require('jsonwebtoken')

const myfun = async() => {
    const token = jwt.sign({_id:'bhdfyu'}, 'bggdfsgdgushd', { expiresIn: '12 hours'})
    console.log(token)

    const data = jwt.verify(token, 'bggdfsgdgushd')
    console.log(data)
}
myfun()
