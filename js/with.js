//with延长作用域链

//with语句里可以修改引用对象的值，也可以增加属性
var obj = {
    completed: 10,
}
function add() {
    var active = 2;
    with (obj) {
        var num=obj.completed+active;
        obj.total = 6;
        obj.completed=num;
    }
    console.log(num);
}
add();
console.log(obj);

// 获取上层对象的值？可以上上层吗？ 可以的~
var obj2 = {
    completed: 10,
}
function add2() {
    var active = 2;
    function ass() {
        var pal=5;
        with (obj2) {
            var num = obj.completed+active+pal;
            obj2.total = 6;
            obj2.completed=num;
        }
        console.log(num);
    }
    ass();
}
add2();
console.log(obj2);