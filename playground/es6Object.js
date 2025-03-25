//Object shorthand 
const name1 =  "bindu"
const age1 = 30

const user = {
    name1,
    age1,
    location: 'Hyderabad'
}

console.log(user)

//Object destructuring

const product = {
    id: 1,
    name: 'Laptop',
    price: 50000,
    isAvailable: true
    }


const transaction = (type ,{isAvailable}) => {
    console.log(type)
    //console.log(product.name, product.price)
    console.log(isAvailable)
}
transaction('purchase', product)


const tsttt = ({id}) =>{
    console.log(id)
}
tsttt(product)


const user1 = {
    name : 'hello',
    age: 2,     //overridden age
    location: 'Hyderabad'
} 

const {  name: name, age= 12, location } = user1;

console.log(name);  
console.log(age);  
console.log(location);   



