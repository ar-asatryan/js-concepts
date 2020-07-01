
// ToDo:
function mySetInterval(cb,time) {
    setTimeout(()=>{
        cb();
        mySetInterval(cb,time)
    },1000)
}

mySetInterval(() => { console.log("logging every second !")}, 1000);


























//console.log(global)