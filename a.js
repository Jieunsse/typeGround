class Book {
    constructor(title, price, rating) { // kind of function, Creator(생성자)
        this.title = title;
        this.price = price;
        this.rating = rating;
    }
}

// 생성자 == 초기값 설정.
// 생성자를 통해 프로퍼티 설정.
// 메소드 


// 클래스가 만들어지고나면 오브젝트 생성.
// 클래스 => 오브젝트 생성기


const book = new Book('Java', 11000, 8.2);
const book2 = new Book('JS', 22000, 10);


console.log(book);
console.log(book2);
