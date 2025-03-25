const yargs = require("yargs")

//console.log(process.argv)

//create add command
yargs.command({
    command: 'add',
    describe: 'ADD a note',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'Title of the note',
        }
    },
    handler: function(){
        console.log('Adding a new note ' + yargs.argv.title)
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note')
        }
})

//list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log('Listing all notes')
        }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            type: String,
            describe: 'hello',
            demandOption: true,
        }
    },

    handler: function(){
        console.log('Reading a note ' + yargs.argv.title)
        }
})

console.log(yargs.argv)

const fs = require('fs')

const book = {
    title: '1984',
    author: 'George Orwell',
    year: 1949
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('json.js', bookJSON)

const databuffer = fs.readFileSync('json.js')
//console.log(databuffer.toString())
const data = JSON.parse(databuffer.toString())
//console.log(data)

// const personData = {
//     name: 'John',
//     age: 30,
//     occupation: 'Developer',
// }

const parseJSON = fs.readFileSync('json.js')
const data1 = parseJSON.toString()
const data2 = JSON.parse(data1)

data2.title= 'bindu',
data2.year = 1925

const data3 = JSON.stringify(data2)
console.log(data3)

const fsData = fs.writeFileSync('notes.js', 'hello world !')
const fsRead = fs. readFileSync('notes.js')
console.log(fsRead.toString())

