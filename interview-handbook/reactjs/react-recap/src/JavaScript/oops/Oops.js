// 1. class

class Animal{
    constructor(name,sound){
        this.name=name;
        this.sound=sound;
    }
    makeSound(){
        console.log(`${this.name} says ${this.sound}`)
    }
}

const dog = new Animal("Dog","Woof")
dog.makeSound();


//Abstraction
/*
Abstraction is a concepts that foucuses on hiding the complex reality while
exposing only the relevant parts. In JavaScript, you can achieve abstraction through encapsulation and 
exposing only necessary methods



*/

//Abstraction
class Car{
    constructor(make,model){
        this.make=make;
        this.model=model
    }
    stratEngine(){
        console.log(`Starting the engine of ${this.make} ${this.model}`)
    }
}

const myCar = new Car("Toyota","Camry")
myCar.stratEngine()