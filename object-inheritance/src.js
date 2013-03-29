function Person(){};

function Ninja(){};

Ninja.prototype = new Person();





var ninja = new Ninja();

console.log(ninja instanceof Ninja);
console.log(ninja.constructor == Ninja);
console.log(ninja instanceof Person);
console.log(ninja.constructor == Person);