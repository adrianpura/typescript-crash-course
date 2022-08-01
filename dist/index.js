"use strict";
// Basic types
let id = 5;
let company = "Company 1";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
//Tuple
let person = [1, "Adrian", true];
//Tuple Array
let employee;
employee = [
    [1, "Adrian"],
    [2, "Josh"],
    [1, "Jill"],
];
//Union
let pid;
pid = "22";
//Enum (Enumerated Type)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John",
};
//Type assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
//functions
function addNum(x, y) {
    return x + y;
}
//Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
//Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Dev");
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "john", "jill"]);
strArray.push(1);
console.log(numArray);
