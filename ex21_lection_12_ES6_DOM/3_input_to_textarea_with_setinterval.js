//Домашнее задание 21
//Добавлено: 22.03.2019 12:52
//#1
// 1) Есть 3 `input`. Выводить в `textarea` содержимое всех полей ввода через запятую. Использовать setInterval.

//-----------------------


window.onload = function() {

	let first = document.querySelector('input[name=first]');
	let middle = document.querySelector('input[name=middle]');
	let last = document.querySelector('input[name=last]');
	let textarea = document.querySelector('textarea');


	setInterval( ()=>{
	textarea.setAttribute('placeholder', first.value +  ',' + middle.value +  ',' + last.value)
	}, 1000)

//-------------------------------------------------------------

	setInterval( ()=>{
	textarea.innerHTML = (first.value +  ',' + middle.value +  ',' + last.value)
	}, 500)

}