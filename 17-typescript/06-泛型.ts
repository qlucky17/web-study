// 泛型<>：指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。
// 使用函数泛型
function createArray<T>(value: T, count: number) {
  const arr: Array<T> = [];
  for(let i=0; i<count; i++){
    arr.push(value)
  }
  return arr;
}
console.log(createArray('a', 5))
console.log(createArray(10, 5))

// 多个泛型参数的函数
function swap<K,V>(a: K, b: V): [K, V]{
  return [a, b];
}
const r1 = swap<string, number>('a', 10)
const r2 = swap('a', 10)
console.log(r1, r2)



// 泛型接口
interface InterA<T>{
  data: T[],
  add: (t: T) => void,
  getById: (id: number) => T | null
}
class User{
  id?: number
  name: string
  age: number
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}
class UserCrub implements InterA<User>{
  data: User[] = []
  add(user: User): void {
    user = {...user, id: Date.now()}
    this.data.push(user)
  }
  getById(id: number): User|null {
    // return this.data.find(item => item.id===id)
    let item = this.data.find(item => item.id===id);
    return item ? item : null
  }
}
const user = new UserCrub()
user.add(new User('tom', 10))
user.add(new User('tom2', 20))
console.log(user.data)



// 泛型类
class GenericNumber<T> {
  value: T
  constructor(value: T){
    this.value = value
  }
  add(x: T, y: T): T | null{
    return x ? x : y
  }
}

let myGenericNumber = new GenericNumber<number>(0)
console.log(myGenericNumber.add(0, 10))

let myGenericString = new GenericNumber<string>('abc')
console.log(myGenericString.add('abc', 'ABC'))

// 泛型约束
interface Lengthwise{
  length: number
}
function fnn<T extends Lengthwise>(x: T): void{
  console.log(x.length)
}
fnn('abc')

type DataType<T> = {
  id: number,
  data: Array<T>
}