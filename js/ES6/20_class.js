//1.简介
//生成实例对象
//ES5构造函数
function People1(x, y) {
    this.name = x;
    this.age = y;
}
var person1 = new People1('xiaoming', '16');
console.log(person1.name);//xiaoming
People1.prototype.paly = function () {
    console.log('watching movies');
};
person1.paly();

//ES6类的方法
class People2 {
    constructor(x, y) {
        this.name = x;
        this.age = y;
    }
    play() {
        console.log('swimming');
    }
};
var person2 = new People2('xioahong', '18');
console.log(person2);
person2.play();
console.log(typeof People2);//function

//一次性添加多个方法
Object.assign(People2.prototype, {
    play1() {
        console.log('play1');
    },
    play2() {
        console.log('play2');
    }
});
person2.play1();

//类内部定义的方法不可枚举,assign添加的方法可以枚举
console.log(Object.keys(People2.prototype));//[ 'play1', 'play2' ]
console.log(Object.getOwnPropertyNames(People2.prototype));//[ 'constructor', 'play', 'play1', 'play2' ]

//construtor没有被定义时，会被默认添加
console.log(People2 === People2.prototype.constructor);//true
//constructor可指定返回另外一个对象
class Foo {
    constructor() {
        return Object.create(null);
    }
}
console.log(new Foo() instanceof Foo);//false

//类的实例
var person3 = new People2();
//hasOwnProperty() 实例属性(定义在this变量上)返回true，其他定义在原型（class）上
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        console.log('(' + this.x + ',' + this.y + ')');
    }
}
var point = new Point(1, 2);
point.toString();//(1,2)
console.log(point.hasOwnProperty('x'));//true
console.log(point.hasOwnProperty('toString'));//false
console.log(point.__proto__.hasOwnProperty('toString'));//true

//所有实例共享一个原型对象
var p1 = new Point(2, 3);
var p2 = new Point(3, 4);
p1.__proto__.printname = function () {
    console.log('printname');
};
p1.printname();
p2.printname();

//getter和setter
class Myclass {
    constructor() {

    }
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter' + value);
    }
}//prop属性
let inst = new Myclass();
inst.prop = 123;//setter123;
console.log(inst.prop);

//setter和getter设置在属性描述符上
class CustomHtmlElement {
    constructor(element) {
        this.element = element;
    }
    get html() {
        return this.element.innerHTML;
    }
    set html(value) {
        this.element.innerHTML = value;
    }
}
var descriptor = Object.getOwnPropertyDescriptor(CustomHtmlElement.prototype, 'html');
console.log('set' in descriptor);//true

//属性表达式
//类的属性名，可以采用表达式
let methodName = 'getArea';
class Square {
    constructor(length) {

    }
    [methodName]() {

    }
}

//class表达式
//类的名字是Me,但只在类内部可用，外部要用Myname,Me也可省略
const Myname=class Me{
    getCllassName(){
        console.log(Me.name); 
    }
};
let name1=new Myname();
name1.getCllassName();//Me
// Me.name();//Me is not defined
// Me.getCllassName();//Me is not defined

//立即执行的class
let person=new class {
    constructor(name){
        this.name=name;
    }
    sayname(){
        console.log(this.name);
    }
}('xiaoming');
person.sayname();//xiaoming

//没有变量提升
// new Foo();//err
// Class Foo{};

//继承
// class ChildClass extends ParentClass{};

//name属性,总是返回紧跟在class关键字后面的类名
// Class Point{};
// Point.name;//point

//generator方法

//this的指向
//类内部this默认指向类实例
// class Logger{
//     printname(name='loggername'){
//         this.print(name); 
//     }
//     print(text){
//         console.log(text);
//     }
// }
// const log=new Logger('loggerxiaoming');
// const {printname}=log;
// printname();//指向方法运行时的环境undefined

//bind绑定this
// class Logger{
//     constructor(){
//         this.printname=this.printname.bind(this);
//     }
//     printname(name='loggername'){
//         this.print(name); 
//     }
//     print(text){
//         console.log(text);
//     }
// }
// const log=new Logger('loggerxiaoming');
// const {printname}=log;
// printname();//loggername

//静态方法暂停