// Basic types
let id: number = 5;
let company: string = "Company 1";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

//Tuple
let person: [number, string, boolean] = [1, "Adrian", true];

//Tuple Array
let employee: [number, string][];
employee = [
  [1, "Adrian"],
  [2, "Josh"],
  [1, "Jill"],
];

//Union
let pid: string | number;
pid = "22";

//Enum (Enumerated Type)
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

//Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

//Type assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

//functions

function addNum(x: number, y: number): number {
  return x + y;
}

//Void
function log(message: string | number): void {
  console.log(message);
}

// interface
interface UserInterface {
  readonly id: number; //id is readonly
  name: string;
  age?: number; //age is optional
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}
//classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

//Subclasses
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Dev");

//Generics
function getArray<Type>(items: Type[]): Type[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "john", "jill"]);

strArray.push(1);

console.log(numArray);
