// singleton //constructor se agar banega to

// object literals

const mySym = Symbol("key1");


const Jsuser = {
    name: "saifullah",
    "full name": "Saifullah Brohi",
    [mySym]: "mykey1",
    age: 19,
    location: "nawabshah",
    email: "saif@gamil.com",
    isLoggedIn: false,
    lastloginDays: ["Monday","Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
 //console.log(Jsuser[mySym]);

Jsuser.email = "saifullahbgs@gamil.com";
// console.log(Jsuser.email);
// Object.freeze(Jsuser);
Jsuser.email = "sai12345hbgs@gamil.com";
// console.log(Jsuser);

Jsuser.greeting = function() {
    console.log("Hello Js user");
}
Jsuser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());