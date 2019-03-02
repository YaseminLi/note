//1.简介
//生成实例对象
//ES5构造函数
function People1(x,y){
    this.name=x;
    this.age=y;
}
var person1=new People1('xiaoming','16');
console.log(person1.name);//xiaoming
People1.prototype.paly=function(){
    console.log('watching movies');
};
person1.paly();

//ES6类的方法
class People2{
    constructor(x,y){
        this.name=x;
        this.age=y;
    }
    play(){
        console.log('swimming');
    }
};
var person2=new People2('xioahong','18');
console.log(person2);
person2.play();
console.log(typeof People2);//function

//一次性添加多个方法
Object.assign(People2.prototype,{
    play1(){
        console.log('play1');
    },
    play2(){
        console.log('play2');
    }
 } );
 person2.play1();

 //类内部定义的方法不可枚举,assign添加的方法可以枚举
 console.log(Object.keys(People2.prototype));//[ 'play1', 'play2' ]
console.log(Object.getOwnPropertyNames(People2.prototype));//[ 'constructor', 'play', 'play1', 'play2' ]

//2.construtor没有被定义时，会被默认添加
console.log(People2===People2.prototype.constructor);//true
//constructor可指定返回另外一个对象
class Foo{
    constructor(){
        return Object.create(null);
    }
}
console.log(new Foo() instanceof Foo);//false

//3.类的实例
var person3=new People2();
//hasOwnProperty() 实例属性(定义在this变量上)返回true，其他定义在原型（class）上

