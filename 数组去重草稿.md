# 数组键值对过滤器 配合 序列化去重

    /* var a={name:'a',link:''}
    var b={name:'b',link:''}
    a.link=b;
    b.link=a; */
    
    var myDate = new Date()
    var myDate1 = new Date(1000)
    var myregex = new RegExp("myregex")
    var myregex1 = new RegExp("yourrg")
    var myerror = new Error()
     function hh(){console.log("这是hh")};
    
    function xx(){console.log("这是xx")};
    
    var array = [{value: 1}, {value: 1}, {value: 2},undefined,undefined,null,null,myDate,myDate,myregex,myregex,myerror,myerror,hh,hh,xx,xx,myDate1,myDate1,myregex1,myregex1];
    
    function unique(array) {
        var obj = {};
        return array.filter(function(item, index, array){
            console.log(typeof item + JSON.stringify(item))
            return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
        })
    }
    console.log(unique(array)); 
                                /* 0: {value: 1}
                                   1: {value: 2}
                                   2: undefined
                                   3: null
                                   4: Sun May 03 2020 00:00:49 GMT+0800 (中国标准时间) {}
                                   5: /myregex/
                                   6: ƒ hh()
                                   7: Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间) {} /*
    
 
 + 结论
   - [1, "1", null, undefined, String, /a/, NaN] 对象和 NaN 、 数字 1 都去重
   - 因为使用了序列化 JSON.stringify()，
     - 所以对象存在循环引用时会报错
     - 正则对象、Error对象、function 只能去重第一个，由 typeof item 生效 【几乎等同于不能对他们去重,需要改进】
     - 如果数组中没有 对象 和 NaN 可以直接使用[...new Set(array)],最重要的是让我们知道在合适的场景要选择合适的方法。
   - 建议使用lodash  
   - [资料参考](https://github.com/mqyqingfeng/Blog/issues/27)
 + 序列化的缺陷
    - 时间对象 变成 字符串
    - RegExp、Error对象，变成 空对象
    - 函数，undefined， 会把函数或 undefined丢失
    - NaN、Infinity和-Infinity，则序列化的结果会 变成null
    - obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor
    - 循环引用无法成功
    - [资料参考](https://www.jianshu.com/p/b084dfaad501)