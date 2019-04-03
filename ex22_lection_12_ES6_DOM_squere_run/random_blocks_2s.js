//Домашнее задание 22
//Добавлено: 22.03.2019 12:53
//#2
//Есть 3 блока различных цветов. Раз в 2 секунды они перемещаются на случайное положение в пределах окна. 
//---
//Для выполнения нужно почитать про свойство style в DOM элементе



window.onload = function() {

	let red = document.querySelector('.red');
	let green = document.querySelector('.green');
	let blue = document.querySelector('.blue');

	let toWidth = document.documentElement.clientWidth;
	let toHeight = document.documentElement.clientHeight;

console.log(toWidth,toHeight);



	
//-------------------------------------------------------------
	var t, l;

	function changePosition(name){
		t = Math.floor(Math.random() * toHeight - name.style.height);
		l = Math.floor(Math.random() * toWidth - name.style.width);
		var pos = {top:t, left:l};
		//return function(pos){
			//if(pos==t) name.style.top = t + 'px';
		//name.style.top = t + 'px';
		//name.style.left = l + 'px';
		return function(){
			for(var key in pos){
				return name.style[key] = '' + pos[key] + 'px';
			}
		}
		//}
	}
	//res = changePosition(red)
		//console.log(res)
		console.dir(changePosition(red))
	setInterval( function(){

		document.querySelector('.red').changePosition(red)
		//red.changePosition();
		//green.run();
		//blue.run();

	}, 500)



}