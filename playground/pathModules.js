const path = require('path')

//multiple path segments into single file
const fullPath = path.join('/users', 'nodejs', 'projects');
console.log(fullPath);  

//sequence of paths into a absolute path means  fron root directory
const resolve  = path.resolve('folder','notEqual.js')
console.log(resolve)

//last part of the path
const basename = path.basename('D:/bindu backend/udemy parctice/folder/notEqual.js')
console.log(basename)

//extension file from the given path ,      including .
const etname = path.extname('/udemy parctice/folder/notEqual.js')
console.log(etname)

//except last part of th path
const dirname = path.dirname('D:/bindu backend/udemy parctice/folder/notEqual.js')
console.log(dirname)

//format path object into path string
const pathObject = {
    dir: 'D:/bindu backend/udemy parctice/folder',
    base: 'notEqual.js'
  };
  const format = path.format(pathObject)
  console.log(format)

//path that begins from the root of the file system
  const isAbsolute = path.isAbsolute('D:/bindu backend/udemy parctice/folder/notEqual.js')
  console.log(isAbsolute)

  //the relative path from one path to another.
  const relative = path.relative('D:/bindu backend/udemy parctice', 'D:/bindu backend/udemy parctice/folder/notEqual.js')
  console.log(relative)


  //path string into object
  const parse = path.parse('D:/bindu backend/udemy parctice/folder/notEqual.js')
  console.log(parse)