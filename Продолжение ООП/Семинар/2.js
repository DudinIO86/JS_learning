class Animal{
    constructor(name){
        this.name=name;
    }

    speak(){
        console.log(`Животное ${this.name} издает звук`);
    }
}

class Dog extends Animal{
      constructor(name,breed){
        super(name);
        this.breed=breed;
    }

    fetch(){
        console.log(`Собака ${this.name} принесла мяч`);
    }
}

const animal1=new Animal("Kuza");
animal1.speak();

const dog1=new Dog("Bob","UFO");
dog1.speak();
console.log(dog1.breed);
dog1.fetch();