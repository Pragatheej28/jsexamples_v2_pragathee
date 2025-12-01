const Vehicle = require("./Vehicle.js");

// Create a child class from Vehicle class
class Car extends Vehicle {    // INHERITS the vehicle class

    // constructor 
    constructor(make, model, year){
        super(make, model, year); // * super (keyword) - refers to the parent
        this.airbag = true;       // property airbag unique to cars
    }

    // Polymorphism
    drive(distance){
        super.travel(distance); // Abstraction - drive method hdes the implementation (travel)
        console.log(`Driving complete. Status: ${this.airbag ? `Safety Check Passed.` :`Airbag absent`}`);
    }

    // checkSafetyFeature() is only found in Car class
    checkSafetyFeature(){
        return this.airbag;
    }
}

// ? IMPLICIT INHERITANCE methods inherited here in Car class (from Vehicle class) include:
// - travel()
// - getTotalDistance(); - Abstraction, where we do not see the implementation. of getTotalDistance(), yet we can invoke it
// - distanceTraveled - Encapsulation, where the state of the property is managed by the parent class

const myNewCar = new Car("Honda", "Civic", 2024);
myNewCar.drive(100);
console.log(`Does my new car have safety features: ${myNewCar.checkSafetyFeature()}`);
console.log(`My new car is driven: ${myNewCar.getTotalDistance()} km.`);

module.exports = Car;   // Export the class Car