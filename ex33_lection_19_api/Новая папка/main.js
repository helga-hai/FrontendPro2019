/*var characters = [
{'name':'barney', 'age': 36},
{'name': 'fred', 'age': 40}
]

function pluck(array, str){
 let list = [];
 array.forEach( (tmpObj)=>{
     for(let key in tmpObj) {
      if(key == str) {
       list.push(tmpObj[key])
      }
     }
 });
 return list
}

console.log(pluck(characters, 'name')) // ['barney','fred']*/

/*let products = {
 'address': 'Mechnikova, 2/12',
 'fruits and berries': {'apple': 12, 'pear': 9, 'peach': 3, 'berries': {'blackberry': 13, 'strawberry': 26, 'date': '24.04.2019'}, 'date': '23.04.2019' },
 'biscuits': 10,
 'vegetables':{'potato':30, 'carrot': 5, 'onion': 3, 'date': '22.04.2019'},
 'cakes': 2,
 'date': '24.04.2019'
}

let sum = 0;
function getProducts(obj) {
 for (let key in obj) {
  if (typeof obj[key] === 'number') {sum += obj[key];}
  else if (typeof obj[key] === 'object') getProducts(obj[key])

 }
 return sum
}
console.log(getProducts(products))*/

/*Используя github API делаем запрос на ресурс: https://api.github.com/orgs/hillel-front-end
Создаем простой интерфейс (в виде таблицы) с следующими данными.
На главной отображается список все репозиториев
Вывести default branch для каждого репозитория
Дату последнего update
Список языков, которые используются в репозитории*/

/*repos_url -> name
repos_url -> default_branch
repos_url -> updated_at
*/
//import data from './Api.js';

function concatTable(list){
 let curentTable = `<table>${list.map(item => `<tr><td>${item}</td></tr>`).join('')}</table>`;
 //delete list;
 return curentTable
}


function pluck(array, str){
	array.forEach( (tmpObj)=>{
		for(let key in tmpObj) {
			if(key == str)
				tableList.push(tmpObj[key])
		}
	});
 return tableList
}

var tableList = [];

function getObject(url,bool){

	return new Promise(function(resolve, reject){
		//if (url=="https://api.github.com/orgs/hillel-front-end") {console.log("1")}
		//if (url=="https://api.github.com/orgs/hillel-front-end/repos") {console.log("2")}
	     let xhr = new XMLHttpRequest();
		 //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	     xhr.addEventListener('readystatechange', function(){
	         if (xhr.readyState != 4) return;
	         if (xhr.status != 200)
	             reject(xhr.statusText)
	         else {
	             resolve(JSON.parse(xhr.responseText));
			 }
	     })
			//body=JSON.parse(xhr.responseText)
			body = xhr
	     xhr.open('POST', url, bool);
		 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	     xhr.send(body);
	})
}

var ajaxQuery = getObject('./data3.json',true)//getObject('https://api.github.com/orgs/hillel-front-end');

ajaxQuery
	.then(gitStart => getObject(gitStart['repos_url'],true))
	.then(
	    gitAll => {
			var list = new Promise((resolve,reject) => {

				gitAll.forEach(item=>tableList.push(new FormInfo(item)))
				console.log(tableList)
			})
			Promise.resolve(tableList)
			list	
				.then((res) => console.log(tableList))
				.then((resolve) => {
					
					console.log(tableList)
					Promise.all( tableList.map(item=> getObject(item['languages_url']),false) )
				})
				.then(responses => 
					Promise.all(responses.map(item => item.json()) )
				)
				.then(responses => {
					responses.forEach((item, pos) => {
						tableList[pos]['languages_url']=Object.keys(item)
					})
					return Promise.resolve()
				})
				.then( response => console.log(tableList))
		}
	 )
	.catch(err=>console.log(err))
//let langQuery

let arrayOfPromises = []
function FormInfo(obj){
	return new Promise(function(resolve, reject){
		for(let key in obj){
			this.name = obj['name'];
			this['default_branch'] = obj['default_branch'];
			this['updated_at'] = obj['updated_at'];
			this['languages_url'] = obj['languages_url'];
			/*let langQuery = getObject(obj['languages_url'],true)
			langQuery.then(langObj=>{
							let res=[];
							for(let key in langObj){
								res.push(key);
							};
							this['languages_url'] =  res;
						},)
			.catch(err=>console.log(err));*/

			/*if(key=='languages_url'){
				let langQuery = getObject(obj['languages_url'],true); 
				langQuery
					.then(
						langObj=>{
							let res=[];
							for(let key in langObj){
								res.push(key);
							};
							this['languages_url'] =  res;
						},
						error => console.log(error+' =lang')
					);
			}*/
				//arrayOfPromises.push(langQuery)

		}
		//resolve("sdf");
	})
}
//	console.log(arrayOfPromises)

setTimeout(function(){
console.log(tableList)	
},6000)

     //debugger

//export default 
/*
default_branch: "master"
languages_url: (3) ["JavaScript", "HTML", "CSS"]
name: "front-end-pro-2018"
updated_at: "2018-07-02T12:57:45Z"
*/