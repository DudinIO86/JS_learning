const Animal={
    name:'',
    eat(){
        console.log(`${this.name} is eating.`);
    }
}

const Dog={
    name:'Rex',
    bark(){
        console.log(`${this.name} is barking.`);
    }
}

Dog.eat=Animal.eat;

Dog.eat();
Animal.eat();