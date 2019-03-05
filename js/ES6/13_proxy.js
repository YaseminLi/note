//在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
//实例生成
//target函数，要拦截的对象
//handler函数，制定拦截行为
// var proxy=new Proxy(target,handler);
//example
var proxy1=new Proxy({},{
    get:function(target,property){
        return 35;
    }
});
console.log(proxy1.time);//35
console.log(proxy1.count);//35

//不设拦截，直通原对象访问
//handler是一个空对象，没有任何拦截效果，访问proxy就等同于访问target
var target={};
var handler={};
var proxy2=new Proxy(target,handler);
proxy2.a='b';
console.log(target.a);//b

//将 Proxy 对象，设置到object.proxy属性，从而可以在object对象上调用。
var obj={proxy:new Proxy(target,handler)};

//Proxy 实例也可以作为其他对象的原型对象。
//proxy对象是obj对象的原型，obj对象本身并没有time属性，所以根据原型链，会在proxy对象上读取该属性，导致被拦截
var proxy3=new Proxy({},{
    get:function (){
        return 'proxy3';
    }
});
var obj=Object.create(proxy3);
console.log(obj.time);//proxy3
