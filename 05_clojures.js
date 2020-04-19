
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
