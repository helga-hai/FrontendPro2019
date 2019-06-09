var tableList = [];
//var listPromise = [];
let send = false;
function FormInfo(obj){
	for(let key in obj){
		this.name = obj['name'];
		this['default_branch'] = obj['default_branch'];
		this['updated_at'] = obj['updated_at'];
		this['languages_url'] = obj['languages_url'];
	}
}
var query = new Promise(
	function(resolve,reject){

		fetch('./data3.json')
		.then(response => response.json())
		.then(json => fetch(json['repos_url']))
		.then(response => response.json())
		.then( json => json.forEach( item => tableList.push(new FormInfo(item))) )

		.then( response => {
			if (tableList.length > 0){
				resolve(tableList)
			}
		})
	}
)
query.then(res => {
	let list = []
	list = res.map(item=> fetch(item['languages_url']))
	Promise.all(list)
		.then(responses => 
						Promise.all(responses.map(item => item.json() ) )
					)
		.then(res => res.forEach((item, pos) => 
							tableList[pos]['languages_url']=Object.keys(item) ))
		.then(res => console.log(tableList))
})


export default query