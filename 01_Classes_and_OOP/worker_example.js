const prompt = require('prompt-sync')()

class Worker {
    constructor(id,name){
        this.id=id
        this.name=name
    }

    info(){
        console.log('the id of the worker is : ' , this.id , ' , his name is : ' , this.name)
    }
}

class Normal extends Worker {
    constructor(id,name,salery){
        super(id,name)
        this.salery=salery
    }

    normalInfo(){
        console.log('the id of the worker is : ' , this.id , ' , his name is : ' , this.name , ' , his monthely salery is : ' , this.salery)
    }
}

class Unnormal extends Worker {
    constructor(id,name,nb_hours,price){
        super(id,name)
        this.nb_hours=nb_hours
        this.price=price
    }

    unnormalInfo(){
        console.log('the id of the worker is : ' , this.id , ' , his name is : ' , this.name , 'the worker salery is : ' , this.nb_hours*this.price)
    }
}


let id = prompt('the id of the worker :  ')
let name = prompt('the name of the worker : ')
let chose = parseInt(prompt('chose the worker , 1 for normal , 2 for unormal : '))


if (chose == 1){
    let salery = prompt('inter the salery of the worker : ')
    const worker = new Normal(id,name,salery)
    worker.normalInfo()
}else if(chose == 2){
    let nb_hours = parseFloat(prompt('number of houres : '))
    let price = parseFloat(prompt('the price of working '))
    const worker = new Unnormal(id,name,nb_hours,price)
    worker.unnormalInfo()
}
