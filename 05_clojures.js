
function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
        return count;
    }
}

let incrCount = counter();
incrCount();
incrCount();
incrCount();


console.log('==========');
function operationFirst(num1) {
    var summ = 48;
    function operationSecond(num2) {
        return num1 + num2;
    }
    return operationSecond;
}

let plusValue = operationFirst(12);
plusValue(3);
