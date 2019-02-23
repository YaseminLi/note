//查找等号右边的属性名，与左边变量同名的，获取值，次序无关
// let {foo,bar}={foo:'a',bar:'b'};
// console.log(foo,bar);//a,b

//变量名和属性名不一致时
//方法一.
// let {foo:baz}={foo:'a',bar:'b'};
// console.log(baz);//a
// //方法二
// let obj={foo:'a',bar:'b'};
// let {foo:f,bar:b}=obj;
// console.log(f,b);//a,b

//foo是匹配模式，baz才是变量被赋值的
// let { foo: baz } = { foo: "aaa", bar: "bbb" };
// console.log(foo);//foo is not defined
// console.log(baz);//aaa

//嵌套结构对象的解构
//p为匹配模式
// let obj={
//     p:['hello',{y:'world'}]
// };
// let {p:[x,{y}]}=obj;
// console.log(x,y);//hello,world,
//p作为变量赋值
// let obj={
//     p:['hello',{y:'world'}]
// };

// let {p,p:[x,{y}]}=obj;
// console.log(p,x,y);//[ 'hello', { y: 'world' } ] 'hello' 'world'

//最后一次对line属性的解构赋值之中，只有line是变量，loc和start都是模式，不是变量。 
// let node={
//     loc:{
//         start:{
//             line:1,
//             column:5
//         }
//     }
// };
// let {loc,loc:{start},loc:{start:{line}}}=node;
// console.log(line);//1
// console.log(loc);//{ start: { line: 1, column: 5 } }
// console.log(start);//{ line: 1, column: 5 }

// let obj={};
// let arr=[];
// ({foo:obj.prop,bar:arr[0]}={foo:123,bar:true});
// console.log(obj);//{ prop: 123 }
// console.log(arr);//[ true ]

//---------------------------------------
//对象解构指定默认值,对象的属性值要严格等于udefined
// var {x,y=5}={x:1}
// console.log(x,y);1,5

// var {x:y=3}={x:5};
// console.log(y);//5

// let {x=5}={x:null};
// console.log(x);

//解构失败，变量的值等于undefined
// let {foo} = {bar: 'baz'};
// console.log(foo);//undefined

//嵌套对象时，子对象所在的父属性不存在，会报错
// let {foo:{bar}}={bar:'baz'};
// console.log(bar);//err

// let x;
// ({x}={x:1});//加（），避免将{x}解析成代码块

//将现有对象的方法，赋值到某个变量。
// let {log,sin,cos}=Math;

//用到数组上
let arr=[1,2,3];
let {0:first,[arr.length-1]:last}=arr;
console.log(first,last);//1,3












