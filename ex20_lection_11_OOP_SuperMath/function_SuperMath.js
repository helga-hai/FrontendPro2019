//Домашнее задание 20
//Добавлено: 19.03.2019 09:24
//#1
//Создать класс SuperMath. Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak. Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. Если - да, сделать математическое действие znak(которое описано в прототипе), иначе - запросить ввод новых данных через метод input() класса SuperMath.
//Пример обекта: `obj = { X:12, Y:3, znak: “/”}`, возможные варианты znak=> `+ - / * %`.
//При вводе znak нужно сделать проверку корректности ввода на возможные математические действия
// 
//p = new SuperMath();
//p.check(obj); // --> no p.input() -> 3 prompt -> считает


//-----------------------


SuperMath.prototype.factory = function(zn){
	let obj = this;
	let listMath = {
		'/': function(){ return obj.x / obj.y },
		'*': function(){ return obj.x * obj.y },
		'-': function(){ return obj.x - obj.y },
		'%': function(){ return obj.x % obj.y },
		'+': function(){ return obj.x + obj.y }
	}
	
	return listMath[zn]()

}


function SuperMath() {

	this.x = +doPrompt('x');
	this.y = +doPrompt('y');
	this.znak = doPrompt('znak');

	function doPrompt(str){
		do { var w = prompt(str)
		} while( str.localeCompare("znak") === 0 ? 
			![ '/', '+', '-', '*', '%' ].includes(w) : 
			isNaN(w)==true )

		return w
	};

	this.input = function(){
		this.x = +doPrompt('x');
		this.y = +doPrompt('y');
		this.znak = doPrompt('znak');
		this.factory(this.znak)
	};

	this.check = function(){
		return confirm("yes or no") ? alert( this.factory(this.znak) ) : this.input();
	}

}


var p = new SuperMath();
p.check();
console.dir(p)
