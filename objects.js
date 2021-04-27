const usersObject = {
  0: { age: 18, name: "john", marks: 400 },
  1: { age: 17, name: "julie", marks: 400 },
  34: { age: 20, name: "julie", marks: 400 },
  2: { age: 18, name: "robin", marks: 200 },
  2: { age: 18, name: "robin", marks: 100 },
  3: { age: 16, name: "bella", marks: 300 },
};

const output = {
  34: { age: 20, name: "julie", marks: 400 },
  1: { age: 18, name: "robin", marks: 200 },
  2: { age: 16, name: "bella", marks: 300 },
};

const result = Object.entries(usersObject);

console.log("result:", result);
console.log("userObject:", usersObject);

console.log("type of usersObject:", typeof usersObject);
console.log("type of result:", typeof result);

for ( let i = 0; i <= result.length; i++) {
  
}








