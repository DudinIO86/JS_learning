class Student{
    constructor(name,age,grade){
        this.name=name;
        this.age=age;
        this.grade=grade;
    }

    displayInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo()