// Домашнее задание 31
//Добавлено: 09.04.2019 11:25
//#1
//Создать форму по отправке имени и возраста.
//Сделать валидацию данных (в имени не может быть чисел, в возрасте - букв).
//При успешной валидации сформировать отправку данных с формы на url `/registration`. Использовать метод POST.
//В результате ничего в ответе мы не должны получить (кроме ошибки 404). Суть - отправка данных с валидацией.

/*
var res = [];

function run(list) {

  var xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', function(){
    if(xhr.readyState != 4) return;
    res = res.concat(JSON.parse(xhr.responseText));

  })

  xhr.open('POST', list, true);
  xhr.send();

}


run('/data.json');
run('/data2.json');
setTimeout(()=>{console.dir(res)},1000)*/



/*formData.append("part_num", "123ABC"); 
formData.append("part_price", 7.95);
formData.append("part_image", somefile)*/
//new Promise(function(resolve,rejected){
	//var formData = new FormData();
//document.querySelector('')

	window.onload = function(){

		var inputName = document.querySelector('#name');
		var inputAge = document.querySelector('#age');
		var formItem = document.querySelector('.formItem');
		var btn = document.querySelector('button');

		var note = document.createElement('div')
		note.classList.add('note-text')
		//formItem.appendChild(note)

		/*function addNote(txt,e){
			var note = document.createElement('div')
			note.classList.add('note-text')
			note.style.cssText=`
				top: ${e.target.offsetTop+e.target.clientHeight+10}px;
				left: ${e.target.offsetLeft+e.target.clientLeft}px;
				`;
			note.innerHTML = txt
			form.appendChild(note)
		}*/
		var valid = true;

		/*inputName.addEventListener('blur', function(e){
			console.dir(e)
			if(valid){
				e.target.classList.add('invalid')
			}
			if (inputName.value.split('').some(item=>isFinite(item))){
				e.target.parentElement.appendChild(note);
				note.innerHTML = 'only for a number';
				valid = false;
			}
				//addNote('only for a number',e);
			console.log('number')
		})
		inputAge.addEventListener('blur', function(e){
			console.dir(e)
			if (inputAge.value.split('').some(item=>!isFinite(item))){
				e.target.parentElement.appendChild(note);
				note.innerHTML = 'only for a letter';
				valid = false
			}
			console.log('not a number')
		})*/
		function checkInput(input){
			input.addEventListener('blur', function(e){
				let valueNum = inputName.value.split('').some(item=>isFinite(item))
				let valueLetter = inputAge.value.split('').some(item=>!isFinite(item))
				/*if(!valid){
					e.target.classList.add('invalid')
				}*/
				function doNote(bool, txt){
					e.target.parentElement.appendChild(note);
					if(bool){
						note.innerHTML = txt;
						e.target.style.background = 'red'
					}
					else {
						note.remove()
						e.target.style.background = 'white'
					}

				}
				if(e.target==inputName)
					doNote(valueNum, 'only for a letter')
				if(e.target==inputAge)
					doNote(valueLetter, 'only for a number')
				if(inputName&&inputAge)
					btn.addEventListener('click', e=>{e.preventDefault();console.log('qwe')})

					console.dir(e.target)
				//valid = false;

				/*if(valueNum && input==inputName){
					e.target.appendChild(note);
					note.innerHTML = 'only for a letter';
					valid = false;
				} else if(valueLetter && input==valueLetter){
					e.target.appendChild(note);
					note.innerHTML = 'only for a number';
					valid = false;
				} else {
					valid = true
				}*/
				
				 /*else if(input==inputLetter){
					if (valueLetter){
						e.target.parentElement.appendChild(note);
						note.innerHTML = 'only for a number';
						valid = false;
					} else {
						valid = true;
					}
				}*/
					//addNote('only for a number',e);
				//console.log('number')
			})
		}
		checkInput(inputName)
		checkInput(inputAge)
		/*form.addEventListener('blur', function(e){
			if (target == 'input#name'){
				if (inputName.value.split('').some(item=>isFinite(item)))
					console.log('number')
			} else if (target == 'input#age'){
				if (inputAge.value.split('').some(item=>!isFinite(item)))
					console.log('not a number')
			}
		})*/
		/*inputName.addEventListener("blur", function() {
			console.log('enter only a letter')
		    this.classList.add('focused');
		}, true);*/
	
	}
	let youurname,yourage

	/*var xhr = new XMLHttpRequest();
	var body = 'Name = ' + youurname + "age = " + yourage
	xhr.addEventListener('readystatechange', function(){
		if(xhr.readystate != 4) return
		console.dir(body)
		let response = body
	})

	xhr.open("POST", "/registration");
	//xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')  
	xhr.send(body);*/
	//console.dir(xhr)
	
//})