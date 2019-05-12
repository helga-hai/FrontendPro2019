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
function concatTable(list){
 let curentTable = `<table>${list.map(item => `<tr><td>${item}</td></tr>`).join('')}</table>`;
 //delete list;
 return curentTable
}

var tableList = [];
function pluck(array, str){
 array.forEach( (tmpObj)=>{
     for(let key in tmpObj) {
      if(key == str) {
       tableList.push(tmpObj[key])
      }
     }
 });
 return tableList
}

var ajaxQuery;
function getObject(url){
 ajaxQuery = new Promise(function(resolve, reject){
     let xhr = new XMLHttpRequest();

     xhr.addEventListener('readystatechange', function(){
         if (xhr.readyState != 4) return;
         if (xhr.status != 200)
             reject(xhr.statusText)
         else
             resolve([JSON.parse(xhr.responseText), url]);
     })

     xhr.open('GET', url, true);
     xhr.send();
 })
}
getObject('https://api.github.com/orgs/hillel-front-end')

ajaxQuery.then(
     gitInfo => {

		if (gitInfo[gitInfo.length-1] === "https://api.github.com/orgs/hillel-front-end") {
			for (let key in gitInfo[0]) {
				if ( key === 'repos_url' ) {
				tableList.push(gitInfo[0][key])
				console.log(gitInfo[0][key])
				getObject(gitInfo[0][key])
				}
			}
		}

		if (gitInfo[gitInfo.length-1] === "https://api.github.com/orgs/hillel-front-end/repos") {
			pluck(gitInfo[0], 'name');
			console.log(tableList)
		};
      console.log('RESOLVED', tableList)
     },
     error => console.log(error + ' 1')
 )


console.log('end', tableList)