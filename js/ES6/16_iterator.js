//array/object/map/set
//提供接口
//让成员按照某种次序排列
//供for..of 消费

//指针对象，从开始位置，调用next()访问下面成员至结束
//返回结果
//value：当前成员的值
//done:是否遍历结束
// { value: "a", done: false }

//遍历器生成函数
//done:false 和 value:undefined 属性可以省略
// function makeiterator(arr) {
//     var nextIndex = 0;
//     return {
//         next: function(){
//         return nextIndex < arr.length ?
//             { value: arr[nextIndex++], done: false } :
//             { value: undefined, done: true };
//         }
//     }
// }
// var it=makeiterator([1, 2]);
// console.log(it.next());//{value:1,done:false}

//有symbol.iterator属性，就存在接口，可遍历

//2.默认接口--------------------------------------------------------
//具备原生iterator接口,有symbol.iterator属性，不用处理直接用for..of
//Array
//Map
//Set
//String
//TypedArray??
//函数的 arguments 对象
//NodeList 对象??

//数组的symbol.iterator属性
// let arr = [1, 2, 3];
// let it1 = arr[Symbol.iterator]();
// console.log(it1.next());//{ value: 1, done: false }

//对象上部署iterator接口，实现for...of 循环
//example one
// class rangeIterator {//class没有变量提升
//     constructor(start, stop) {
//         this.value = start;
//         this.stop = stop;
//     }
//     [Symbol.iterator]() {
//         return this;//返回遍历器对象
//     }
//     next() {
//         var value = this.value;
//         if (value < this.stop) {
//             this.value++;
//             return { value: value, done: false };
//         }
//         return { done: true };

//     }
// };
// function range(start, stop) {
//     return new rangeIterator(start, stop);
// };

// for (let value of range(0, 3)) {
//     console.log(value);
// };

//example two
let obj = {
    data: ['one', 'two'],
    [Symbol.iterator]() {
        const self = this;//继承this
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {//不用self继承，直接用this,this指向{next(){}}
                    return { value: self.data[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        }

    }
};
for (let value of obj) {
    console.log(value);
};

//类似数组的对象，可直接调用数组的symbol.iterator方法
//属性名必须为数字，代表数组中的索引，其他属性名称不可以
let arr1 = {
    0: 'a',
    1: 'b',
    3: 'c',
    length: 4,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of arr1) {
    console.log(item);//a,b,undefine，c
};

//Symbol.iterator方法对应的不是遍历器生成函数（即会返回一个遍历器对象），解释引擎将会报错。

//有遍历器接口时也可使用while循环
// var iterator=Iteraor[Symbol.iterator]();//返回遍历器对象
// var result=iterator.next();//访问第一个对象
// while(!result.done){//遍历没有结束时
//     var x=result.value;
//     //...
//     result=iterator.next();//访问下一步
// }

//3.调用接口的场合
//a.解构赋值
let set = new Set('a').add('b').add('c');
let [x, y] = set;
console.log([x, y]);//[ 'a', 'b' ]
let [first, ...rest] = set;
console.log([first, ...rest]);['a', 'b', 'c'];

//b.扩展运算符
var str = 'hello';
console.log(...str);//h e l l o

//c.yield*
//后面跟的是一个可遍历结构，可调用该结构的遍历器接口
let generator = function* () {
    yield 1;
    yield* [2, 3, 4];
    yield 5;
};
let iterator = generator();
console.log(iterator.next());//{ value: 1, done: false }
console.log(iterator.next());//{ value: 2, done: false }
console.log(iterator.next());//{ value: 3, done: false }
console.log(iterator.next());//{ value: 4, done: false }
console.log(iterator.next());//{ value: 5, done: false }
console.log(iterator.next());//{ value: undefined, done: true }

//4.字符串的iterator接口
var string = 'hi';
console.log(typeof string[Symbol.iterator]);//function
var striterator = string[Symbol.iterator]();
console.log(striterator.next());//{ value: 'h', done: false }
console.log(striterator.next());//{ value: 'i', done: false }
console.log(striterator.next());//{ value: undefined, done: true }

//5.接口与generator函数
let myiterator = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};
console.log([...myiterator]);//[ 1, 2, 3 ]

let obj1 = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
    }
}
for (let item of obj1) {
    console.log(item);//1,2

}

//6.遍历器对象的return(),throw()方法，可选
//return（） for..of循环因报错、需要清理或释放资源，提前退出、通常是因为出错，或者有break语句）

// function readLinesSync(file) {
//     return {
//       [Symbol.iterator]() {
//         return {
//           next() {
//             return { done: false };
//           },
//           return() {
//             file.close();
//             return { done: true };
//           }
//         };
//       },
//     };
//   }
//   // 情况一
//   //输出文件的第一行以后，就会执行return方法，关闭这个文件
// for (let line of readLinesSync(fileName)) {
//     console.log(line);
//     break;
//   }

//   // 情况二
//   //在执行return方法关闭文件之后，再抛出错误
//   for (let line of readLinesSync(fileName)) {
//     console.log(line);
//     throw new Error();
//   }

//7.for...of循环
//数组
var arr2 = ['red', 'yello'];
var obj2 = {};
obj[Symbol.iterator] = arr2[Symbol.iterator].bind(arr2);
for (let item of obj) {
    console.log(item);//red yello
}
//可以代替数组的foreach方法
arr2.forEach((element, index) => console.log(index + '+' + element));//0+red 1+yello
//for in  获取键名
for (let a in arr2) {
    console.log(a);//0,1
}
//for of 获取键值,索引必须是数字
for (let a of arr2) {
    console.log(a);//red,yello

}


//set 和 map结构
//遍历顺序按照被添加进的顺序
var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (let a of engines) {
    console.log(a);  //返回值，Gecko,Trident, Webkit
};
var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for(let a of es6){
    console.log(a); //返回键名和键值组成的数组[ 'edition', 6 ],[ 'committee', 'TC39' ],[ 'standard', 'ECMA-262' ]
}
for(let [key,value] of es6){
    console.log(key+':'+value);//edition:6,committee:TC39,standard:ECMA-262
};

//类似数组的对象
//string
//DOM Nodelist
// let paras=document.querySelectorAll('p');
// for(let a of paras){
//     p.classList.add("test");
// }
//arguments对象
function printArgs(){
    for(let x of arguments){
        console.log(x);  
    }
}
printArgs('a','b');//a,b

//将类数组对象转化为数组
let arr3={0:'a',1:'b',length:2};
// for(let x of arr3){
//     console.log(x);//err
// }
let arr4=Array.from(arr3);//转化为数组
for(let x of arr4){
    console.log(x);//a,b
}

//对于普通对象，for in 可直接循环键名
let es= {
    edition: 6,
    committee: "TC39",
    standard: "ECMA-262"
  };
  for(let x in es){
      console.log(x);//edition,committee,standard
  }
//   for(let x of es){
//     console.log(x);//err,没有接口
// }
//使用Object.keys(),生成键名的数组
for(let x of Object.keys(es)){
    console.log(x+':'+es[x]);
    //edition:6
    //committee:TC39
    //standard:ECMA-262
}
//用generator函数包装一下
function* entries(obj){
    for(let key of Object.keys(obj)){
        yield [key,obj[key]];
    }
}
for(let [key,value] of entries(es)){
    console.log(key+'=>'+value);
    //edition=>6
    //committee=>TC39
    //standard=>ECMA-262
}