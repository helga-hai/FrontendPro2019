//Домашнее задание 21
//#1
// 1) Есть 3 `input`. Выводить в `textarea` содержимое всех полей ввода через запятую. Использовать setInterval.


window.onload = function() {

	let textarea = document.querySelector('textarea');
	let inputs = document.querySelectorAll('input');


	function setValue(){
		let tmp='';
		for(let i=0; i<inputs.length; i++){
				tmp += inputs[i].value + ','
		}
		tmp = tmp.slice(0, -1);
		return textarea.innerHTML = tmp
	}

	setInterval( setValue , 1000)

}