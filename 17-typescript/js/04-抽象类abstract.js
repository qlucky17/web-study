"use strict";
// 只能被继承，不能被实例化，可以包含未实现的抽象方法
class Animal2 {
    run() {
        console.log('animal run');
    }
}
class Dog extends Animal2 {
    // 如果没有定义cry方法，会报错
    cry() {
        console.log('dog cry');
    }
}
const dog = new Dog();
dog.cry();
dog.run();
