const normalPerson = {
    firstName: 'Azizul',
    lastName: 'Hakim Tumzid',
    salary:15000,
    // getFullName : function (){
    //     console.log(this.firstName, this.lastName)
    // },
    chargeBill: function(amount, tips, tax){
        console.log(this)
        this.salary = this.salary - amount + tips - tax;
        return this.salary;
    }
}
// normalPerson.chargeBill(1000);

// console.log(normalPerson.salary);
const dangerousPerson = {
    firstName:'ganja',
    lastName:'chor',
    salary:5000
}

//blind work
// const personChargeBill = normalPerson.chargeBill.bind(dangerousPerson);
// personChargeBill(2002);
// console.log(dangerousPerson);

// call work
// normalPerson.chargeBill.call(dangerousPerson, 2000)
// console.log(dangerousPerson.salary);

// apply work
normalPerson.chargeBill.apply(dangerousPerson, [1000, 500, 10])
console.log(dangerousPerson.salary);