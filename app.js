const arrNums = [13, 2, 78, 0, -7, 59, 65];
const numsSequence = [1, 2, 3, 4, 5];
const companyNames = ["Google", "Synopsys", "Cisco", "Netflix", "Marvel"];

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

const usersMap = users.map( u => ({
  id: u.id,
  fullname: `${u.name} ${u.surname}`
}) );

console.log("usersMap", usersMap);

// implementing myMap method using JavaScript .reduce()>>
Array.prototype.myMap = function(callback) {
  const initArray = [];
  const mapReducer = (mappedArray, currentItem) =>
  mappedArray.concat(callback(currentItem));
  return this.reduce(mapReducer, initArray); 
}

const myUsersMap = users.myMap( user => ({
  id: user.id,
  age: user.age,
  fullname: `${user.name} ${user.surname}`
}));

console.log("myUsersMap:", myUsersMap);
