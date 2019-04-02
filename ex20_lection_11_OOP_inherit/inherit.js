
function C1(){
	//this.renderList = function(){ console.log(this) }
}
C1.prototype.renderList = function(){ console.log(this) }


function C2(){}
	C2.prototype = Object.create(C1.prototype)
	C2.prototype.fillList = function(from,to){
		for(var i=0; i<this.list.length; i++){
			this.list[i] = Math.floor(Math.random()*(to-from+1)+from);
		}
		//return this.list
	}
	C2.prototype.removeList = function(){ 
		delete this.list 
	}

function C3(){
	this.createList = function(length){
		this.list =[];
		this.list.length = length;
	}
}
	C3.prototype = Object.create(C2.prototype)


var p = new C3();
p.createList(10)
p.fillList(-2,2)
p.renderList();
//p.removeList();