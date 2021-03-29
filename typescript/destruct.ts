'use strict'

const user = { id: "someID", username: "Tony", nickage: 44, weight: 566 };

const { id, ...newObj } = user;

// const modif = { ...newObj, testID: 44 };

console.log("user", user);
console.log("newObj", newObj);

// const myObj = {...user};
const myObj = user;
console.log("myObj", myObj);

console.log(user == myObj);
console.log(user === myObj);


