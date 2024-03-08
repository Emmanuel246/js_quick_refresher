var name = "Emmanuel";
var age = 20;
var hasHobbies = true;

function summarizeUser(userName, userAge, UserHasHobby) {
    return (
        "Name is " + userName
        + ", age is " + userAge + " and the user has hobbies: " + UserHasHobby
    );
}

console.log(summarizeUser(name, age, hasHobbies))