//先读取函数声明
// console.log(sum(10,20));
// function sum(a,b) {
//     return a+b;
// }

//报错，表达式不会提升
// console.log(add(10,20));
// var add=function (a,b) {
//     return a+b;
// }

function factorial(num){
    if(num<=1){
        return 1;
    }else{
        return num*arguments.callee(num-1);
    }
}
console.log(factorial(5));


