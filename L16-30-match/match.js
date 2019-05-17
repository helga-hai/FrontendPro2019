//Домашнее задание 30
//Добавлено: 05.04.2019 22:16
//#2
//Дано массив строк. В каждой необходимо найти позицию совпадения `match`. Все совпадения сохранить в строку через разделитель.
//`var match ="hello"`
//["1234hello", "hellohd;lfmg", "45yu89egrhellowegojih", "dfhghello", ",bnsdklb"]
//результат: "4, 0, 9, 4"


var list = ["1234hello", "hellohd;lfmg", "45yu89egrhellowegojih", "dfhghello", ",bnsdklb"];
var match ="hello";

let res = list
	.map(item => item.indexOf(match))
	.filter(item => item >= 0)
	.join(', ')

console.log(res)
