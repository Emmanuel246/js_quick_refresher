const person = {
    name: "Emmanuel",
    age: "45",
    greet() {
        console.log("Hi I am " + this.name)
    }
};

// person.greet();

const printName = ({ name }) => {
    console.log(name);
};

printName(person)
const {name, age} = person;
console.log(name, age)
// const copiedPerson = {...person};
// console.log(copiedPerson);
// const hobbies = ['Sports', 'Cooking'];

// for (let hobby of hobbies) {
//     console.log(hobby)

// }


// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//     return args;

// };

// console.log(toArray(1,2,3,2,2,1,))

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby))
// console.log(hobbies)