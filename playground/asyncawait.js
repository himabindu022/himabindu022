// const add = (a, b) => {
//     return a + b;
// }


// const doWork = async() => {
//    // return 'bindu'
//     let  sum = await add(1,2)
//     //console.log(typeof sum)
//    return sum
// }
// //console.log(doWork())

// doWork().then((res)=> {
//     console.log(res)
// }).catch((error) => {
//     console.log(error)
// })



// const doworkwithoutasync = () => {

// }
// console.log(doworkwithoutasync())

// const myfun = async() => {
//     try {
//         const data =await  add(2,4)
//         //console.log(data)
//         //console.log( data)
//         return data
//     } catch (error) {
//         console.log(error)
//     }
// }
// myfun()

const add = (a, b) => {
    return a + b;
}
add()

const myfun = async () => {
    console.log("Before return");  
    const data = add(1,5)
    console.log(data)
    return data;
};
const data = 
myfun(); 
