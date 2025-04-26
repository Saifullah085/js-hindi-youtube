const user = {
    username: "sam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "ali";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "saif";
//     console.log(this.username);
// }
// chai();

// const chai = function () {
//     let username = "saif";
//     console.log(this.username);
// }

const chai = () => {
    let username = "saif";
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) =>  (num1 + num2);
const addTwo = (num1, num2) =>  ({username: "saaif"}); //returning object

console.log(addTwo(5,3));