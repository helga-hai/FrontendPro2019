//Реализовать калькулятор, в котором есть слайдер (`input type=”range”`) и поле ввода (`input type=”number”`).
//Изменяя состояние range меняется состояние поля ввода `number`. И наоборот.
//Реализовать блок-диаграмму, который в пикселях будет отображать значение range.
//Например - range выбрали число 83, высота блока-диаграммы будет 83 пикселя.

//---------------------------
//Красный блок - количество комиссии. Комиссия вычисляется по формуле:

//(range < 20) -> 2%
//(20 - 50) -> 4%
//(50 - 75) -> 6%
//(75 - 100) -> 8%

//Красный блок отображает количество комиссии. Например Значение выбора 100, комиссия будет 8%. Результирующая сумма: 108. Высота красного блока - 8px


window.onload = function() {

	let bar = document.querySelector('.bar');
	let rang = document.querySelector('input[type="range"]');
	let number = document.querySelector('input[type="number"]');
	let comission = document.querySelector('.comission');
	let text = document.querySelector('.text');
	let total = document.querySelector('.total');

	function changeValue(who){
		let percent;
		if (parseInt(rang.value) >= 75)
			percent = 8
		else if (parseInt(rang.value) >= 50)
			percent = 6
		else if (parseInt(rang.value) >= 20)
			percent = 4
		else if (parseInt(rang.value) < 20) 
			percent = 2

		let inputs = document.querySelectorAll("input");

		inputs.forEach(function(item){
			if(item !== document.activeElement){
				item.value = who.value;
				bar.dataset.height = who.value;
				bar.style.height = who.value + "%";
				comission.dataset.height = parseInt(who.value) + percent*who.value/100;
				comission.style.height = parseInt(who.value) + percent*who.value/100 + "%"
			}
		})
		text.innerHTML = `Comission: ${percent}% (${percent*who.value/100} UAH)`
		total.innerHTML = `<br>Total: ${comission.dataset.height} UAH`
	};

	document.addEventListener('input', function(ev){
		changeValue(number)
		changeValue(rang)
	});


}