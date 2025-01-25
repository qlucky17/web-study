"use strict";
// 泛型<>：指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。
// 使用函数泛型
function createArray(value, count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(value);
    }
    return arr;
}
console.log(createArray('a', 5));
console.log(createArray(10, 5));
// 多个泛型参数的函数
function swap(a, b) {
    return [a, b];
}
const r1 = swap('a', 10);
const r2 = swap('a', 10);
console.log(r1, r2);
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class UserCrub {
    constructor() {
        this.data = [];
    }
    add(user) {
        user = Object.assign(Object.assign({}, user), { id: Date.now() });
        this.data.push(user);
    }
    getById(id) {
        // return this.data.find(item => item.id===id)
        let item = this.data.find(item => item.id === id);
        return item ? item : null;
    }
}
const user = new UserCrub();
user.add(new User('tom', 10));
user.add(new User('tom2', 20));
console.log(user.data);
// 泛型类
class GenericNumber {
    constructor(value) {
        this.value = value;
    }
    add(x, y) {
        return x ? x : y;
    }
}
let myGenericNumber = new GenericNumber(0);
console.log(myGenericNumber.add(0, 10));
let myGenericString = new GenericNumber('abc');
console.log(myGenericString.add('abc', 'ABC'));
function fnn(x) {
    console.log(x.length);
}
fnn('abc');
