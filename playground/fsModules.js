 const fs = require('fs')

// fs.writeFile('notes.js',  'hello this is node js' , (err)=> {
//     if (err) {
//             console.log(err);
//         }
//         else {
//             console.log('file created')
//         }
// })


// fs.appendFile('example.txt', '\nThis is appended text!', (err) => {
//     if (err) {
//         console.log('Error appending file:', err);
//         return;
//     }
//     console.log('Text appended successfully!');
// });


// fs.readFile('notes.js', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// fs.unlink('example.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File deleted successfully!');
// })

fs.mkdir('folder1/folder2/folder3',{ recursive: true }, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Directory created successfully!');  
})

// fs.rmdir('hello.js', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Directory deleted successfully!');
// })



// fs.rename('example.txt' ,'hello.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File Renamed Successfully');
// })


