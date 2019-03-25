var oText = document.getElementById("Text");
var oStar = document.getElementById("Star");
var oEnd = document.getElementById("End");
var oStrong = document.getElementById("Strong");
var timer = null;
//1.获取随机数的函数方法
function getRandom(Min,Max){
	var Cha = Max - Min;
	var RandomNum = Math.ceil(Math.random() * Cha + 1);
	return RandomNum;
}
//2.给开始添加点击事件
oStar.onclick = function(){
	timer = setInterval(function(){
		oText.innerHTML = getRandom(1,6);
	},10);
}
//3.给结束添加点击事件
oEnd.onclick = function(){
	clearInterval(timer);
	if (oText.innerHTML > 3) {
		oStrong.innerHTML = "大";
	}else{
		oStrong.innerHTML = "小";
	}
}
