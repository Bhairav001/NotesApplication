/*
Working with Asynchronous code
Making it more readable and easier


1. Async function return promise

2. await keyword is used to wait for a Promise to settle. either resolve or reject
*/

// async function myAsyncFunction(){
//    console.log(3)
// }
// myAsyncFunction()

function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}

async function example(){
    console.log("start");

    await delay(2000)

    console.log("After 2 seconds");
}

example()