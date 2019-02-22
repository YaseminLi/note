//---------------------------------
//1.基本用法
//const声明一个只读的常量。一旦声明，常量的值就不能改变。
// const PI=3.14;
// PI=2;//TypeError: Assignment to constant variable.

//一旦声明，需立即初始化
// const arr;//SyntaxError: Missing initializer in const declaration

//块级作用域内有效
// if(true){
//     const arr=5
// };
// console.log(arr);//ReferenceError: arr is not defined

//不提升，暂时性死区,不可重复声明
// if(true){
//     console.log(arr);
//     const arr=2;//ReferenceError: arr is not defined
// }

//---------------------------------------------
//2.本质
//变量指向的内存地址所保存的数据不得改，简单类型-值，复合类型：函数、对象-指针
// const foo={};
// foo.name='xiaoming';
// foo.age=16;
// console.log(foo);//ok对象本身可变 

// foo={};//TypeError: Assignment to constant variable.不能改变指针的指向

//对象冻结
const foo=Object.freeze({});
foo.age=11;//常规模式下不起作用
console.log(foo);

//对象彻底冻结
var freezeObj=(obj)=>{
    Object.freeze(obj);
    Object.keys(obj).forEach((key,i)=>{
        if(typeof obj[key]==='object'){
            freezeObj(obj[key]);
        }
    });
};
