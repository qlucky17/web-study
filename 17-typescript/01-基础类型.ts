// boolean, number, string, undefined, null, 数组, 元组Tuple, 枚举enum, any, void, object, 联合类型, 类型断言, 类型推断
let a: boolean = true
let b: number = 100
let c: string = 'hello'
let d: any = [true, 100, 'hello']

let list1: string[] = ['hello', 'world']
let list2: Array<string> = ['hello', 'world'] //数组泛型写法


// 元组Tuple：表示一个已知元素数量和类型的数组，各元素的类型不必相同
let t1: [string, number]
t1 = ['hello', 100]


// 使用枚举类型可以为一组数值赋予友好的名字，枚举数值默认从0开始依次递增，根据特定的名称得到对应的枚举数值。、
// 可以手动赋值。
enum Color { Red, Green, Blue }
let mycolor: Color[] = [Color.Red, Color.Green, Color.Blue]
console.log(mycolor) // [0,1,2]

enum Color2 { Red=1, Green=3, Blue}
let mycolor2: Color2[] = [Color2.Red, Color2.Green, Color2.Blue]
console.log(mycolor2) // [1,3,4]


// void表示没有任何类型
function fn(): void{
  console.log('void表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值')
}


// object 表示非原始类型，也就是除 number，string，boolean之外的类型。
function fn2(target: object): object{
  console.log('fn2: ', target)
  return target;
}
fn2({name: 'yee'})


// 联合类型
function toString(x: string | number): string{
  return x.toString(); 
}
let str1 = toString(100)
let str2 = toString('hello')


// 类型断言, <>或as
function getLength(x: string | number){
  if((<string>x).length){
    // return (<string>x).length;
    return (x as string).length
  } else {
    return x.toString().length
  }
}
let len1 = getLength(100)
let len2 = getLength('hello')


// 类型推断
let x = 10 //推断为number
// x = 'hello' //error

let y; // 推断为any
y = 10
y = 'hello'