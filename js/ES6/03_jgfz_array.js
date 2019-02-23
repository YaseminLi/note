//1.基本用法
//ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
//模式匹配
// let [a,b,c]=[1,2,3];
// console.log(a,b,c);//1,2,3

// let [d,[e,f]]=[1,[2,3]];
// console.log(d,e,f);//1,2,3

// let [x,y,z]=[1,2];
// console.log(x,y,z);// 1 2 undefined

// let [head,...tail]=[1,2,3,4];//...扩展运算符，数组类数组对象展开成一系列用逗号隔开的值
// console.log(head,tail);//1,[2,3,4]

// let[g,h,...i]=[1];
// console.log(g,h,i);//1,undefined,[]

//解构不成功
// let [j,k]=[1];//1,undefined
// let [l]=[];//undefined
// console.log(j,k,l);

//解构成功，但属于不完全解构
// let [m,[n],o]=[1,[2,4],3];
// console.log(m,n,o);//1,2,3/

//等号右边不是可遍历结构时，报错
//generator iterator?

//默认值,当数组成员严格等于===undefined，默认值才会生效
// let [foo=true]=[];
// console.log(foo);//true

// let [x,y='b']=['a'];
// console.log(x,y);//'a','b'

// let [x,y='b']=['a',undefined]
// console.log(x,y);//'a','b'

// let [x=1]=[undefined];
// let [y=1]=[null];
// console.log(x,y);//1,null

//默认值为表达式,惰性求值
// function f(){
//     console.log('a');
// }
// let [x=f()]=[1];
// console.log(x);//1
//等价于
let x;
if([1][0]===undefined){
    x=f();
}else{
    x=[1][0];
}







