
console.log(this)


let getMax = function(arr) {
    let max = arr[0];
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i+1] >= arr[i]) {
            max = arr[i+1];
        }
    }
}

let user = {
    name: "John",
    age: 30,

    sayHi() {
        // "this" is the "current object"
        alert(this.name);
    }

};

user.sayHi();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



