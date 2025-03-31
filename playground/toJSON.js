const pet = {
    name: 'Fido',
}

console.log(pet)
console.log(JSON.stringify(pet))


pet.toJSON = function() {
    console.log(this)
    return this
}