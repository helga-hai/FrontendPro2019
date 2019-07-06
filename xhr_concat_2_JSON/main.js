// Домашнее задание 32
//#2
//написать код, который сформирует 2 запроса за различными файлам json. (data.json, data2.json). В файлах лежат массивы подобные по структуре. Склеить 2 массива и вывести результат в консоль


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
setTimeout(()=>{console.dir(res)},1000)