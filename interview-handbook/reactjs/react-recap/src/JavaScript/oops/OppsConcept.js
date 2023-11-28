class Car{
    constructor(name,model){
        this.name=name;
        this.model=model
    }
    myCar(){
        console.log(`car name is ${this.name} and model is ${this.model}`)
    }

}

const CarDetails = new Car("BMW",2015)
CarDetails.myCar()