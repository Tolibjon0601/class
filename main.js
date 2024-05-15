class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		return "Animal sound";
	}
}

class Dog extends Animal {
	speak() {
		return "Woof!";
	}
}
class Cat extends Animal {
	speak() {
		return "Meyav!";
	}
}
class Lion extends Animal {
	speak() {
		return "RRRR!";
	}
}
class Donkey extends Animal {
	speak() {
		return "IOIOIOIO!";
	}
}

const animals = [new Dog("Simba"), new Cat("Malla"), new Lion("Scar"), new Donkey("Hotik")];

animals.forEach((animal) => {
	console.log(animal.name + "ning" + " ovozi " + animal.speak());
});
