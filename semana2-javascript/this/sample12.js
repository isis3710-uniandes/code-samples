const person = {
  name: "Juan",
  age: 6,
  sayHello: function () {
    const myAge = () => {
      console.log(`I am ${this.age} years old`);
    };
    console.log(`I am ${this.name}`);
    myAge();
  },
};

person.sayHello();
