//与map结构类似
//键名必须为对象
const m1=new WeakMap();
const key={foo:1};
m1.set(key,1);
console.log(m1.get(key));//1

//不计入垃圾回收机制
//对象引用手动删除
//arr对e1,e2存在引用
// const e1=document.getElementById('foo');
// const e2=document.getElementById('baz');
// const arr=[
//     [e1,'foo'],
//     [e2,'baz']
// ];
// //不需要引用时需手动删除
// arr[0]=null;
// arr[1]=null;

//weakmap使用时，对象的其他引用消失时，weakmap中的键值对也会消失

//弱引用的只是键名，不是键值 
let m2=new Map();
let key2={baz:2};
let value2={foo:1};
m2.set(key2,value2);
//key2={};
value2={};
console.log(m2.get(key2));//{ foo: 1 }

//WeakMap的方法
//get()、set()、has()、delete()。
//const wm = new WeakMap();
// size、forEach、clear 方法都不存在,垃圾回收机制
//wm.size // undefined
//wm.forEach // undefined
//wm.clear // undefined

//weakmap用途
//dom节点

