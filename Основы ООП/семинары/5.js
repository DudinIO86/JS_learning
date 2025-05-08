class BankAccount{
    static bankName="My Bank";
    constructor(accountNumber,balance=0){
        this.accountNumber=accountNumber;
        this.balance=balance;
    }

    deposit(amount){
        this.balance+=amount;
        console.log(`${this.balance} пополнен номер счета ${this.accountNumber}`);
    }

    withdraw(amount){
       
       if(this.balance>=amount){
         this.balance-=amount;
        console.log(`${this.balance} снято с номера счета ${this.accountNumber}`);
       }else{
        console.log(`Не хватает средств на номере счета ${this.accountNumber}`);
       }
    }
}

const account1=new BankAccount("12234564343",1000);
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(2000);