// const delayedfunc = ()=>{
//     console.log("Delayed function executed");
// }
// setTimeout(delayedfunc,5000);    // executes after 5s


const repestedfunc = () => {
    console.log("Repeated function executed");
}

const intervalId = setInterval(repestedfunc,2000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped");
}, 5000);