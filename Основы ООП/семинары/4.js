class Person1{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    introduce(){
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const person=new Person1("John",25);
person.introduce();