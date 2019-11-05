class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(name, sound) {
        super('개', name, sound);
        console.log(this);
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super('고양이', name, sound);
        console.log(this);
    }
}

const dog = new Dog('춘식', '월월');
const cat = new Cat('안주', '니아옹');
