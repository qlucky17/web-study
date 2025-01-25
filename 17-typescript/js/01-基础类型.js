"use strict";
// boolean, number, string, undefined, null, 数组, 元组Tuple, 枚举enum, any, void, object, 联合类型, 类型断言, 类型推断
let a = true;
let b = 100;
let c = 'hello';
let d = [true, 100, 'hello'];
let list1 = ['hello', 'world'];
let list2 = ['hello', 'world']; //数组泛型写法
// 元组Tuple：表示一个已知元素数量和类型的数组，各元素的类型不必相同
let t1;
t1 = ['hello', 100];
// 使用枚举类型可以为一组数值赋予友好的名字，枚举数值默认从0开始依次递增，根据特定的名称得到对应的枚举数值。、
// 可以手动赋值。
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let mycolor = [Color.Red, Color.Green, Color.Blue];
console.log(mycolor); // [0,1,2]
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 3] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
let mycolor2 = [Color2.Red, Color2.Green, Color2.Blue];
console.log(mycolor2); // [1,3,4]
// void表示没有任何类型
function fn() {
    console.log('void表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值');
}
// object 表示非原始类型，也就是除 number，string，boolean之外的类型。
function fn2(target) {
    console.log('fn2: ', target);
    return target;
}
fn2({ name: 'yee' });
// 联合类型
function toString(x) {
    return x.toString();
}
let str1 = toString(100);
let str2 = toString('hello');
// 类型断言, <>或as
function getLength(x) {
    if (x.length) {
        // return (<string>x).length;
        return x.length;
    }
    else {
        return x.toString().length;
    }
}
let len1 = getLength(100);
let len2 = getLength('hello');
// 类型推断
let x = 10; //推断为number
// x = 'hello' //error
let y; // 推断为any
y = 10;
y = 'hello';
