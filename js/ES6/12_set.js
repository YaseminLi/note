//基本用法---------------------------------------------------------------------
//类似数组，成员值是唯一的
//本身为构造函数，生成set数据结构
// const s=new Set();
// [1,2,2,3,4,1].forEach(x=>s.add(x));
// console.log(s);//Set { 1, 2, 3, 4 }

//接受的参数
// //a.可以接受一个数组作为参数，用来初始化
// const s1=new Set([2,2,3,3]);
// console.log([...s1]);//[ 2, 3 ]
// console.log(s1.size);//2,size为set的成员总数
// //b.接受具有 iterable 接口的其他数据结构
// // const s2=new Set(document.querySelectorAll('div'));
// // s2.size;//56
// //类似于
// // const s2=new Set();
// // document.querySelectorAll('div').forEach(item=>s2.add(item));
// // s2.size;//56

//加入值时不会发生类型转换
//空对象和空数组不相等
// const s5=new Set([5,'5',{},{},[],[]]);
// console.log(s5);//Set { 5, '5', {}, {}, [], [] }

//set实例的属性和方法-----------------------------------------------------
//属性
//Set.prototype.constructor：构造函数，默认就是Set函数。
//Set.prototype.size：返回Set实例的成员总数。

//方法
//add(value)：添加某个值，返回 Set 结构本身。
//delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
//has(value)：返回一个布尔值，表示该值是否为Set的成员。
//clear()：清除所有成员，没有返回值。
// const s6=new Set([1]);
// console.log(s6.add(2));//set{1,2}
// console.log(s6.delete(2));//true
// console.log(s6.has(1));//true
// s6.clear();
// console.log(s6);//Set {}
// //转化为数组
// const s7=new Set([1,2,3,3,2]);
// const s8=Array.from(s7);
// console.log(s8);//[ 1, 2, 3 ]

//遍历，顺序按照添加顺序,键名和键值相同-------------------------------------------------------
//keys()：返回键名的遍历器
//values()：返回键值的遍历器
//entries()：返回键值对的遍历器
//forEach()：使用回调函数遍历每个成员
// const s9=new Set(['red','yello','green']);
// for(let item of s9.keys()){
//     console.log(item);//red yello green
// }
// for(let item of s9.values()){
//     console.log(item);//red yello green
// }
// for(let item of s9.entries()){
//     console.log(item);//[ 'red', 'red' ],[ 'yello', 'yello' ],[ 'green', 'green' ]
// }
// //set实例默认可遍历
// for(let item of s9){
//     console.log(item);//red yello green
// }
// //forEach()
// s9.forEach((value,key)=>{
//     console.log(key+':'+value);//red:red yello:yello green:green
// });

//遍历的运用--------------------------------------------------------
//扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构
const s10=new Set([1,2,2,3]);
console.log(s10);//Set { 1, 2, 3 }
const arr=[...s10];
console.log(arr);//[ 1, 2, 3 ]

//使用map和filter方法
const s11=new Set([1,2,3]);
const arr1=new Set([...s11].map(x=>x*2));
console.log(arr1);//Set { 2, 4, 6 }
const arr2=new Set([...s11].filter(x=>x>2));
console.log(arr2);//Set { 3 }

//实现并集、交集和差集
const s12=new Set([1,2,3]);
const s13=new Set([2,3,4]);
const union=new Set([...s12,...s13]);
const intersect=new Set([...s12].filter(x=>s13.has(x)));
const difference=new Set([...s12].filter(x=>!s13.has(x)));
console.log(union);//Set { 1, 2, 3, 4 }
console.log(intersect);//Set { 2, 3 }
console.log(difference);//Set { 1 }




//运用-----------------------------------------------
//1.去除数组中的重复成员
// const s3=new Set([2,2,3,3]);
// console.log([...s3]);//[ 2, 3 ]
// const s4=new Set('halllaa');
// console.log([...s4].join(''));//hal

