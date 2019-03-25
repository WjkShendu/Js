var oBtn = document.getElementsByClassName("btn")[0];
var oUl = document.getElementsByTagName("ul")[0];
//1.获取外链样式的函数方法
function getStyle(element,arr){
	if (window.getComputedStyle) {
		return window.getComputedStyle(element,null)[arr];
	} else{
		return element.currentStyle[arr];
	}
}
//2.给按钮添加点击事件
oBtn.onclick = function(){
	//a.if判断获取前端的display样式的值
	if (getStyle(oUl,"display") == "block") {
		oUl.style.display = "none";
		oBtn.style.background = "url(img/ico.gif)no-repeat 350px -14px";
	}else{
		oUl.style.display = "block";
		oBtn.style.background = "url(img/ico.gif)no-repeat 350px 14px";
	}
}
