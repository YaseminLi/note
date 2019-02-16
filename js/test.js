// // function ass(num) {
// //     if (num <= 1) {
// //         return 1;
// //     } else {
// //         return num * ass(num - 1);
// //     };
// // }
// // console.log(ass(4));
// // function factorial(n) {
// //     return !(n > 1) ? 1 : factorial(n - 1) * n;
// // }

// // [1, 2, 3, 4, 5].map(factorial);
// // var global = this;

// // var sillyFunction = function (recursed) {
// //     if (!recursed) { return arguments.callee(true); }
// //     if (this !== global) {
// //         console.log("This is: " + this);
// //     } else {
// //         console.log("This is the global");
// //     }
// // }

// // sillyFunction();

// function add() {
//     var result = new Array();
//     for (var i = 0; i < 5; i++) {
//         result[i] = (function (num) {
//             return num;
//         })(i);
//     }
//     console.log(result);
// };
// add();


// function funcMaker(num) {
//     return function () {
//         return num;
//     }
// }

// // funcMaker(1);
// // funcMaker(2);

// // 1
// var result = [];
// var i = 0;

// result[i] = function () {
//     return i;
// }


// result[i] = function (num) {
//     return function () {
//         return num;
//     }
// }(i);
// i++;

// result[i] = function (num) {
//     return function () {
//         return num;
//     }
// }(i);
// i++;

// result[i] = function (num) {
//     return function () {
//         return num;
//     }
// }(i);
// i++;
// result[i] = function (num) {
//     return function () {
//         return num;
//     }
// }(i);
// i++;


// console.log(result[0] === result[1]);

// console.log(function () {
//     return i;
// }());

// function demo(a) {
//     var i = 10;

//     a.out = function () {
//         return i;
//     }
// }

// var a = {};
// demo(a);
// a.out();
// a.out();
// function add(){
//     for(var i=0;i<5;i++){
//         console.log("add"+i);
//     }
//     var i=10;
//     console.log(i);
// }
// add();

// function add2(){
//     // for(var i=0;i<5;i++){
//     //     console.log("add"+i);
//     // }
//     var i=0;
//     console.log("add2"+i);
//     i++;
//     console.log("add2"+i);
//     i++;
//     var i=10;
//     console.log(i);
// }
// add2();
// function BaseComponent(){
//     this.name='xiaoming';
// };

// var application=function(){
//     var components=new Array();
//     components.push(new BaseComponent());

//     return{
//         getComponentCount:function(){
//             return components.length;
//         },
//         registerComponent:function(component){
//             if(typeof component=="object"){
//                 components.push(component);
//             }
//         }
//     };
// }();

// var person={
//     name:'xiaoming',
//     age:16,
//     hair:"long",
// };
// Object.defineProperty(person,"age",{value:24});
// console.log(person);

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.sayname=function(){console.log(this.name)};
// }
// Person('xiaoming',16);

// function sayname(){
//     console.log(this.name);
// }

// function Person(){
//     this.name='xiaoming';
//     this.age=16;
// }
// var person1=new Person();
// Person.prototype.sayHi=function(){
//     console.log('hi');
// }
// person1.sayHi();


// function SpecialArray(){
//     var values=new Array();
//     values.push(values,arguments);
//     values.toPipedString=function(){
//         return this.join('|');
//     }
//     return values;
// }
// var colors=new SpecialArray('red','blue','yellow');
// console.log(colors);


function SuperType(a){
    this.name=a;
};

function SubType(a){
this.color=a;
};

SubType.prototype=new SuperType();
var instance1=new SubType('xiaoming');
console.log(instance1);