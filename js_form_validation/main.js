// Домашнее задание 31
//Добавлено: 09.04.2019 11:25
//#1
//Создать форму по отправке имени и возраста.
//Сделать валидацию данных (в имени не может быть чисел, в возрасте - букв).
//При успешной валидации сформировать отправку данных с формы на url `/registration`. Использовать метод POST.
//В результате ничего в ответе мы не должны получить (кроме ошибки 404). Суть - отправка данных с валидацией.

window.onload = function(){

		let valid = false
		let form = document.querySelector('#formID');
		let formItem = document.querySelector('.formItem');
		let inputName = document.querySelector('#name');
		let inputAge = document.querySelector('#age');
		let btn = document.querySelector('button');

		var note = document.createElement('div')
		note.classList.add('note-text')
		let valueNum, valueLetter 

		function checkInput(input){
			input.addEventListener('blur', function(e){
				valueNum = !!!inputName.value ? 1 : inputName.value.split('').some(item=>isFinite(item))
				valueLetter = !!!inputAge.value ? 1 : inputAge.value.split('').some(item=>!isFinite(item)) 

				function doNote(bool, txt){
					e.target.parentElement.appendChild(note);
					if(bool){
						note.innerHTML = txt;
						e.target.style.background = 'pink'
					} else {
						note.remove()
						e.target.style.background = 'white'
					}

				}
				if(e.target==inputName)
					doNote(valueNum, 'only for a letter');
				if(e.target==inputAge)
					doNote(valueLetter, 'only for a number');

				
				valid = (valueNum===false && valueLetter===false) ? true : false
				btn.style.display = (valid) ?  'block' : 'none'
				
			})
		}
		checkInput(inputName)
		checkInput(inputAge)

		form.onsubmit = function(e) {
			e.preventDefault();
			var xhr = new XMLHttpRequest();
			var body = 'yourname=' + encodeURIComponent(inputName.value) +
		  '&yourage=' + encodeURIComponent(inputAge.value);
			xhr.open("POST", '/registration');
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send(body);
			xhr.onreadystatechange = function() {
				if (this.readyState == 4) form.innerHTML = "404 error";
			}
		}


}
