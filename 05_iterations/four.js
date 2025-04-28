const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
//    console.log(key, myObject[key]);
}

//for each loop, and is higher order function
const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (item) {
//     console.log(item);
// } )

coding.forEach( (item) => {
    // console.log(item);
})

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, arr) =>{
//      console.log(item, index, arr)
// }
// )

const myCoding = [
    {
       languageName: "javascript",
       languageFileName: "Js"
    },
    {
       languageName: "java",
       languageFileName: "java"
    },
    {
       languageName: "python",
       languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})