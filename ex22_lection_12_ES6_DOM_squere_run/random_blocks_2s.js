//Домашнее задание 22
//Добавлено: 22.03.2019 12:53
//#2
//Есть 3 блока различных цветов. Раз в 2 секунды они перемещаются на случайное положение в пределах окна. 
//---
//Для выполнения нужно почитать про свойство style в DOM элементе



window.onload = function() {


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