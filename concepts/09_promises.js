// Promise
class CustomPromise {
  constructor(exec) {
    this.status = "pending";
    this.thenArray = [];
    this.catchArray = [];
    this.value;

    const resolve = (value) => {
      this.status = "fulfilled";
      this.value = value;
      this.thenArray.forEach((cb) => cb(this.value));
    };
    const reject = (error) => {
      this.status = "rejected";
      this.value = error;
      this.catchArray.forEach((cb) => cb(this.value));
    };

    setImmediate(() => exec(resolve, reject));
  }

  then(callback) {
    if (this.status === "fulfilled") {
      callback(this.value);
    } else if (this.status === "pending") {
      this.thenArray.push(callback);
    }
  }

  catch(callback) {
    if (this.status === "rejected") {
      callback(this.value);
    } else if (this.status === "pending") {
      this.catchArray.push(callback);
    }
  }
}

// function getNumberAsync() {
//   return new CustomPromise((resolve, reject) => {
//     setTimeout(() => resolve(2), 2000);
//   });
// }

// const p = getNumberAsync();

// p.then((n) => {
//   console.log("number", n);
// });

// console.log(1);
// p.then((n) => {
//   console.log("number", n);
// });

// console.log(2);

//

const promises = [];

const myPromise1 = new CustomPromise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 2000);
});

const myPromise2 = new CustomPromise((res, rej) => {
  setTimeout(() => res("done2"), 2000);
});

promises.push(myPromise1, myPromise2);
Promise.all(promises).then((result) => {
  console.log(result);
});
