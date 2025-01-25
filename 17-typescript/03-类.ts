// 访问修饰符：public、private、protected、readonly、static
// public: 默认值
// private: 只能在类内部访问
// protected: 类内部和子类可以访问
class Animal{
  public m1: string = 'm1'
  private m2: string
  protected m3: string
  readonly m4: string = 'm4'
  static m5 = 'm5'
  constructor(private n1 = 'n1'){
    // private n1='n1',等同于private m2并初始化的操作
    this.m2 = 'm2'
    this.m3 = 'm3'
  }
  // m2只能在自己的类里面使用，可以通过get,set对外暴露，相当于computed和getters
  get _m2(){
    return this.m2;
  }
  set _m2(val){
    this.m2 = val;
  }
}

class People extends Animal{
  constructor(){
    super();
    console.log('People类可访问：', this.m1, this.m3, this.m4)
  }
}

const animal = new Animal()
console.log('animal实例可访问: ', animal.m1, animal.m4, animal._m2, Animal.m5)

const people = new People();
console.log('people实例可访问：', people.m1, people.m4)