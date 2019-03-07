//generator函数
//状态机，封装多个状态
//遍历器对象生成函数，便利每个状态

//实例：*和yield(定义不同状态)
//三种状态：hello world return
//yield为函数执行的暂停标志
// function* helloWorldGenerator() {
//   yield 'hello';
//   yield 'world';
//   return 'ending';
// }
//函数调用，不立即执行，返回指向内部状态的指针对象
// var hw = helloWorldGenerator();

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

//与 Iterator 接口的关系 
//generator为遍历器生成函数，赋值给对象的[symbol.iterator]属性，可遍历
// var myIterator = {};
// myIterator[Symbol.iterator] = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// console.log(...myIterator);//1,2,3

// function* gen() {
//   // some code
// }
// var g = gen();//生成遍历器对象g
// g[Symbol.iterator]() === g//si属性也是遍历器生成函数，返回它自己

//2.next()方法的参数-----------------------------------------------
//next()方法可以带参数，被当作上一个yield表达式的返回值
function* gen() {
  for (var i = 0; true; i++) {
    var reset = yield i;
    if (reset) { i = -1; }
  }
};//无限运行的函数
var g=gen();
console.log(g.next());//{ value: 0, done: false }
console.log(g.next());//{ value: 1, done: false }
console.log(g.next(true));//{ value: 0, done: false }//变量reset被重置为true,i=-1,下轮循环从-1开始
console.log(g.next(false));//{ value: 1, done: false }
//在next中传递参数，可以在任何阶段传入参数后调整函数行为

function* foo(x){
  var y=2*(yield x+1);
  var z=yield(y/3);
  return x+y+z;
}
var a=foo(5);
console.log(a.next());//{ value: 6, done: false }
console.log(a.next());//{ value: NaN, done: false },var y=没有运行，拿不到y的值
console.log(a.next());//{ value: NaN, done: true }

var b=foo(5);
console.log(b.next());//{ value: 6, done: false }
console.log(b.next(3));//{ value: 2, done: false },将上一次yield值设为3，y=2*3=6 此次返回y/3=2
console.log(b.next(1));//{ value: 12, done: true }

//将每次的next参数的输入值打印出来
function* data(){
  console.log('start');
  console.log(`1.${yield}`);
  console.log(`2.${yield}`);
  return 'result';
}
var da=data();
da.next();//start
da.next('a');//1.a
da.next('b');//1.b

//3.for...of 循环，自动遍历generator函数
function* foo(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}
for(let x of foo()){
  console.log(x);//1,2,3,4,5
  //done属性为true时，循环终止，所以不含6
}
//斐波那契数列
function* fibonacci(){
  let [prev,cur]=[0,1];
  for(;;){
    yield cur;
    [prev,cur]=[cur,prev+cur]
  }s
};
for(let n of fibonacci()){
  if(n>8)break;
  console.log(n);//1,1,2,3,5,8
}

//对象没有遍历器接口，可通过generator函数或者symbol.itertator
//通过generator函数加接口
function* fun(object){
  let obj=Reflect.ownKeys(object);
  for(let key of obj){
    yield [key,object[key]];
  }
}
let arr={'first':'red','second':'green'};
for(let [key,value] of fun(arr)){
  console.log([key,value]);//[ 'first', 'red' ],[ 'second', 'green' ]
}
//将generator加到数组的symbol.iterator属性上
function* funny(){
  let obj=Reflect.ownKeys(this);
  for(let key of obj){
    yield [key,this[key]];
  }
}
let pro={'first':1,'second':2};
pro[Symbol.iterator]=funny;
for(let [key,value] of pro){
  console.log([key,value]);//[ 'first', 1 ],[ 'second', 2 ]
}

//for ..of  、扩展运算符、array.from、解构赋值都可以将generator函数返回的iterator作为参数
function* numbers () {
  yield 1
  yield 2
  return 3  
  yield 4
}
console.log([...numbers()]);//[ 1, 2 ]到return就停止遍历
console.log(Array.from(numbers()));[ 1, 2 ]
let [x,y]=numbers();
console.log([x,y]);//[ 1, 2 ] 
for(let a of numbers()){
  console.log(a);//1,2
}


//4.generator.prototype.throw()
//Generator 函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。
function* gen1(){
  try{
    yield;
  }catch(e){
    console.log('内部捕获',e);
  }
}
var i=gen1();
i.next();
try{
  i.throw('a');//进入到函数内部捕获
  i.throw('b');//函数体内catch已经执行过了，外部捕获
}catch(e){
  console.log('外部捕获',e);
}
//内部捕获 a
//外部捕获 b

function* gen2(){
  try{
    yield;
  }catch(e){
    console.log(e);
  }
};
var i2=gen2();
i2.next();
i2.throw(new Error('出错了'));//抛出error对象的实例
//Error: 出错了

//全局的throw命令，只能被外部catch捕获
try{
  throw new Error('a');
  throw new Error('b');
}catch(e){
  console.log(e);
}
//a,,,函数体外的catch，捕获一个错误后就不会再继续try里剩余代码了

//如果 Generator 函数内部没有部署try...catch代码块，那么throw方法抛出的错误，将被外部try...catch代码块捕获。
//如果 Generator 函数内部和外部，都没有部署try...catch代码块，那么程序将报错，直接中断执行。
//throw方法抛出的错误要被内部捕获，前提是必须至少执行过一次next方法。执行过一次NEXT,generator内部代码才能启动，否则被外部捕获