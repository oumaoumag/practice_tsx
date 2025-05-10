// Create a Vehicle Management System

// 1. Create an interface called 'Vehicle' with the following:
//    - Properties: make (string), model (string), year (number)
//    - Method: getInfo() that returns a string

// 2. Create an interface called 'Drivable' with:
//    - Method: drive(distance: number): string
//    - Method: stop(): string

// 3. Create an interface called 'ElectricVehicle' that extends both 'Vehicle' and 'Drivable':
//    - Additional properties: batteryCapacity (number), range (number)
//    - Method: charge(amount: number): string

// 4. Create a class called 'ElectricCar' that implements the 'ElectricVehicle' interface
//    - Implement all required properties and methods
//    - Add a constructor that initializes all properties
//    - The drive method should reduce the range based on distance traveled
//    - The charge method should increase the range based on the amount charged

// 5. Create a class called 'GasCar' that implements only the 'Vehicle' and 'Drivable' interfaces
//    - Add properties: fuelCapacity (number), fuelLevel (number)
//    - Implement all required methods
//    - Add a method refuel(amount: number): string

// 6. Create a function called 'testDrive' that:
//    - Takes a Drivable object
//    - Calls the drive method with a distance of 50
//    - Returns the result

// This exercise will help you understand:
// - Basic interface creation
// - Interface extension
// - Interface implementation in classes
// - Using interfaces as types
// - Optional properties and methods

interface Vehicle {
    make: string;
    model: string;
    year: number;
    getInfo(): string;
}

interface Drivable {
    drive(distance: number): string;
    stop(): string;
}

interface ElectricVehicle extends Vehicle, Drivable {
    batteryCapacity: number;
    range: number
    charge(amount: number): string;
}

class ElectricCar implements ElectricVehicle {
    // properties from Vehicle
    make: string;
    model: string;
    year: number;

    //properties from ElectricVehicle
    batteryCapacity: number;
    range: number; 

     constructor(
        make: string,
        model: string,
        year: number,
        batteryCapacity: number,
        range: number,
    ) {
        this.make = make; 
        this.model = model;
        this.year = year;
        this.batteryCapacity = batteryCapacity;
        this.range = range;
    }

    // Method from Vehicle
    getInfo(): string {
        return `${this.make} ${this.model} (${this.year}) - Range: ${this.range} miles`;
    }

    // Method from Drivable
    drive(distance: number): string {
    if (distance > this.range) {
        return `Cannot drive ${distance} miles - only ${this.range} miles of range left`
    }
    
        this.range -= distance;
        return `Drove ${distance} miles - ${this.range} miles of range left`;
}

    stop(): string {
        return `${this.make} ${this.model} has stopped`
    }

    // Method from ElectricVehicle
    charge(amount: number): string {
        // Assuming amount is in kWh and each kWh gives 4 miles of range
        const rangeAdded = amount * 4; 
        this.range += rangeAdded;
        return `Added ${rangeAdded} miles of range by charging ${amount} kWh`;
    }

} 