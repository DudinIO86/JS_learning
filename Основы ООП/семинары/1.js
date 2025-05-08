const Person={
    name:'',
    age:0,
    gender:'',
    introduce(){
        console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
    },
    changeName(newName){
        this.name=newName;
    }
};

Person.name="John";
Person.age=25;
Person.gender="male";

Person.introduce();
Person.changeName("Mike");
Person.introduce();