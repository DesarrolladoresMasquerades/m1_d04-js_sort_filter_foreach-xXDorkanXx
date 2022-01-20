// Class code examples

const students = [
    { firstName: 'John', lastName: 'Carr', age: 34 },
    { firstName: 'Leonardo', lastName: 'Di Vittorio', age: 21 },
    { firstName: 'Sarah', lastName: 'O\'Connor', age: 45 }
];

students.forEach(console.log);

/*for(const student of students){
    console.log(student)
};*/

const greetings = [];

const printOlderThan25 = (person) =>{
    if(person.age >= 25) greetings.push((`Hello ${person.firstName}`))
};

/*const printOlderThan25 = (cappuccino) =>{
    if(cappuccino.age >= 25) console.log(`Hello ${cappuccino.firstName}`)
};

students.forEach(printOlderThan25);*/

const numberArray = [1,2,3,4,5,6,7,8,9];

const printOddIndexElements = (element, index) =>{
    if(index % 2 === 0) console.log(`Element ${element} is in an even index`)
    else console.log(`Element ${element} is in an odd index`)
};

numberArray.forEach(printOddIndexElements)