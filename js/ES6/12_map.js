//map
//键值对的集合，键可以是任何数据类型的值

const m=new Map();
const o={
    p:'hello world'
};
m.set(o,'content');
console.log(m.get(o));//content
console.log(m.has(o));//true
console.log(m);//Map { { p: 'hello world' } => 'content' }
console.log(m.delete(o));

//map接受数组作为参数,数组成员为表示键值对的数组
//在新建map实例时，指定两个键
const m1=new  Map([
    ['name','xiaoming'],
    ['title','m1']
]);
console.log(m1.size);//2
console.log(m1.get('name'));//xiaoming
console.log(m1.has('title'));//true

//map接受数组实际执行的是下面的算法
const items=[
    ['name','xiaoming'],
    ['title','m2']
];
const m2=new Map();
items.forEach(([key,value])=>m2.set(key,value));
console.log(m2);//Map { 'name' => 'xiaoming', 'title' => 'm2' }

//参数可以是任何有iterator的、每个成员是双元素数组的结构
//map和set可以作为参数
const set=new Set([
    ['foo','1'],
    ['baz','2']
]);
const m3=new Map(set);
console.log(m3.get('foo'));//1

const m4=new Map([['dre','3']]);
const m5=new Map(m4);
console.log(m5.get('dre'));//3

//对键连续赋值，会被覆盖
m5.set('dre','4').set('dre','5');
console.log(m5.get('dre'));//5

//未知键，返回undefined
console.log(m5.get('foo'));//undefined

//对同一个对象引用，才为一个键，键与内存地址绑定
//键['a'],set和get的内存地址不一样

const m6=new Map();
m6.set(['a'],'555');
console.log(m6);//Map { [ 'a' ] => '555' }
console.log(m6.get(['a']));//undefined

const m7=new Map();
m7.set('a','555');
console.log(m7);//Map { 'a' => '555' }
console.log(m7.get('a'));

const m8=new Map();
const b=['b']
m8.set(b,'bbb');
console.log(m8);//Map { ['b' ] => 'bbb' }
console.log(m8.get(b));//bbb
console.log(m8.get(['b']));//undefined

//键名需严格相等
console.log(['aaa']===['aaa']);//false

//实例的属性和操作方法--------------------------------------------------
//size 成员总数
//set(key,value),设置键名和键值，返回整个map结构，可以采用链式写法
const m9=new Map().set('a','1').set('b','2');
console.log(m9);//Map { 'a' => '1', 'b' => '2' }

//get(key),读取键值，找不到key返回undefined
const fun=function () {
    console.log('fun');
};
const m10=new Map([[fun,'m10']]);
console.log(m10);//Map { [Function: fun] => 'm10' }
m10.get(fun());//fun

//has(key)
//返回布尔，判断键是否存在

//delete(key)
//返回布尔，是否删除成功

//clear()
//清除所有成员

//遍历方法----------------------------------------------------------
//keys()：返回键名的遍历器。
//values()：返回键值的遍历器。
//entries()：返回所有成员的遍历器。
//forEach()：遍历 Map 的所有成员。

const m11=new Map([
    ['t','yes'],
    ['f','no']
]);
for(let items of m11.keys()){
console.log(items);//t f
}
for(let items of m11.values()){
    console.log(items);//yes no
}
//m11.entries可默认使用m11
for(let items of m11.entries()){
    console.log(items);//[ 't', 'yes' ] ['f','no']
}

//用扩展运算符...转化为数组结构
var arr1=[...m11];
console.log(arr1);//[ [ 't', 'yes' ], [ 'f', 'no' ] ]
console.log([...m11.keys()]);//[ 't', 'f' ]

//map与其他数据结构的互相转换----------------------------------------------------
//数组-map将数组传入map构造函数;
const arr2=[['a','1'],['b','2']];
const m12=new Map(arr2);
console.log(m12);//Map { 'a' => '1', 'b' => '2' }

//map-数组 扩展运算符
const arr3=[...m12];
console.log(arr3);//[ [ 'a', '1' ], [ 'b', '2' ] ]

//map-对象
//非字符串的键名会被转化为字符串
function strmapobject(map) {
    let obj={};
    for(let [key,value] of map){
        obj[key]=value;
    }
    return obj;
}
var s=strmapobject(m12);
console.log(s);//{ a: '1', b: '2' }

//对象-map
function strobjectmap(object) {
    let map=new Map();
    for(let key of Object.keys(object)){
        map.set(key,object[key]);
    }
    return map;
}
var m13=strobjectmap(s);
console.log(m13);//Map { 'a' => '1', 'b' => '2' }






    











