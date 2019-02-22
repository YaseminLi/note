//1.没有块级作用域时
//内部变量覆盖外层
// var tem=new Date();
// function f(){
//     console.log(tem); 
//     if(true){
//         var tem='a';//变量提升
//     }
// }
// f();//undefined

//计数的循环变量泄露为全局
// var s='hello';
// for(var i=0;i<s.length;i++){
//     console.log(s[i]);
// }
// console.log(i);//5

//------------------------------------------------
//2.ES6块级作用域
// function f(){
//     let n=1;
//     if(true){
//         let n=2;
//     }
//     console.log(n); //1
// }f();

//----------------------------------------------
//3.块级作用域与函数声明
//块级作用域中声明函数类似于let,块级外不可引用
// function f(){console.log('outside');
// }
// (function(){
//     if(false){
//         function f(){
//             console.log('inside'); 
//         };
//     }f();//err
// }());
//等同于
// (function(){
//     var f=undefined;
//     if(false){
//         function f(){
//             console.log('inside'); 
//         };
//     }f();//err
// }());

//需要函数声明时，写成函数表达式形式
// {
//     let a='secret';
//     let f=function(){
//         console.log(a);
//     };
//     console.log(a);
//     f();
// }
{
    let a='secret';
    function f(){
        console.log(a);
    };
    console.log(a);
    f();
}