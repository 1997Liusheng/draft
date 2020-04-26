var hello = "Hello World!";
console.log(hello);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("Runoob");
    };
    return Site;
}());
var obj = new Site();
obj.name();
/*
* 以上实例定义了一个类 Site，该类有一个方法 name()，该方法在终端上输出字符串 Runoob。

new 关键字创建类的对象，该对象调用方法 name()。
* 编译后生成的 JavaScript 代码如下：

var Site = /** @class*/ /* (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("Runoob");
    };
    return Site;
}());
var obj = new Site();
obj.name();
* */
var sites = ["Google", "Runoob", "Taobao", 1, false];
console.log(sites[0]);
console.log(sites[3]);
