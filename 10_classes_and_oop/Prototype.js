// let myName = "saif       ";

// console.log(myName.truelength);

let myHeroes = ["thor, spiderman"];


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.saif = function() {
    console.log(`saif is present in all objects`);
}
// heroPower.saif()
myHeroes.saif()