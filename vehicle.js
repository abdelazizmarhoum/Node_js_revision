const prompt = require('prompt-sync')();

class Vehicle {
    constructor(brand,year){
        this.brand=brand
        this.year=year
    }

    info (){
        console.log('this vehicle is a brand of : ' , this.brand , ' , it was created in the year : ' , this.year)
    }
}

class Car extends Vehicle {
    constructor (brand , year , model){
        super(brand,year)
        this.model = model
    }

    carInfo(){
        console.log('this car is a brand of : ' , this.brand , ' , it was created in the year : ' , this.year , 'it is a modle of : ' , this.model)
    }
}

class Motorcycle extends Vehicle {
    constructor (brand,model,type){
        super(brand,model)
        this.type = type
    }

    info(){
        console.log('the motorcycle brand is : ' , this.brand , ' the year is : ' , this.year , ' the type is : ' , this.type)
    }
}

let car_brand = prompt('the brand of the car : ')
let car_year = prompt('the year of the car : ')
let car_model = prompt('the model of the car : ')

let motorcycle_brand = prompt('the brand of the motorcycle : ')
let motorcycle_year = prompt('the year of the motorcycle : ')
let motorcycle_type = prompt('the type of the motorcycle : ')

const car = new Car(car_brand,car_year,car_model)
car.info()
car.carInfo()

const motorcycle = new Motorcycle(motorcycle_brand,motorcycle_year,motorcycle_type)
motorcycle.info()