class Employee {
  constructor(name) {
    this.name = name;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, departament) {
    super(name);
    this.departament = departament;
  }
  displayInfo() {
    console.log(`Name: ${this.name}, Departament: ${this.departament}`);
  }
}

const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
