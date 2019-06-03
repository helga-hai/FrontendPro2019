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


import  query from './Api.js'
import {Render} from './Render.js';

window.onload = function() {

    let param = {
        target: document.body
    }

    query.then(res=>
    	Render.table(res, param))

}