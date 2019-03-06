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

//默认接口--------------------------------------------------------
//具备原生iterator接口,有symbol.iterator属性，不用处理直接用for..of
//Array
//Map
//Set
//String
//TypedArray??
//函数的 arguments 对象
//NodeList 对象??

//数组的symbol.iterator属性
let arr = [1, 2, 3];
let it1 = arr[Symbol.iterator]();
console.log(it1.next());//{ value: 1, done: false }

//对象上部署iterator接口，实现for...of 循环
class rangeIterator {
    constructor(start, stop) {
        this.value = start;
        this.stop = stop;
    }
    [Symbol.iterator]() {
        return this;
    }
    next() {
        var value = this.value;
        if (value < this.stop) {
            this.value++;
            return { value: value, done: false };
        }
        return { done: true };

    }
}

function range(start, stop) {
    return new rangeIterator(start, stop);
}

for (let value of range(0, 3)) {
    console.log(value);
}

