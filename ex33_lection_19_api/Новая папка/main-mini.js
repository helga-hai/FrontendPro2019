/*var tableList = [];
fetch('./data3.json')
	.then(response => response.json())
	.then(json => fetch(json['repos_url']))
	.then(response => response.json())
	.then( json => json.forEach( item => tableList.push(new FormInfo(item))) )
	//.catch(e => console.log(e))


	Promise.all( tableList.map(item=> fetch(item['languages_url'])) )

		.then(responses => Promise.all(responses.map(item => item.json()) ) )
		
			.then(responses => {
				responses.forEach((item, pos) => {
					tableList[pos]['languages_url']=[];
					tableList[pos]['languages_url']=Object.keys(item)
					//console.log(item)
				})
				console.log(responses)
				return Promise.resolve()
			} )
			.then( response => console.log(tableList))

.catch(e => console.log(e))

function FormInfo(obj){
	for(let key in obj){
		this.name = obj['name'];
		this['default_branch'] = obj['default_branch'];
		this['updated_at'] = obj['updated_at'];
		this['languages_url'] = obj['languages_url'];
	}
}*/

/*list = [
{
 default_branch: "master",
languages_url: "./lang.json",
name: "front-end-pro-2018",
updated_at: "2018-07-02T12:57:45Z"
},
{
 default_branch: "master_2",
languages_url: "./lang.json",
name: "front-end-pro-2018_2",
updated_at: "2018-07-02T12:57:45Z_2"
}]

Promise
.all(list.map(item=> fetch(item['languages_url'])))

.then(responses => 
Promise
.all(responses.map(item => item.json()) ))

.then(responses => {
	
	responses.forEach((item, pos) => {
		list[pos]['languages_url']=[];
		list[pos]['languages_url']=Object.keys(item)
		console.log(item)
	});
	return Promise.resolve()
} )
.then( response => console.log(list))*/
var tableList = [];
let async = new Promise((resolve, reject) => {
//function first(){

	 fetch('./data3.json')
		.then(response => response.json())
		.then(json => fetch(json['repos_url']))
		.then(response => response.json())
		.then( json => {json.forEach( item => tableList.push(new FormInfo(item)));
			if(json.ok){
				resolve(tableList)
			}else{
				reject('not')
			}
		
		})
		

})
//first()


//var willIGetNewPhone = new Promise(
//	function (resolve, reject) {
//var all = new Promise((resolve, reject) => {

async.then(
		Promise
			.all( tableList.map(item=> fetch(item['languages_url'])) )
			.then(responses => 
				Promise
					.all(responses.map(item => item.json() ) )
				)
			)
//	})

					.then(responses => {
						//var finite = new Promise(function(resolve, reject){
							responses
								.forEach((item, pos) => 
									tableList[pos]['languages_url']=Object.keys(item) )
							
							//var t = 44
							
						}) .then( response => {resolve(tableList)})
					//})

//	}
//);
//var askMom = function () {
//willIGetNewPhone
	///.then( response => console.log(response))
	.catch(function (error) {
            console.log(error);
       });
//}
//wait
//setTimeout(wait,4000)
function FormInfo(obj){
	for(let key in obj){
		this.name = obj['name'];
		this['default_branch'] = obj['default_branch'];
		this['updated_at'] = obj['updated_at'];
		this['languages_url'] = obj['languages_url'];
	}
}
//askMom()
//console.log(askMom)\


setTimeout(function(){
console.log(tableList)	
},6000)