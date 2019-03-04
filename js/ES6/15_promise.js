//promise实例生成
// const promise = new Promise(function (resolve, reject) {
//     //……
//     if (/*异步操作成功*/) {
//         resolve(value);
//     }else { 
//         reject(error);
//      }
// });
//传入参数reject,resolve为函数
//value异步操作成功时的结果

//实例生成后，用then指定两种状态下的回调函数,第二个函数可选
// promise.then(function(value){
//     //success
// },function(error){
//     //failure
// });

function timeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms,'done');
    });
};
timeout(0).then((value)=>{
    console.log(value);
});

//promimse新建后会立即执行
let promise1=new Promise((resolve,reject)=>{
    console.log('promise');
    resolve();
});
promise1.then(function() {
    console.log('resolved');
  });
console.log('Hi');
// promise创建后立即执行
// Hi
// resolved同步任务结束后执行回调
// done

//图片加载暂停
