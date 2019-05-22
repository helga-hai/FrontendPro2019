function getObject(url){

	return new Promise(function(resolve, reject){
		//if (url=="https://api.github.com/orgs/hillel-front-end") {console.log("1")}
		//if (url=="https://api.github.com/orgs/hillel-front-end/repos") {console.log("2")}
	     let xhr = new XMLHttpRequest();
	     xhr.addEventListener('readystatechange', function(){
	         if (xhr.readyState != 4) return;
	         if (xhr.status != 200)
	             reject(xhr.statusText)
	         else {
	             resolve(JSON.parse(xhr.responseText));
			 }
	     })
	     xhr.open('GET', url, true);
	     xhr.send();
	})
}

var ajaxQuery = getObject('https://api.github.com/orgs/hillel-front-end');

ajaxQuery.then(
    gitStart => getObject(gitStart['repos_url']),
    error => Promise.reject()
 ).then(
    gitAll => gitAll.forEach(item=>tableList.push(new FormInfo(item))),
    error => console.log(error+' =2')
 )

function FormInfo(obj){

	for(key in obj){
		this.name = obj['name'];
		this['default_branch'] = obj['default_branch'];
		this['updated_at'] = obj['updated_at'];

		let langQuery = getObject(obj['languages_url']);
		langQuery.then(
			langObj=>{
				let res=[];
				for(let key in langObj){
					res.push(key);
				};
				this['languages_url'] =  res;
			},
			error => console.log(error+' =lang')
		);

	}
}


setTimeout(()=>{
	console.dir(tableList);
	export tableList
	},4000)

