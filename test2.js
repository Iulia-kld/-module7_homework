
//Задание 2
//Написать функцию, которая принимает в качестве аргументов строку и объект, 
//а затем проверяет есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.


const computer = {
    name: 'HP Pavilion',
    chipset: 'AMD X570',
    coreCount: 8,
    cpuManufacturer: 'AMD',
    videoMemory: 4096, 
};

const myComputer = 'name';

function getEntries(computer, myComputer) {
    if (myComputer in computer) {
        console.log(true)
    } else {
        console.log (false)
    }
}
getEntries(computer, myComputer);