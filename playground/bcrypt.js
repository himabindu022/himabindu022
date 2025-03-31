const bcrypt = require('bcrypt')

//returns in promise so use promise or async
const myfun = () => {
    return new Promise((resolve, reject) => {
        const password = 'sdsfd'
        const hashed = bcrypt.hash(password, 10)
        resolve(hashed)
        //reject(hashed)
    })
}
myfun().then((res) => {
    console.log('Hashed password in Promises ' +res)
}).catch((err) => {
    console.log(err)
})




//Asunc

const myfunct = async() => {
    try {
        const password = 'sdsfd'
        const hashed = await  bcrypt.hash(password, 10)
        //console.log( hashed)
        if(!hashed)  {
            console.log(error)
        }
        console.log( hashed)
        const isMatch = await bcrypt.compare(password, hashed)
        console.log(isMatch)
    } catch (error) {
        console.log(error)
    }
}
myfunct()