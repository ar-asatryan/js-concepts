const arrNums = [13, 2, 78, 0, -7, 59, 65];

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
  { id: 3, company: "Netflix", category: "Media", start: 2014, end: 2021 },
  { id: 4, company: "Marvel", category: "Comics", start: 2008, end: 2019 },
];

// ToDo:

Array.prototype.myMap = function (callback) {
  const initArr = [];
  const mapReducer = (mappedArr, currentItem) =>
    mappedArr.concat(callback(currentItem));
  return this.reduce(mapReducer, initArr);
};

const usersMap = users.myMap((user) => ({
  id: user.id,
  fullname: ``,
}));
