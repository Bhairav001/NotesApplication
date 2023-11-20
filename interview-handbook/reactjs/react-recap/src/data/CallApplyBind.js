let obj={
    name:"bhairav"
}

function greet(msg){
    console.log(msg+" "+"my name is"+" "+this.name);
}

greet.call(obj,"Hii...");

greet.apply(obj,["Hello"])

const bindMsg = greet.bind(obj,"awasome guys");

bindMsg()