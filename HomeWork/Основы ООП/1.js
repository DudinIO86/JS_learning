class Book{
    constructor(title,author,pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    }

    displayInfo(){
        console.log(`Название: ${this.title}, Автор: ${this.author}, Страниц: ${this.pages}`);
    }
}

const book1=new Book("1984","Джордж Оруэлл",328);

book1.displayInfo();