var str = "Hello World";

console.log(str.charCodeAt(4)); // 111 o的字符编码

console.log(str.lastIndexOf("o")); // 找出字符串中最后一次出现要查找的字符串的下标

console.log(str.search("l"));
console.log(str.indexOf("l"));


// a   b  c d

var str = "a   b  c d";
// console.log(str.split(" "));
console.log(str.split(/\s+/));


var testStr = "abcccdeeffccccccfffffhrccc";

console.log(testStr.match(/c+/g));

var reg = /f+/g;
console.log(reg.exec(testStr));
console.log(reg.test(testStr));


var tStr1 = "abDF45uipojfk";

var reg1 = /[^ab]/g;

console.log(reg1.test(tStr1));

var reg2 = /[a-zA-Z0-9]/g;
console.log(tStr1.match(reg2));

console.log(tStr1.match(reg1));

var tStr2 = 'how old are   you|abc';
// 大小写字母表示：[a-zA-Z]+
console.log(tStr2.match(/\b[a-zA-Z]+\b/g));

var reg3 = /c{3}/g;
console.log(testStr.match(reg3));
var reg4 = /c{4,6}/g;
console.log(testStr.match(reg4));

var chineseStr = "哈哈哈11haha再见";
var reg5 = /[\u4e00-\u9fa5]+/g;

console.log(chineseStr.match(reg5));


// 手机号验证

function phone() {
    var phoneNumber = prompt("请输入一个11位号码");

    var phoneReg = /^1[3|4|5|7|8|9]\d{9}$/g;

    if (phoneReg.test(phoneNumber)) {
        alert("您输入的是一个手机号");
    } else {
        alert("您输入的不是一个手机号");
    }
}
// phone();

// 开头
// 12位 字母 数字 _
// @
// 6位 字母 数字
// .
// com cn net yeah
// 结尾

function email() {
    var emailReg = /^[\d\w_]{1,12}@[\d\w]{1,6}\.(com|cn|net|yeah)$/g;

    var emailStr = prompt("请输入一个邮箱地址");

    if (emailReg.test(emailStr)) {
        alert("OK");
    } else {
        alert("Error");
    }
}
// email();


// 将
// div#demo.demo
// 转化成 
// <div id="demo" class="demo"></div>

var em = "div#demo.demo";
function emmpt(exp){
    var reg = /(\w+)#(\w+)\.(\w+)/g;
    var res =  exp.replace(reg, function (match, $1, $2, $3) {
        return ['<' + $1, 'id="' + $2 + '"', 'class="' + $3 + '"></' + $1 + '>'].join(" ");
    });
    return res;
}
console.log(emmpt(em));