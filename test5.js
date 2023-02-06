//Задача 5
/*Переписать консольное приложение из предыдущего юнита на классы.
Общие требования:
Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.*/


let powerConsumption = 0;

class Devices {
    constructor (name, diagonal) {
this.name = name;
this.diagonal = diagonal;
this.connect = false
};

connected() {
    console.log(`${this.name} включён в сеть`);
    this.connect = true;
    powerConsumption += this.power;
}

unconnected(){
    console.log(`${this.name} не подключён к сети`);
    this.connect = false;
}
}

function getInfoSumPower() {
    console.log(`Потребляемая мощность включённых в сеть приборов равна ${powerConsumption} Вт`);
}

class MyDevice extends Devices {
    constructor (name, diagonal, brand, power) {
        super(name, diagonal);
        this.brand = brand;
        this.connect = false;
        this.power = power
}
}

const monoblock = new MyDevice ('monoblock', 27, 'HP', 120 );
monoblock.connected()
console.log(monoblock)

const laptop = new MyDevice('laptop', 17, 'Asus', 50);
laptop.connected()
console.log(laptop)


getInfoSumPower()