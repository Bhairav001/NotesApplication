/*
A closure is the combination of function bundled together.

closure gives you access to an outer function scope from an inner function


return lexical enivorment
*/


function fun1(){
    let x=5;
    return function(){
        console.log(x)
    }
}

let y=fun1();
y()
