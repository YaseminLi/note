//object key-value 
//键名/属性：age 字符串
//键值：3 任何数据类型
var obj = {
    age: 3,
    name: "xiaoming"
}

对象有两种读取成员的方法：点结构（object.key）和方括号结构（object[key]）

//属性值为函数
var a = {
    b: function (x) {
        return x * x;
    }
}
a.b(2);//4

//属性值为对象，链式引用
var a1 = {};
var a2 = { value: "hello" };
a1.foo = a2;
a1.foo.value;//"hello"

//为其中任何一个变量添加属性，另一个变量都可以读写该属性。
var o1 = {};
var o2 = o1;

o1.a = 1;
o2.a // 1

o2.b = 2;
o1.b // 2

//如果取消某一个变量对于原对象的引用，不会影响到另一个变量
var o1 = {};
var o2 = o1;

o1 = 1;
o2 // {}

//读取属性时，键名用数字会报错
    var obj = {
    123: 'hello world'
};

obj.123 // 报错
obj[123] // "hello world"

//属性删除，继承的属性无法删除  
var obj = { p: 1 };
Object.keys(obj) // ["p"]

delete obj.p // true
obj.p // undefined
Object.keys(obj) // []

//判断属性是否存在 in 
var obj={p:10};
"p" in obj;//true
"toString" in obj;//true 继承属性
if('toString' in obj)
{   console.log(obj.hasOwnProperty('toString'))};//false

//属性遍历,可以加入hasOwnProperty判断是否继承
var obj={
    a:1,
    b:2,
    c:3
}
for(var i in obj)
{console.log("键名："+i);
console.log("键值："+obj[i]);
}

//with
with(document.links[0])
{console.log(herf);
console.log(name);
}//等同于
with(document.links[0]){
    console.log(document.links[0].herf);
    console.log(document.links[0].name);
}


Object对象本身的方法
Object.print=function(o){console.log(o)};
Object实例的方法，即Object.prototype,可以被所有实例对象共享
Object.prototype.print=function(){
    console.log(this);
};
var obj=new Object();
obj.print();

obj instanceof Object//true用来验证，一个对象是否为指定的构造函数的实例

Object();转化为对象
判断一个变量是否为对象：
function isObj(value){
    return value===Object(value);
};
isObj([]);//true
isObj(true);//false

Object构造函数
var o1={p:1};
var o2=new Object(o1);
o1===o2;//true

var obj={p:1,
        a:2};
Object.keys(obj);/["p", "a"]
Object.getOwnPropertyNames(obj);//[ 'p', 'a' ]

var add=['red','yellow'];
Object.keys(add);//[ '0', '1' ]
Object.getOwnPropertyNames(add);//[ '0', '1', 'length' ],可返回不可枚举属性名

(function () {
    return 123;
  }).toString()
  // "function () {
  //   return 123;
  // }"

  Object.prototype.toString方法返回对象的类型字符串，因此可以用来判断一个值的类型。
  Object.prototype.toString.call(2) // "[object Number]"
Object.prototype.toString.call('') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(Math) // "[object Math]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call([]) // "[object Array]"

目前，主要有三个对象自定义了toLocaleString方法。
Array.prototype.toLocaleString()
Number.prototype.toLocaleString()
Date.prototype.toLocaleString()

举例来说，日期的实例对象的toString和toLocaleString返回值就不一样，而且toLocaleString的返回值跟用户设定的所在地域相关。

var date = new Date();
date.toString() // "Tue Jan 01 2018 12:01:33 GMT+0800 (CST)"
date.toLocaleString() // "1/01/2018, 12:01:33 PM"

var obj={p:1,
    a:2};
obj.hasOwnProperty('p');//true
obj.hasOwnProperty('ye');//false

var obj={p:1,
    a:2};
Object.getOwnPropertyDescriptor(obj,'p');//
{ value: 1, writable: true, enumerable: true, configurable: true }

var obj=Object.defineProperty({},'p',{
    value:123,
    configurable:false,
    enumerable:true,
    writable:false
});
obj.p;//123

var obj=Object.defineProperties({},{
    p1:{value:123,enumerable:true},
    p2:{value:234,enumerable:true}
});
obj.p1;//123
obj.p2;//234