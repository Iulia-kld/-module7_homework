
//Задание 3
//Написать функцию, которая создает пустой объект, но без прототипа.

function emptyObj () {
    Object.create(null)
} 

emptyObj()