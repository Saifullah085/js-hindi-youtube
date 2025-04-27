// if

if (2 === "2") {
   console.log("executed");
   
}

// const score = 200;

// if (score > 100) {
//     const power = "fly";
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// switch statemnt
// const month = 3;
// switch (month) {
//    case 1:
//       console.log("january");
//       break;
//    case 2:
//       console.log("february");
//       break;
//    case 3:
//       console.log("march");
//       break;
//    case 4:
//       console.log("april");
//       break;

//    default:
//       console.log("not match");
      
//       break;
// }


//truthy of falsy value

const userEmail = [];
 if (userEmail) {
    console.log("Got user email");
    
 } else {
   console.log("dont have user email");
 }

//  falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empyty")
}

// Nullish Coalescing Operator (??): null undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// ternary operator

// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
