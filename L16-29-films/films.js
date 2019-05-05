//Домашнее задание 29
//Добавлено: 05.04.2019 22:16
//#1
//По шаблону в index.html занятия выбрать фильмы, отобразить итоговую стоимость заказа. В консоль вывести названия заказанных фильмов и стомость всех фильмов. Если нету цены или названия => игнорировать этот фильм.
window.onload = function(){

	let list = [];
	
	document.querySelectorAll('.cinema__item')
		.forEach((item,pos)=>list.push([item.children[0].innerText, item.children[1].innerText]))
	list.map(item=>{
		if ( !(item.some(item=>!!!item)) ) {
			console.log(item.join(' – '))
		}
	})

}