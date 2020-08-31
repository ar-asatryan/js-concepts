
// ToDo:

async function getData(url) {

    return new Promise( (res) => {
        const timerX = setTimeout( () => {
            res("get data");
        }, 3000);

    });
}


(async function f1() {
    const arr = ["google.com", "abc", "nodejs.org"];


    const arrPromises = [Promise.all(arr.map(elem => getData(elem))),
        new Promise((res)=>{
            setTimeout(()=>{
                res(null)
            }, 2000)
        })];

    const data = await Promise.race(arrPromises);
    console.log(data);

})();




















//console.log(global)