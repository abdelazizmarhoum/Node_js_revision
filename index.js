const prompt = require('prompt-sync')();

class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(this.name, 'speak this sound')
    }
}

class Dog extends Animal {
    bark() {
        console.log(this.name, 'barks')
    }
}

const dog = new Dog('rex')
dog.speak()
dog.bark()


class Cat extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }

    desc() {
        console.log(this.name, 'has the color', this.color)
    }
}

const cat = new Cat('tim', 'red')
cat.desc()
cat.speak()





