const rArray = [2, 4, 6, 8, 10];

const nMap = rArray.map((x) => x * 2);

console.log(nMap);



//for (let i=0; i<10; i++) {}


let r = 8;


// for in 구문 => 배열의 인덱스를 순서대로 받아옴.
//  r = index
// for (let i in r) {}}


// r = [1, 2, 3, 4];
// for of 구문 => 배열에서 값을 순서대로 받아옴.
// r 값을 순서대로 받아옴.
//for (let rad of r) {}


// p는 object.
// propertyName : propertyValue
// key : value
let p =  { 
    name: "Tom",
    age: 21,
    point: 23.5,
};

console.clear();
console.log("1" + p.name);
console.log("2" + p["name"]);

// 자바스크립트에서 배열은 무조건 색인배열.
// 무조건 숫자로만.
// 다만 오브젝트를 연관배열처럼 사용 가능하다.


