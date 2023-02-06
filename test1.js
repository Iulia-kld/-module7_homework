//Задание 1

//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль 
//все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.


/*const obj = {
    name: "Julia",
    age: 38,
    city: "Kaliningrad"
}

function getObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}:  ${obj[key]}`);
        }
    }    
} 
getObject(obj)*/


const computer = {
    name: 'HP Pavilion',
    chipset: 'AMD X570',
    coreCount: 8,
    cpuManufacturer: 'AMD',
    videoMemory: 4096, 
}

function getEntries(computer) {
const entries = Object.entries(computer);

for (let [key, value] of entries) {
    console.log (`${key}: ${value}`);
}
}

getEntries(computer);