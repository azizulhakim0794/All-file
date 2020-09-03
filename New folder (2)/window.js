

//new keyword, class and object difference
class Person {
    constructor(firstName,lastName,salary){
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
    }
}
const heroPerson = new Person('hero', 'ganja', 50000);
console.log(heroPerson);
const ganjaPerson = new Person('hero', 'alom', 25000);
console.log(ganjaPerson);



// onok age  aita manush use korto kintu akhon aita use kore na. 

function Person1(firstName,lastName,salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary
}
const oldPerson = new Person1('Grand','papa',1200);
console.log(oldPerson);