
// Էս կոդի կտորը ցանկացած հնարավոր ձևով պահելով, ինչ ուզում ես ավելացրու, նենց արա որ this-ը լինի վերևի object-ը

let obj = {
    name : "Levon",
    surname: "Ghukasyan"
};

function th() {

    setTimeout(()=>{
        console.log('timer finished>>', this)
    },1000);
}

th.call(obj)


// Գրել Ֆունկցիա որը կանչելով հետևյալ կերպ կվերադարձնի նոր array որը կունենա element-ներ նշված type-ով

const arr = ["Levon", "Ararat", 15, 16, true, false];

Array.prototype.getArrayByElementTypes = function(type) {

    let newArray = [];
    for (let i = 0; i <= arr.length; i++) {
        if ( (typeof arr[i] ) === type) {
            newArray.push(arr[i]);
        }
    }
    return newArray;

};
const newArray =  arr.getArrayByElementTypes("boolean");
console.log(newArray);


