const person = {
    name: "Emmanuel",
    age: "45",
    greet() {
        console.log("Hi I am " + this.name)
    }
};

person.greet();