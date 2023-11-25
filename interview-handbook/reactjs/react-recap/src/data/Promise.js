/*
Promise is kind of Object in JavaScript

three stages of promise
1. Resolve ->fullfilled
2. Reject  -> rejected
3. pending  -> pending;
*/

const newPromise = new Promise((resolve,reject)=>{
    resolve("success")
})

newPromise.then((res)=>{
    //do something promise is resolve
    console.log(res)
})

newPromise.catch((err)=>{
    //do something promise is reject
    console.log(err)
})
