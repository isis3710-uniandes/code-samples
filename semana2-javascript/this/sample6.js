const person = {
  name: "Juan",
  age: 6,
  sayHello: function () {
    function myAge() {
      console.log(`I am ${this.age} years old`);
    }
    myAge();
  },
};

person.sayHello();
