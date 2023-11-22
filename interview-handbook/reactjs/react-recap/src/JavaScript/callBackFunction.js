
function greet(name,callBack){
    console.log(name+" "+"first method");
    callBack()
}

function callSet(){
    console.log("this is callback function")
}

greet("Bhairav",callSet);

