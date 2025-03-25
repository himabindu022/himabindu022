// //this is the regular function
// const book = function(name) {
//     return name
// }
// console.log(book('mike'))


// //arrow function
// const book1 = (name) => {
//     return name
// }
// console.log(book1('jack'))


// //Concise the syntex by using arrow function
// const book2 = (name3) => console.log(name3)
// book2('jhon')

// const event1 = {
//     name: 'john',
//     age: 25,
//     party: 'birthday party',
//     guestList: function() {
//         console.log(`${this.name} is having a ${this.party} and you are invited`)
//     },

//     //By using arrow function in this 
//     //we got undefined
//     guestList1: () => {
//         Object.keys(event1).forEach((data) => {
//             if(data === 'name' || data === 'party') {
//                 console.log(`${event1.name} is having a ${event1.party} and you are invited`)
//             }
            
//         })
//            //we got undefined because this binding haven't access in arrow function
//        // console.log(`${this.name} is having a ${this.party} and you are invited`)
//     }
// }

// event1.guestList1()




