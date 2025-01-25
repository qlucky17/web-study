interface Person {
  id: number
  name: string
  age?: number
  readonly sex: string
}

const p1: Person = {
  id: 1,
  name: 'Lucy',
  sex: '女'
}
// p1.sex = '男'   //error


// 函数类型，接口可以描述函数类型(参数的类型与返回的类型)
interface Search {
  (x: string, y: string): void
}
const s1: Search = function(x: string, y: string): string{
  return `${x} ${y}`;
}
console.log(s1('hello', 'world'))



// 类类型，实现接口：一个类可以实现多个接口，一个接口可以继承多个接口
interface Alarm {
  alert(): void
}
interface Light {
  LightOn(): void;
  LightOff(): void;
}
class Car implements Alarm{
  alert(){
    console.log('alarm')
  }
}
class Car2 implements Alarm,Light{
  alert(){
    console.log('alarm')
  }
  LightOn(){
    console.log('lighton')
  }
  LightOff(){
    console.log('lightoff')
  }
}

interface LightableAlarm extends Alarm, Light{}
class Car3 implements LightableAlarm{
  alert(){
    console.log('alarm')
  }
  LightOn(){
    console.log('lighton')
  }
  LightOff(){
    console.log('lightoff')
  }
}