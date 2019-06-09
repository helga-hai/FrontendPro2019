
/*Написать класс Dog, который наследуется от класcа Animal. Класс Animal имеет метод getName (name можно передать в конструктор). Класс Dog имеет метод bark (возвращает строку «Dog {dogname} is barking».
Пример использования:

var dog = new Dog ('Aban');
dog.getName () === 'Aban'; // true
dog.bark () === 'Dog Aban is barking'; // true

Задание необходимо сделать в двух вариантах: на ES5 и ES6.*/

function Animal(){}
function Dog(dogname){
	this.name = dogname;
	this.bark = function(){
		return 'Dog '+dogname+' is barking'
	}
}

Dog.prototype = Object.create(Animal.prototype);

Animal.prototype.getName = function(){
	return this.name
}

var dog = new Dog ('Aban');
console.dir(dog.bark())

/**********************************/

class AnimalES6 {
	getName(){
		return this.name
	}
}
class DogES6 extends AnimalES6 {
	constructor(dogname = ''){
		super();
		this.name = dogname;
		this.bark = () => `Dog ${dogname} is barking`
	}
}
var dogES6 = new DogES6('Bobik')
console.dir(dogES6.bark())