function multipleBy5(num) {
    return num * 5;
}

multipleBy5.Power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.Power);
console.log(multipleBy5.prototype);


function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printme = function(){
    console.log(`price is ${this.score}`);
}
const chai = new createUser("chai",25)
const tea = createUser("tea",200)

chai.printme()