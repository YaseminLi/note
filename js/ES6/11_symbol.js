//1.概述--------------------------------------------
// //第七种原始数据类型，表示独一无二的值，通过symbol函数生成
// let s=Symbol();
// console.log(typeof s);//symbol

// //可接受参数，表示对实例的描述，便于区分
// let s1=Symbol('foo');
// let s2=Symbol('bar');
// console.log(s1);//Symbol(foo)
// console.log(s2);//Symbol(bar)

//symbol参数为对象时，传入前先调用对象的toString方法
// const obj={
//     toString(){
//         return 'abc';
//     }
// }
// let s3=Symbol(obj);
// console.log(s3);//Symbol(abc)


//相同参数的symbol函数返回值也不同
// let a1=Symbol('a');
// let a2=Symbol('a');
// console.log(a1===a2);//false


//不能运算
// let q1=Symbol('world');
// 'hello'+q1;//err

//可以显示转化为字符串
// let q1=Symbol('world');
// console.log(q1.toString());//Symbol(world)
// console.log(String(q1));//Symbol(world)

//可以转化为布尔值
// let q2=Symbol('world');
// console.log(Boolean(q2));//true
// if(q2){}//ok
// !q2//ok

//不能转化为数值
// let q3=Symbol('world');
// console.log(Number(q3));//TypeError: Cannot convert a Symbol value to a number

//3.作为属性名的symbol,非私有属性----------------------------------------------------------------------------
let mySymbol=Symbol();
//方法一
let a1={};
a1[mySymbol]='hello1';
console.log(a1[mySymbol]);//hello1
//方法二
let a2={
    [mySymbol]:'hello2'
}
console.log(a2[mySymbol]);//hello2
//方法三
let a3={};
Object.defineProperty(a3,mySymbol,{value:'hello3'});
console.log(a3[mySymbol]);////hello3

//symbol作为属性名时，不可以用点运算符
let symbol=Symbol();
const a={};
a.symbol='hello';//点后面是字符串而不是symbol
console.log(a[symbol]);//undefined
console.log(a['symbol']);//hello

//对象内部用symbol定义属性时，symbol值要放在方括号中
let aa=Symbol();
const obj={
    [aa]:function () {
        console.log('aa');
    }
}
obj[aa]();//aa

//可以定义一组常量
const log = {};

log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
};
console.log(log.levels.DEBUG, 'debug message');//Symbol(debug) 'debug message'
console.log(log.levels.INFO, 'info message');//Symbol(info) 'info message'