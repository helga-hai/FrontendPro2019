//Домашнее задание 25
//Добавлено: 29.03.2019 09:21
//#1
//Создать персонажа игры-платформера.
//При нажатии на пробел - прыжок вверх на `h` пикселей.
//При нажатии на стрелку -> передвижение персонажа на `step` пикселей в сторону (и остальные стрелки) // event.keyCode

//Персонаж - это квадрат, имеющий размеры 100 на 100 пикселей.
//Прыжок - это анимация движения объекта вверх на `h` пикселей и возврат в изначальное положение (до прыжка)


window.onload = function() {
	const WW = document.documentElement.clientWidth
	const WH = document.documentElement.clientHeight

	let man = document.querySelector('.man');
	let state = {
		h:200,
		step:50,
		left:0,
		bottom:0,
	}

	function jump(ctrl) {
		if (!ctrl) {
			man.style.bottom = state.bottom + state.h + 'px';
		}
		else if (ctrl) {
			if (ctrl.type == 'click'){
				man.style.bottom = state.bottom + state.h + 'px'
				setTimeout(()=>{man.style.bottom = state.bottom + 'px'}, 300)
			}
			else man.classList.add('distort');
		}
	}
	document.addEventListener('keyup', function(ev){
		if (ev.keyCode == 32){ //space 
			man.style.bottom = state.bottom + 'px';
		}
		if (ev.keyCode == 17){ //ctrl
			man.classList.remove('distort');
		}
	});
	function goLeftRight(str) {
		if (str == 'left') {
			man.style.left = state.left - state.step + 'px';
			state.left = parseInt(man.style.left)
		} else if (str == 'right') {
			man.style.left = state.left + state.step + 'px';
			state.left = parseInt(man.style.left)
		}
		
	}
	function goUpDown(str, ctrl) {
		if (!ctrl) {
			if (str == 'up') {
	   			man.style.bottom = state.bottom + state.step + 'px';
				state.bottom = parseInt(man.style.bottom);
			} else if (str == 'down') {
	   			man.style.bottom = state.bottom - state.step + 'px';
				state.bottom = parseInt(man.style.bottom);
			} 

		}
	}
	function universalMove(ev){
		switch(ev.keyCode){
		    case 32: jump(ev.ctrlKey); break; //space  
		    case 39: goLeftRight('right'); break; //right
		    case 37: goLeftRight('left'); break; //left	
			case 38: goUpDown('up', ev.ctrlKey); break; //top
			case 40: goUpDown('down', ev.ctrlKey); break; //down
			case 17: jump(ev.ctrlKey); break; //ctrl  			
		}
	}
	document.addEventListener('keydown', universalMove)

	/*function doJump() {
		man.style.bottom = state.bottom + state.h + "px"
		setTimeout(()=>{man.style.bottom = state.bottom + "px"}, 300)
	}*/
	function doRemove() {
		man.style.width = '0'
		man.style.height = '0'
	}
	function doChangeColor() {
		function color() {
			return Math.floor(Math.random()*256)
		}
		man.style.background = `rgb( ${color()}, ${color()}, ${color()})`
	}


	let targetList = document.createElement('ul');
	var list = [
	  {'title':'<a style="cursor:pointer">Jump</a>', 'action': jump},
	  {'title':'<a style="cursor:pointer">Remove</a>', 'action': doRemove},
	  {'title':'<a style="cursor:pointer">ChangeColor</a>', 'action': doChangeColor}
	 ]
	for(let i = 0; i < list.length; i++){
		let li = document.createElement('li');
		for(var key in list[i]){
			if(key == 'title')
				li.innerHTML = list[i][key];
			else if (key == 'action')
				li.onclick = list[i][key]
		}
		targetList.appendChild(li);
	}

	document.addEventListener('contextmenu', function(ev){
		ev.preventDefault()
		document
			.querySelector('.wrap')
			.appendChild(targetList);

		targetList.style.cssText = `
		position: absolute; 
		background: aliceblue; 
		display: inline-block;
		padding: 6px;`
		function menuPosition(coord) {
			if(coord == 'x'){
				if (ev.clientX > WW - targetList.offsetWidth)
					return ev.clientX - targetList.offsetWidth
				else
					return ev.clientX
			}
			else {
				if (ev.clientY > WH - targetList.offsetHeight)
					return ev.clientY - targetList.offsetHeight
				else
					return ev.clientY				
			}
		}
		targetList.style.left = menuPosition('x')  + 'px';
		targetList.style.top = menuPosition('y')  + 'px';

	});
	document.addEventListener('click', function(ev){
		targetList.style.display="none";
	});
}