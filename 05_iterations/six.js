// const coding = ["js","ruby","java","python","cpp"];

const myNums = [1,2,3,4,5,6,7,8,9,10];

// let newNums = myNums.filter( (num) => num > 4);//if use sxope{} then u have to write return keyword
// console.log(newNums);


const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers.map( (num) => num + 10);

const newNums = myNumbers.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num >= 40)
console.log(newNums);

//reduce

const newno = [1,2,3];

// const myTotal = newno.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0)

// console.log(myTotal);

//reduce in arrow func
const myTotal = newno.reduce( (acc,curr) => acc+curr, 0);
console.log(myTotal);