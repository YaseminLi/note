//第七种原始数据类型，表示独一无二的值，通过symbol函数生成
let s=Symbol();
console.log(typeof s);//symbol

//可接受参数，表示对实例的描述，便于区分
let s1=Symbol('foo');
let s2=Symbol('bar');
console.log(s1);//Symbol(foo)
console.log(s2);//Symbol(bar)

//symbol参数为对象时，传入前先调用对象的toString方法
const obj={
    toString(){
        return 'abc';
    }
}
let s3=Symbol(obj);
console.log(s3);//Symbol(abc)

//相同参数的symbol函数返回值也不同
let a1=Symbol('a');
let a2=Symbol('a');
console.log(a1===a2);//false


