class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
}

class ShoppingCart{
    constructor(customerName,initialTotalCost){
        this.customerName=customerName;
        this.totalCost=initialTotalCost;
        this.items=[];
    }

    addItem(product,quantity=1){
        this.totalCost+=product.price*quantity;
        this.items.push({product,quantity});
    }

    getCurrentCost(){
        return this.totalCost;
    }

    checkout(){
        console.log(`Заказ оформлен ${this.customerName}. Общая стоимость заказа: ${this.totalCost} рублей. Спасибо за покупку!`);
    }
}

const product1=new Product('Футболка',345);
const product2=new Product('Джинсы',3485);
const cart=new ShoppingCart('Igor',0);

cart.addItem(product1,2);
cart.addItem(product2);

cart.checkout();