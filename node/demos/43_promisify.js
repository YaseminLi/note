//回调地狱 异步里面调异步

//方法一：readfile写法
const fs=require('fs');
const promisify=require('util').promisify;
const read=promisify(fs.readFile);

// read('./43_promisify.js').then((data)=>{
//     console.log(data.toString());
// }).catch(err=>{
//     console.log(err);
// });

//方法二：async await