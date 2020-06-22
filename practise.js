console.log('execution', 'Operation1')
console.log('execution', 'Operation2')
console.log('execution', 'Operation3')

setTimeout(function () {
    console.log('setTimeout operation')
},5000)

console.log('execution', 'Operation4')
console.log('execution', 'Operation5')
console.log('execution', 'Operation6')



const funcExpr = function() {};

console.log(typeof funcExpr);


setTimeout( function() {
    console.log('console output')
}, 2000);



console.log('=================>')
console.log(typeof {});
console.log(typeof []);
console.log(typeof function() {});
console.log(Boolean({}))
console.log(Boolean([]))
console.log(Boolean(function(){}))


console.log()

// ToDo: Given a sequence of integers as an array, determine whether it is possible
//  to obtain a strictly increasing sequence by removing no more than one element from the array.

function checkIsAlmostIncreasingSequence(array) {
    function checkIsArrayIncreased(array,index){
        for (let i = 0; i < array.length; i++) {
            if(i === index){
                continue
            }
            else if(array[i] > array[i + 1]){
                return false
            }
        };
        return true
    };
    for(let i = 0; i <array.length; i++){
        if(checkIsArrayIncreased(array,i)){
            return true
        }
    };
    return false
};
//console.log(checkIsAlmostIncreasingSequence([1, 3, 2]))

// ToDo: Find min and max elements in the array and replace them:

Array.prototype.replaceMinAndMaxElements = function () {
    function getMinOrMaxNumber(array,maxOrMin){
        for (const element of array) {
            let minOrMaxNumber = true;
            for (let index = 0; index < array.length; index++) {
                if(element<array[index] && maxOrMin){
                    minOrMaxNumber = false;
                    break
                };
            };
            if(minOrMaxNumber){
                return element
            }
        }
    };
    function replaceTwoElements(array,element1,element2){
        const index1 = array.indexOf(element1);
        const index2 = array.indexOf(element2);
        array[index1] = element2;
        array[index2] = element1;
    }
    replaceTwoElements(this,getMinOrMaxNumber(this,false),getMinOrMaxNumber(this,true));
};

// ToDo: Get the number from the given array which summary of digits is maximum:
Array.prototype.getElementWithMaximumNumbers = function () {
    function getElementNumbersList(array) {
        const numbersQuantityList = [];
        for (let element of array) {
            const stringedNumber = String(Math.abs(element));
            let sum = 0;
            for (let index = 0; index < stringedNumber.length; index++) {
                sum += +stringedNumber[index];
            };
            numbersQuantityList.push({sum,element})
        };
        return numbersQuantityList
    };
    function getMaxNumber(array) {
        for (const element of array) {

            let minOrMaxNumber = true;
            for (let index = 0; index < array.length; index++) {
                if (element.sum < array[index].sum) {
                    minOrMaxNumber = false;
                    break
                };
            };
            if (minOrMaxNumber) {
                return element.element
            }
        }
    };
    return getMaxNumber(getElementNumbersList(this))
};