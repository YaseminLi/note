//交换变量的值
let x=2;
let y=1;
[x,y]=[y,x];
console.log(x,y);//1,2

//从函数返回多个值
//数组
function add(){
    return [1,2,3];
}
let [a,b,c]=add();
console.log([a,b,c]);//[1,2,3]
//对象
function wss(){
    return {
        foo:1,
        age:2
    };
}
let {foo,age}=wss();
console.log({foo,age});//{ foo: 1, age: 2 }

//函数参数的定义，将参数与变量名对应起来
//有次序
function a1([x,y,z]){
    console.log('a:'+x+z);
}
a1([1,2,3]);//a:13
//无次序
function a2({x, y, z}) {
    console.log('a:'+x+z);
}
a2({y:1,x:2,z:3});//a:23

//提取JSON数据
let jsonData={
    name:'xiaoming',
    height:16,
    hair:'short'
};
let {name,height,hair}=jsonData;
console.log(name,height,hair);//xiaoming 16 short

//函数参数的默认值？

//遍历Map结构

//输入模块的指定方法
const {stat,exists}=require('fs');




