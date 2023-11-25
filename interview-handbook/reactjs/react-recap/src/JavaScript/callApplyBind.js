/*
Manupulate the this keywords


*/

let obj={
    name:"Bhairav"
}

function greet(msg){
    console.log(msg+" "+"my name is"+" "+this.name)
}


greet.call(obj,"hii")