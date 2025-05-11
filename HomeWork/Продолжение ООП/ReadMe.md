Задание 1: "Управление персоналом компании"
Реализуйте классы для управления сотрудниками компании:
Класс Employee (Сотрудник)
● Свойства:
○ name (имя) — строка, представляющая имя сотрудника.
● Методы:
○ displayInfo() — метод, который выводит информацию о сотруднике в
формате: Name: {name}.
Класс Manager (Менеджер)
● Наследует: класс Employee.
● Дополнительные свойства:
○ department (отдел) — строка, представляющая отдел, в котором
работает менеджер.
● Переопределенные методы:
○ displayInfo() — метод, который переопределяет метод
displayInfo() родительского класса и выводит информацию о
менеджере в формате: Name: {name}, Department: {department}.
Пример использования классов
const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод: John Smith
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод: Name: Jane Doe, Department: Sales


Задание 2: "Управление списком заказов"
Реализуйте классы для управления продуктами и заказами:
Класс Product (Продукт)
● Свойства:
○ name (название) — строка, представляющая название продукта.
○ price (цена) — число, представляющее стоимость продукта.
Класс Order (Заказ)
● Свойства:
○ orderNumber (номер заказа) — число, уникальный номер заказа.
○ products (продукты) — массив, содержащий список продуктов в заказе.
● Методы:
○ addProduct(product) — метод, который принимает объект product и
добавляет его в список продуктов заказа.
○ getTotalPrice() — метод, который возвращает общую стоимость
заказа, основанную на ценах продуктов.
Пример использования класса
const order = new Order(12345);
const product1 = new Product("Phone", 500);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.getTotalPrice()); // Вывод: 600