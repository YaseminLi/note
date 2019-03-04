//generator函数
//状态机，封装多个状态
//遍历器对象生成函数，便利每个状态

//实例：*和yield(定义不同状态)
//三种状态：hello world return
//yield为函数执行的暂停标志
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
  }
  //函数调用，不立即执行，返回指向内部状态的指针对象
  var hw = helloWorldGenerator();

//访问每个状态，next(),
//value表示yield表达式的值
//done表示遍历有没有结束
// console.log(hw.next());//{ value: 'hello', done: false }
// console.log(hw.next());//{ value: 'world', done: false }
// console.log(hw.next());//{ value: 'ending', done: true }
// console.log(hw.next());//{ value: undefined, done: true }
//如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。


//yield表达式---------------------------------------------------------------------------------------
//yield被指向时，它后面的表达式才能执行
// function* gen(){
//     yield 1+2;
// }
// console.log(gen().next());//{ value: 3, done: false }

//没有yield时，表示一个暂缓函数
// function fun1(){
//     console.log('fun1');
// }
// var f1=fun1();//fun,立即执行

// function* fun2(){
//     console.log('fun2');
// }
// var f2=fun2();
// setTimeout(()=>f2.next(),3000)//三秒后打印出

//yield只能用在generator函数里
// var flat=function* (a){
// a.forEach(element => {
//     yield "表达式"
// });
// }//err,forEach的参数是一个普通函数

//yield用在另一个表达式中，必须放在圆括号里
// function* demo(){
// // console.log('hello'+yield 123);//err
// console.log('hello'+(yield 'demo'));
// }
// console.log(demo().next());

//用作函数参数或者放在表达式右边可以不加括号
// function* demo1() {
//     foo(yield 'a', yield 'b'); // OK
//     let input = yield; // OK
//   }

//与 Iterator 接口的关系 暂停