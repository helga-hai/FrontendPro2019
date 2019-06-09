
function C1(){
	//this.renderList = function(){ console.log(this) }
}
	C1.prototype.renderList = function(){ console.log(this) }


function C2(){}
	C2.prototype = Object.create(C1.prototype)
	C2.prototype.fillList = function(from,to){
		for(var i=0; i<this.list.length; i++){
			this.list[i] = Math.floor(Math.random()*(to-from+1)+from);
		}
		//return this.list
	}
	C2.prototype.removeList = function(){ 
		delete this.list 
	}

function C3(){
	this.createList = function(length){
		this.list =[];
		this.list.length = length;
	}
}
	C3.prototype = Object.create(C2.prototype)


var p = new C3();
p.createList(10)
p.fillList(-2,2)
p.renderList();
//p.removeList();

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
		return `Dog ${dogname} is barking`
	}
}

Dog.prototype = Object.create(Animal.prototype);

Animal.prototype.getName = function(){
	return this.name
}

var dog = new Dog('Aban')

console.dir(dog)

class Dog(dogname){
	constructor: {
		
	}
}
