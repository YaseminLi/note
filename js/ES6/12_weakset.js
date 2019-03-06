//与set结构类似
//成员只能是对象
//weakset中的对象都是弱引用，垃圾回收机制不考虑它，外部对象消失后，weakset的引用也消失
//适合临时存放对象

//传入的参数，数组或类数组，需有iterable接口，数组的成员成为weakset实例对象的成员，必须是对象
// const weak=new WeakSet();

// const a=[[1,2],[3,4]];
// const weak1=new WeakSet(a);
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
console.log(ws);
console.log(new WeakSet([{},[],()=>({1:1})]));

//方法
//WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
//WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
//WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。
const weak=new WeakSet();
const obj={};
const qa={};
weak.add(obj);
console.log(weak);
console.log(weak.has(obj));//true

