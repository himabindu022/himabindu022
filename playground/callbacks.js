const fs = require('fs')

const dowrokCallback = (callback) => {

        callback('error', undefined)
        callback(undefined, 'data')
        callback(null, [1])
}
dowrokCallback((err,result) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log(result)
    }
})

const callba1 = (callback) => {
    callback(null, 'data1')
    callback(null, 'data2')
    callback(null, 'data3')
    }
    greet((err, result) => {
        if(err) {
            console.log(err)
        }
        else {
            console.log(result)
        }
})
 
callba1('bindu',greet)


// const fileCallback = (callback) => {
//         callback(undefined, 'data')
//         callback('error', undefined) 
// }

// fileCallback((err, data) => {
//     if (err) {
//         console.log('Error:', err);
//     } else {
//         console.log('File Content:', data);
//     }
// });


// fs.readFile('./inde.txt', 'utf-8',(err, result) => {
//     if(err) {
//         console.log(err)
//     }
//     else {
//         console.log(result)
//     }
// })