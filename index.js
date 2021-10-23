//
//implementing JavaScript Array methods...
const users = [
  { id: 1, name: "tony", surname: "stark", age: 45, cool: true },
  { id: 2, name: "steve", surname: "strange", age: 40, cool: true },
  { id: 3, name: "bruce", surname: "banner", age: 35, cool: false },
  { id: 4, name: "steve", surname: "rogers", age: 73, cool: false },
  { id: 5, name: "sia", surname: "yung", age: 33, cool: true },
  { id: 6, name: "mystic", surname: "man", age: 30, cool: false },
];

const numbers = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function(reducer, accumulator) {
  for(let i = 0; i < this.length; i++) {
    accumulator = reducer(accumulator, i);
  }
  return accumulator;
}

Array.prototype.myMapSimple = function(callback) {
  const resultArray = [];
  for(let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i]));
  }
  return resultArray;
}

const usersMap = users.myMapSimple((user) => ({
  id: user.id,
  age: user.age,
  fullname: `${user.name} ${user.surname}`
}));

console.log("usersMap:", usersMap)

Array.prototype.myMap = function(callback) {
  const initArray = [];
  const mapReducer = (mappedArray, currentValue) =>
  mappedArray.concat(callback(currentValue))
  return this.myReduce(mapReducer, initArray);
}


