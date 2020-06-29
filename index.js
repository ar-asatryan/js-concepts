
// ToDo:


    // function mySetinterval(cb,time){
    //     function calling(){
    //         setTimeout(()=>{
    //             cb();
    //             calling();
    //         }, 1000)
    //
    //     }
    //     calling();
    // }
    //
    //
    // mySetinterval(()=>{
    //     console.log(12);
    // },1000)



function mySetInterval1(cb,time) {
    setTimeout(()=>{
        cb();
        mySetInterval1(cb,time)
    },1000)
}



mySetInterval1(()=>{
    console.log(10)
},1000)








//console.log(global)