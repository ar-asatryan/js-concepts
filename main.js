// Promise.race();
const arr1 = [1, 2, 3 ,4];
const arr2 = [3, 4, 5, 6];

let mystic;
for (let i = 0; i<= arr1.length; i++) {
    mystic = arr2.includes(arr1[i])
}

const filteredArray = arr1.filter(value => arr2.includes(value));

function intersection(num1, num2) {
    
}

console.log(mystic)
console.log(filteredArray)


for(let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0);
}