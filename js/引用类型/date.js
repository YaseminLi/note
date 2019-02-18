//调用方法时的时间
//Date.now()
// var start1=Date.now();
// console.log('1');
// var stop1=Date.now();
// var result1=stop1-start1;
// console.log(result1);

//+new Date()
var start2=+new Date();//+将时间戳转化为毫秒数
console.log(start2);
console.log('222');
var stop2=+new Date();
console.log(stop2);
var result2=stop2-start2;
console.log(result2);