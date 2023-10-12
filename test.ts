// tsc test.js => convert to js. (compile)
// ts-node test.ts => execute ts right away.


function multiplyAll(
    values: number[] | undefined,
    factor: number
): number[] | undefined {
    if (!values) {
        return values;
    } else {
        return values.map((x) => x * factor);
    }
}

const result = multiplyAll([1, 2, 3], 4);
console.log(result);


// 숫자로 구성된 배열과 숫자 하나를 전달받아 
// 배열속의 숫자들을 전달받은 숫자 하나로 곱해서
// 그 결과를 배열에 저장하는 함수.





function greeter(fn: (a: string) => void) {
    fn("Hello, World!");
}



function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);

// function functionName (fn: (a: string) => void) 
// 펑션을 파라미터로 받는 펑션.
// 파라미터로 전달된 펑션은 파라미터로 스트링을 받음.
// => void 라는 건 어떤 밸류도 리턴하지 않겠다는 뜻.


console.clear();

type numberBox = {
    description: string;
    (someArg: number): boolean;
};

function calcNum(fn: numberBox, newNum: number) {
    console.log(fn.description + " returned " + fn(newNum));
}

function checkOut(someArg: number) {
    return someArg > 3;
}

checkOut.description = "default description";

calcNum(checkOut, 6);




type DescribableFunction = { // 묘사 가능한 함수
    description : string; // 스트링
    (someArg: number): boolean; // 파라미터로 숫자를 받을건데 그 숫자로 불리언 판독
};

function doSomething(fn: DescribableFunction) { // 
    console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
    return someArg > 3;
}

myFunc.description = "default description";

doSomething(myFunc);


type Person = {
    name: string;
    age: number;
}

function greet2 (person: Person) {
    return "Hello " + person.name;
}

console.clear();




