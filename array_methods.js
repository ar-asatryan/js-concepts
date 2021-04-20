const arrNums = [13, 2, 78, 0, -7, 59, 65];
let numsSequence = [1, 2, 3, 4, 5];

const users = [
  { id: 1, name: "tony", surname: "stark", age: 45, cool: true },
  { id: 2, name: "steve", surname: "strange", age: 40, cool: true },
  { id: 3, name: "bruce", surname: "banner", age: 35, cool: false },
  { id: 4, name: "steve", surname: "rogers", age: 73, cool: false },
  { id: 5, name: "sia", surname: "yung", age: 33, cool: true },
  { id: 6, name: "mystic", surname: "man", age: 30, cool: false },
];

const companies = [
  { id: 1, company: "Google", category: "Software", start: 1994, end: 2004 },
  { id: 2, company: "Synopsys", category: "Hardware", start: 2004, end: 2020 },
  { id: 3, company: "Cisco", category: "Hardware", start: 2011, end: 2019 },
  { id: 4, company: "Netflix", category: "Media", start: 2014, end: 2021 },
  { id: 5, company: "Marvel", category: "Comics", start: 2008, end: 2019 },
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

Array.prototype.myReduce = function (reducer, accumulator) {
  for (let i = 0; i <= this.length; i++) {
    accumulator = reducer(accumulator, i);
  }
  return accumulator;
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
console.log(
  "my filtered array",
  companies.myFilter((c) => c.category === "Hardware")
);

console.log(usersMap);
console.log(usersMap2);
console.log(filteredUsers);

const usersMapFullname = users.myMap((user) => ({
  id: user.id,
  age: user.age,
  fullname: `${user.name} ${user.surname}`,
}));

console.log("mapped users: ", usersMapFullname);

const filteredCompanies = companies.filter(
  (c) => c.start > YEAR_LIMITATION_VALUE
);

console.log("filteredCompanies: ", filteredCompanies);

let result = numsSequence.myReduce((sum, current) => sum + current, 0);
console.log("myReduce function result: ", result);
