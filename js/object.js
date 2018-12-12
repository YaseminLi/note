//object key-value 
//键名/属性：age 字符串
//键值：3 任何数据类型
var obj = {
    age: 3,
    name: "xiaoming"
}

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
a
b
c