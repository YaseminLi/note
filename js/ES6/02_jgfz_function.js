hugg//函数参数的解构
function add([x,y]){
    console.log(x+y);
}
add([1,2]);//3

let arr=[[1,2],[3,4]].map(([x,y])=>x+y);
console.log(arr);//[3,7]

//步骤-------------------------------------------------------
//1.检验传入的参数是否为undefined或者没有传入参数
//2.没有传参或者传入undefined时，查看参数是否有默认值，如果有则对默认值进行解构赋值
//3.传入参数时，忽略参数默认值，对传入的参数进行解构赋值
//4.第2，3步解构成功则使用解构的值，解构失败则看是否有解构默认值，使用解构值或者undefined

//exmple1,参数是一个对象，通过对该对象的解构赋值得到变量x和y的值
function move({x = 0, y = 0} = {}) {
    return [x, y];
  }
  
  move({x: 3, y: 8}); // [3, 8]
  move({x: 3}); // [3, 0]
  move({}); // [0, 0]
  move(); // [0, 0]

  //exmple2，为move函数的参数指定默认值
  function move({x, y} = { x: 0, y: 0 }) {
    return [x, y];
  }
  
  move({x: 3, y: 8}); // [3, 8]
  move({x: 3}); // [3, undefined]
  move({}); // [undefined, undefined]
  move(); // [0, 0]