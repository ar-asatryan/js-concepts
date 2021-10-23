const users = [
    { id: 1, name: "tony", surname: "stark", age: 45, cool: true },
    { id: 2, name: "steve", surname: "strange", age: 40, cool: true },
    { id: 3, name: "bruce", surname: "banner", age: 35, cool: false },
    { id: 4, name: "steve", surname: "rogers", age: 73, cool: false },
    { id: 5, name: "sia", surname: "yung", age: 33, cool: true },
    { id: 6, name: "mystic", surname: "man", age: 30, cool: false },
];

Array.prototype.customMap = function (callback) {
    const mappedArray = [];
    for(let i = 0; i < this.length; i++) {
        mappedArray.push(callback(this[i]));
    }
    return mappedArray;
}

Array.prototype.customFilter = (callback) => {
    const filteredArray = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i]))
            filteredArray.push(this[i]);
    }
    return filteredArray;
}

Array.prototype.customReduce = (reducer, accumulator) => {
    for(let i = 0; i <= this.length; i++) {
        accumulator = reducer(accumulator, i);
    }
    return accumulator;
}

Array.prototype.myMap = function (callback) {
    const initArray = [];
    const mapReducer = (mappedArray, currentItem) => mappedArray.concat(callback(currentItem));
    return this.reduce(mapReducer, initArray);
}

const mappedUsers2 = users.myMap( user => ({
    id: user.id,
    age: user.age,
    fullname: `${user.name} ${user.surname}`,
    cool: user.cool
  })
);

console.log("mappedUsers2: ", mappedUsers2)

const filteredUsers = users.filter( user => user.age > 44);

//console.log(mappedUsers)
console.log(filteredUsers)

