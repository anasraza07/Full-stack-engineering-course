const user = {
    "first name": "Anas",
    lastname: "raza",
    age: 22
}

console.log(user["first name"]);
console.log(user.lastname);
console.log(user["age"]);

user.age = 20;

let name1 = "Anas"
let name2 = name1;
console.log(name1, name2);
name2 = "Anas2";
console.log(name1, name2);

const user2 = user;
console.log(user2.age, user.age)
user2.age = 30;
console.log(user2.age, user.age)