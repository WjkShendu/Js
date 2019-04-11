//获取userName元素
var userName = document.getElementById("userName");
//获取userPass元素
var userPass = document.getElementById("userPass");
//获取复选框元素
var oJz = document.getElementById("Jz");
//获取注册元素
var oZc = document.getElementById("Zc");
//获取登陆元素
var oBut = document.getElementById("But");
//创建一个对象存储数据
var user = {
	13934393464:"Wjk101510",
	13864572568:"W123456"
}
console.log(user)
//添加正则表达式约束手机号+密码
var phoneReg = /^1[3|4|5|7|8|9]\d{9}$/g;
var passWord = /^[a-zA-Z]\w{5,17}$/g;
//焦点进入移出效果
userName.onfocus = function(){
	if (userName.value == "手机号") {
		userName.value = "";
		userName.style.color = "black";
		phoneReg.test(userName);
	}
}
userPass.onfocus = function(){
	if (userPass.value == "密码") {
		userPass.value = "";
		userPass.style.color = "black";
	}
}
//焦点移出效果
userName.onblur = function(){
	if (userName.value == "") {
		userName.value = "手机号";
		userName.style.color = "#CCCCCC";
	}
}
userPass.onblur = function(){
	if (userPass.value == "") {
		userPass.value = "密码";
		userPass.style.color = "#CCCCCC";
	}
}
//登陆方法
oBut.onclick = function(){
	for(j in user){
		console.log(j)
		console.log(user[j])
	}
}
