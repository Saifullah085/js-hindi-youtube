// Primitive //they are call by value

// 7 types : String, Number, Boolean, null, undefined, BigInt, Symbol

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 1354534564644365645543646546n;



//Reference (Non primitive) //memory me reference direct allocate kia ja sakta hai

//Array, Object, Functions

const heroes = ["damri","cheeni","hamini"];
let myObj = {
    name: "hitesh",
    age: 12
}

const myFunction = function() {
    console.log("hello world");
}

console.log(typeof bigNumber);

//++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "saifullahbrohi";

let anothername = myYoutubeName;
anothername = "ishowspeed";

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "saifullah@dal.com";

console.log(userOne.email);
console.log(userTwo.email);