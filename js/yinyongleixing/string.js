var sv='hello word';
console.log(sv.charAt(1));
console.log(sv.charCodeAt(1));
console.log(sv[1]);

var sd='jksshfuhegnvliudflbwbjksdhuhasdsfg';
var arr=[];
var pos=sd.indexOf('s');

while(pos>-1){
    arr.push(pos);
    pos=sd.indexOf('s',pos+1);
}
console.log(arr);

var text='cat,fat,bat';
var result=text.replace('at','ont');
console.log(result);
var result1=text.replace(/at/g,'ont');
console.log(result1);


