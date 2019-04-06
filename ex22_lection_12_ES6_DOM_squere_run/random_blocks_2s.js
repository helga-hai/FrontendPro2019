//Домашнее задание 22
//Добавлено: 22.03.2019 12:53
//#2
//Есть 3 блока различных цветов. Раз в 2 секунды они перемещаются на случайное положение в пределах окна. 
//---
//Для выполнения нужно почитать про свойство style в DOM элементе



window.onload = function() {

/************************
		let params = [
				document.documentElement.clientHeight, 
				document.documentElement.clientWidth,
				];

		var getStyleWidth = function(name){
			var res = Math.floor(Math.random() * params[1] + parseInt(name.style.width));
			return res
		}
		var getStyleHeight = function(name){
			return Math.floor(Math.random() * params[0] + parseInt(name.style.height));
		}

getStyle()

		let divs = document.querySelectorAll('div');
		for(let i=0; i<divs.Length; i++){
			divs[i].style.top=params[3]
			divs[i].style.left=params[3]
		}
var res = getStyleWidth
res(red)	
console.log(res)
************************/

/*const PARAMS = [document.documentElement.clientHeight,
				document.documentElement.clientWidth];

function getSquere(){
	this.height = parseInt(this.style.height);
	this.with = parseInt(this.style.width);

	this.data = [parseInt(this.style.height), parseInt(this.style.width)]
	this.randomPosition = function(){
		let i = 0,top,left;
		return function(){
			var pos = Math.floor(Math.random() * PARAMS[i] + this.data[i]);
			(i == 0) ? top = pos : left = pos
			i++
		}
	}
	var frequency =this.randomPosition
}*/



/*var blocksParams = {
 	'red':[100,80],
 	'green':[90,70],
 	'blue':[78,50]
}*/
/*var bloksParams = new Array();
for(var i=0; i<divs.length; i++){
	//for(var key in blocksParams){
		//blocksParams[key][i] = 
		bloksParams[i] = parseInt(divs[i].style.height)
		//blocksParams[key][++i] = 
		bloksParams[++i] = parseInt(divs[i].style.width)
	//}
}*/
const PARAMS = [document.documentElement.clientHeight,
				document.documentElement.clientWidth];

var divs = document.querySelectorAll('div'); // [div.red, div.green, div,blue]

const SIDES = new Array(divs.length);
var top, left;
let position = new Array(divs.length);

for (let i=0; i<SIDES.length; i++) {
	SIDES[i] = new Array(2);
	SIDES[i][0] = parseInt(divs[i].style.height);
	SIDES[i][1] = parseInt(divs[i].style.width);
	position[i] = new Array(2);
}

function count(){
	for (let i=0; i<SIDES.length; i++) {
		position[i][0] = Math.floor(Math.random() * (PARAMS[0] - SIDES[i][0]));
		position[i][1] = Math.floor(Math.random() * (PARAMS[1] - SIDES[i][1]));
		divs[i].style.top = position[i][0] + 'px';
		divs[i].style.left = position[i][1] + 'px'
	} // [ [num,num], [num,num], [num,num] ]

}

setInterval(count,1000)


}