console.log('Hello from Node.JS');

// const person = require('./person');

// console.log(person.name);

const Person = require('./person');

const person1 = new Person('Sheila Toupal', 50);

person1.greeting();
