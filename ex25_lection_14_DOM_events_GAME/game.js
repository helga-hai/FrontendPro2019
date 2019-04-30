//Домашнее задание 25
//Добавлено: 29.03.2019 09:21
//#1
//Создать персонажа игры-платформера.
//При нажатии на пробел - прыжок вверх на `h` пикселей.
//При нажатии на стрелку -> передвижение персонажа на `step` пикселей в сторону (и остальные стрелки) // event.keyCode

//Персонаж - это квадрат, имеющий размеры 100 на 100 пикселей.
//Прыжок - это анимация движения объекта вверх на `h` пикселей и возврат в изначальное положение (до прыжка)

/*window.onload = function() {

	let man = document.querySelector('.man');
	let state = {
		h:200,
		step:20,
		left:0,
		bottom:0
	}
		
	document.addEventListener('keydown', function(ev){
		if (ev.keyCode == 32)
			man.style.bottom = state.bottom + state.h + "px"
		if (ev.keyCode == 39){
			man.style.left = state.left + state.step + "px";
			state.left = parseInt(man.style.left);
		}
		if (ev.keyCode == 37){
			man.style.left = state.left - state.step + "px";
			state.left = parseInt(man.style.left);
		}
		console.log(ev.keyCode)
		console.log(state)
	})
	document.addEventListener('keyup', function(ev){
		man.style.bottom = state.bottom + "px"
	})
}// or  */


window.onload = function() {

	let man = document.querySelector('.man');
	let state = {
		h:200,
		step:50,
		left:0,
		bottom:0
	}

	function universalMove(ev){
		switch(ev.keyCode){
		   case 32: //space
		   			man.style.bottom = state.bottom + state.h + "px"; 
					break;
		   case 39: //right
		   			man.style.left = state.left + state.step + "px";
					state.left = parseInt(man.style.left);
					man.style.transform = 'rotate(0deg)';
					break;
		   case 37: //left
		   			man.style.left = state.left - state.step + "px";
					state.left = parseInt(man.style.left);
					man.style.transform = (man.style.transform == 'rotate(90deg)'||'rotate(-180deg)') ? 'rotate(180deg)' : 'rotate(-180deg)';
					console.log(ev.keyCode, state);break;
		   case 38: //top
		   			man.style.bottom = state.bottom + state.step + "px";
					state.bottom = parseInt(man.style.bottom);
					man.style.transform = (man.style.transform == 'rotate(180deg)'||'rotate(270deg)') ? 'rotate(270deg)' : 'rotate(-90deg)';
					break;
		   case 40: //down
		   			man.style.bottom = state.bottom - state.step + "px";
					state.bottom = parseInt(man.style.bottom);
					man.style.transform = (man.style.transform == 'rotate(-180deg)') ? 'rotate(270deg)' : 'rotate(90deg)';
					break;
		   case 17: //ctrl  
		   			man.style.transform = (man.style.transform.indexOf('scale3d(1.4, 0.75, 1)') == -1) ? man.style.transform + 'scale3d(1.4, 0.75, 1)': '';
		   			break;
		}

	}
	document.addEventListener('keydown', universalMove)
	document.addEventListener('keyup', function(ev){
		if (ev.keyCode == 32)
			man.style.bottom = state.bottom + "px";

	});
}