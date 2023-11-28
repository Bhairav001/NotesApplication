let obj={
    name:"Bhairav"
}

function greet(msg){
   console.log(`${msg} my name is ${this.name}`)
}


greet.call(obj,"Hii")


greet.apply(obj,["Hello"])

const greeting = greet.bind(obj,"awasome");

greeting();


class Car{
    constructor(name,model){
        this.name=name;
        this.model=model
    }
    myCar(){
        console.log(`car name is ${this.name} and model is ${this.model}`)
    }
}

const detailCar = new Car("BMW",2023)

detailCar.myCar()