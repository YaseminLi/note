'use strict'
//1.let和const
//let声明只在代码块内有效
for(let i=0;i<5;i++){
   // console.log('a');
}
//console.log(i);//i is not defined

for(var i=0;i<5;i++){
    //console.log('a');
}
//console.log(i);//5


(function(){
    var tmp='a';
    //console.log(tmp);
}())
//console.log(tmp);// 立即执行函数会封装内部tmp is not defined

//const fo=Object.freeze({});
//fo.color='blue';
//console.log(fo.color);//Cannot add property color, object is not extensible

var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach( (key, i) => {
      if ( typeof obj[key] === 'object' ) {
        constantize( obj[key] );
      }
    });
  };

var add={
    name:'xiaoming'
}
Object.freeze(add);
//add.age='16';
//add.name='xiaohong';

function fn1(){
    console.log(this);
};
fn1();