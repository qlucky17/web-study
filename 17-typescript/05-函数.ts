// 定义类型、可选参数|默认参数|剩余函数、函数重载
function sum(x: number, y: number): number{
  return x+y;
}
console.log(sum(10,20))


function getname(firstname: string = 'Lucy', lastname?: string): string{
  return firstname + ' ' + lastname
}
console.log(getname())


function getinfo(x: string, ...args: string[]){
  return [x, ...args];
}
console.log(getinfo('a', 'b', 'c', 'd'))


// 函数重载：函数名相同, 而形参不同的多个函数， （不常用）
// 1. 声明
function add(x: string, y: string): string
function add(x: number, y: number): number
// 2. 实现
function add(x: string|number, y: string|number): string|number {
  // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y
  } else if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  } 
  return ''
}
console.log(add(1, 2))
console.log(add('a', 'b'))

