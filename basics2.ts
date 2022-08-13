class Person {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public getFullName(): string {
        return `Hello, ${this.name} ${this.age}`;
    }
}

let p = new Person("John", 30);
console.log(p.getFullName());
