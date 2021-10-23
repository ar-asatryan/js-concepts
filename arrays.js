const arrNums = [13, 2, 78, 0, -7, 59, 65];
const numsSequence = [1, 2, 3, 4, 5];
const companyNames = ["Google", "Synopsys", "Cisco", "Netflix", "Marvel"];
const YEAR_LIMITATION_VALUE = 2011;

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

console.log("users:", users);
console.log("companies:", companies);

//
// Array Methods testing section:
companyNames.forEach((company) => console.log(company));
companies.forEach((c) => console.log("Category -", `${c.category}`));
companies.forEach((c) => (c.category = companyNames));
console.log("modified companies", companies);

const specUser = users.find((u) => u.id > 1);
const myUsers = users.map((h) => h.name);
const filteredUsersTest = users.filter((h) => h.id > 1);

console.log("find-->", specUser);
console.log("map-->", myUsers);
console.log("filter-->", filteredUsersTest);

const usersMap = users.map((user) => ({
  id: user.id,
  id2: 20,
  fullname: `${user.name} ${user.surname}`,
}));

console.log(usersMap);

const concatedArr = users.concat(usersMap);
console.log(concatedArr);

console.log(users.find((item) => item.surname === "banner"));

console.log(users[0].name);
console.log(
  "test array some method>",
  usersMap.some((elem) => elem.fullname === users[0].fullname)
);

const isEveryTest = arrNums.every((elem) => elem < 66);
console.log("every method test", isEveryTest);

// // // implementation of JavaScript Array methods:

//
// implementing myForEach method>>
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
users.myForEach((user) => console.log(user));

//
// implementing myMap method using JavaScript .reduce() and .push()>>
Array.prototype.myMapTest = function (callback) {
  const mappedArray = [];
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(callback(this[i]));
  }
  return mappedArray;
};

Array.prototype.customMap = function (callback) {
  const initialArray = [];
  const mapReducer = (mappedArray, currentItem) =>
    mappedArray.concat(callback(currentItem));
  return this.reduce(mapReducer, initialArray);
};

const usersMapFullname = users.customMap((user) => ({
  id: user.id,
  age: user.age,
  fullname: `${user.name} ${user.surname}`,
}));


console.log("mapped users: ", usersMapFullname);

//
// implementing myFilter method using JavaScript .reduce()and .push()>>

Array.prototype.myFilterTest = function (callback) {
  const resultArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      resultArr.push(this[i]);
    }
  }
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

const filteredUsers = users.myFilter((user) => user.name === "steve");
console.log(
  "my filtered array",
  companies.myFilter((c) => c.category === "Hardware")
);
console.log(filteredUsers);

const filteredCompanies = companies.filter(
  (c) => c.start > YEAR_LIMITATION_VALUE
);

console.log("filteredCompanies: ", filteredCompanies);

//
// implementing myReduce method using JavaScript for loop>>
Array.prototype.myReduce = function (reducer, accumulator) {
  for (let i = 0; i <= this.length; i++) {
    accumulator = reducer(accumulator, i);
  }
  return accumulator;
};

Array.prototype.myMap = function (callback) {
    const initArray = [];
    const mapReducer = (mappedArray, currentItem) => 
      mappedArray.concat(callback(currentItem));
    return this.reduce(mapReducer, initArray);
}

const usersMapFullname2 = users.myMap((user) => ({
  id: user.id,
  age: user.age,
  fullname: `${user.name} ${user.surname}`,
}));

console.log("myMap function result>>>>>>>>> ", usersMapFullname2);

let result = numsSequence.myReduce((sum, current) => sum + current, 0);
console.log("myReduce function result: ", result);

