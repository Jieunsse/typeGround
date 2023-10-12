interface Person {
    name: string;
    age: number;
}

function greet(person: { name: string; age: number }) {
    return "Hello" + person.name;
}











