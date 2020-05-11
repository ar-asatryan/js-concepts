

//

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




