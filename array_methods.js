const arrNums = [13, 2, 78, 0, -7, 59, 65];

const users = [
  { id: 1, name: "tony", surname: "stark", age: 45, cool: true },
  { id: 2, name: "steve", surname: "strange", age: 40, cool: true },
  { id: 3, name: "bruce", surname: "banner", age: 35, cool: false },
  { id: 4, name: "steve", surname: "rogers", age: 73, cool: false },
  { id: 5, name: "sia", surname: "yung", age: 33, cool: true },
  { id: 6, name: "mystic", surname: "man", age: 30, cool: false },
];

const specUser = users.find((u) => u.id > 1);
const myUsers = users.map((h) => h.name);
const filteredUsers = users.filter((h) => h.id > 1);

console.log("find-->", specUser);
console.log("map-->", myUsers);
console.log("filter-->", filteredUsers);

// let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// const modified = fruits.slice(2,4);
// console.log(modified);

const usersMap = users.map((user) => ({
  id: user.id,
  id2: 20,
  fullname: `${user.name} ${user.surname}`,
}));

console.log(usersMap);

const concatedArr = users.concat(usersMap);
console.log(concatedArr);

console.log(users.find((item) => item.surname === "banner"));

const usersMap = users.map((item) => ({
  id: item.id,
  fullname: `${item.name} ${item.surname}`,
}));

const usersMap2 = users.map((user) => ({
  noIdea: user.surname,
}));

console.log("noIdea:", usersMap2);
console.log(usersMap);
console.log(users[0].name);

console.log(
  "test array some method>",
  usersMap.some((elem) => elem.fullname === users[0].fullname)
);

const isEveryTest = arrNums.every((elem) => elem < 66);
console.log("every method test", isEveryTest);

// // //

Array.prototype.myMapTest = function (callback) {
  var arr = [];

  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }

  return arr;
};

Array.prototype.myFilter = function (callback) {
  const initialArray = [];
  const filterReducer = (filteredArray, currentItem) => {
    const isIncluded = callback(currentItem);
    if (isIncluded) {
      return filteredArray.concat(currentItem);
    }
    return filteredArray;
  };
  return this.reduce(filterReducer, initialArray);
};

Array.prototype.myMap = function (callback) {
  const initialArray = [];
  const mapReducer = (mappedArray, currentItem) =>
    mappedArray.concat(callback(currentItem));
  return this.reduce(mapReducer, initialArray);
};

const usersMap = users.myMap((user) => ({
  id: user.id,
  fullname: `${user.name} ${user.surname}`,
  age: user.age,
}));

const usersMap2 = users.myMap((user) => ({
  name: user.name,
}));

const filteredUsers = users.myFilter((user) => user.name === "steve");

console.log(usersMap);
console.log(usersMap2);
console.log(filteredUsers);
