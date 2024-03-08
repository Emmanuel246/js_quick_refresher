const name = "Emmanuel";
const age = 20;
const hasHobbies = true;

const summarizeUser = (userName, userAge, UserHasHobby) => {
    return (
        "Name is " + userName
        + ", age is " + userAge + " and the user has hobbies: " + UserHasHobby
    );
}
const add = (a, b) => a + b;
console.log(add(2,4))

const random = () => 1 + 4;
console.log(random(1));
console.log(summarizeUser(name, age, hasHobbies))