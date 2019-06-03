var tableList = [];
var listPromise = [];
function FormInfo(obj){
	for(let key in obj){
		this.name = obj['name'];
		this['default_branch'] = obj['default_branch'];
		this['updated_at'] = obj['updated_at'];
		this['languages_url'] = obj['languages_url'];
	}
}
var query1 = new Promise(
	function(resolve,reject){

		fetch('./data3.json')
		.then(response => response.json())
		.then(json => fetch(json['repos_url']))
		.then(response => response.json())
		.then( json => {
				json.forEach( item => tableList.push(new FormInfo(item)))
				listPromise = tableList.map(item=> fetch(item['languages_url']) );
				createLangList()
			} )
		.catch(er => console.log(er))
		resolve(tableList)
	}
)
query1.then(res => console.log(res))
export default query1

function createLangList(){

	Promise.all(listPromise)
		.then(responses => 
				Promise.all(responses.map(item => item.json() ) )
			)
			.then(responses => {
				responses.forEach((item, pos) => 
						tableList[pos]['languages_url']=Object.keys(item) )
			})
			//.then( response => console.log(tableList))

	.catch(er => console.log(er))
}
