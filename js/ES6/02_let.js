//1.let 代码块内有效
// {
//     var a=1;
//     let b=2;
// }
// console.log(a);// a
// console.log(b);// b is not defined

// for(let i=0;i<5;i++){
//     var sum=0;
//     sum+=i;
//     console.log(sum);
// }
// console.log(i);//i is not defined

// var a=[];
// for(var i=0;i<10;i++){
// a[i]=function () {
//     console.log(i);
// };
// }
// console.log(a[6]());//10,i为全局变量，for跑完后i为10，因此函数调用时打印全局i=10

// var a=[];
// for(let i=0;i<10;i++){
// a[i]=function () {
//     console.log(i);
// };
// }
// console.log(a[6]());//6

// for(let i=0;i<3;i++){
// let i='abc';
// console.log(i);//循环变量部分为父级作用域，内部为子作用域
// }

//----------------------------------------------
//2.let无变量提升
// console.log(a);
// var a='a';//undefined

// console.log(b);
// let b='b';//ReferenceError: b is not defined

//--------------------------------------------
//3.暂时性死区-块级作用域内声明let,封闭作用域，不受域外部影响,同const
// var tem=123;
// if(true){
//     tem=456;//ReferenceError: tem is not defined
//     let tem;
// }
//let声明前都是死区，用到即会报错

// typeof tea;//ReferenceError: tea is not defined
// let tea;

// function bar(x=y,y=2){//ReferenceError: y is not defined
//     return [x,y];
// }
// bar();

//---------------------------------------
//4.不能重复声明
// function func1(){
//     let a=1;
//     var a=2;//yntaxError: Identifier 'a' has already been declared
// }
// func1();

// function func2(){
//     let a=1;
//     let a=2;//SyntaxError: Identifier 'a' has already been declared
// }
// func2();

// function func3(arg){
//     let arg=1;//SyntaxError: Identifier 'arg' has already been declared
// }
// func3();

function func4(arg){
    {
        let arg=1;
    }
}
func4();