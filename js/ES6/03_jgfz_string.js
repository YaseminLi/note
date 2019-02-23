//字符串被转化为类数组的对象
const [a,b,c,d,e]='hello';
console.log(a,b,c,d,e);//h e l l o

//length属性赋值
let {length:len}='hello';
console.log(len);//5
