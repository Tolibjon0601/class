// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	speak() {
// 		return "Animal sound";
// 	}
// }

// class Dog extends Animal {
// 	speak() {
// 		return "Woof!";
// 	}
// }
// class Cat extends Animal {
// 	speak() {
// 		return "Meyav!";
// 	}
// }
// class Lion extends Animal {
// 	speak() {
// 		return "RRRR!";
// 	}
// }
// class Donkey extends Animal {
// 	speak() {
// 		return "IOIOIOIO!";
// 	}
// }

// const animals = [new Dog("Simba"), new Cat("Malla"), new Lion("Scar"), new Donkey("Hotik")];

// animals.forEach((animal) => {
// 	console.log(animal.name + "ning" + " ovozi " + animal.speak());
// });




// Car nomli sinf
class Car {
	constructor(make, model, year) {
			this.make = make;
			this.model = model;
			this.year = year;
	}

	drive() {
			console.log("Mashina haydashmoqda.");
	}

	stop() {
			console.log("Mashina to'xtatildi.");
	}
}

class ElectricCar extends Car {
	constructor(make, model, year, batteryCapacity) {
			super(make, model, year);
			this.batteryCapacity = batteryCapacity;
	}

	drive() {
			console.log("elektromobil jimgina boshqariladi.");
	}

	charge() {
			console.log("elektr mashina zaryadlanmoqda.");
	}
}


class HybridCar extends Car {
	constructor(make, model, year, fuelType, batteryCapacity) {
			super(make, model, year);
			this.fuelType = fuelType;
			this.batteryCapacity = batteryCapacity;
	}

	drive() {
			console.log("Hibrid mashina samarali haydashmoqda.");
	}

	charge() {
			console.log("Gibrid mashina zaryadlanmoqda..");
	}
}

function testDrive(car) {
	car.drive();
}

const myCar = new Car("Toyota", "Camry", 2024);
const myElectricCar = new ElectricCar("Tesla", "Model S", 2021, "100 kWh");
const myHybridCar = new HybridCar("Toyota", "Prius", 2020, "Benzin", "10 kWh");

testDrive(myCar);
testDrive(myElectricCar);
testDrive(myHybridCar);
