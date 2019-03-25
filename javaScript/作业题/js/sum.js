//1.获取元素
var oInp = document.getElementsByTagName("input")[0];
var oBut = document.getElementsByTagName("button")[0];
var oStrong = document.getElementsByClassName("sum")[0];
//2.添加键盘事件控制用户输入
oInp.onkeyup = function(){
	//a.添加正则表达式除以数字或者，号的其他字符全部转换成空
	this.value = this.value.replace(/[^(\d)|(,)]/,"");
}
//3.添加点击事件求算出和
oBut.onclick = function(){
	//a.累加器
	var sum = 0;
	//b.获取输入框内的值并转换为数组
	var newArray = oInp.value.split(",");
	//c.循环遍历转换后的数组进行累加
	for (var i = 0 ; i < newArray.length ; i++) {
		sum += parseInt(newArray[i]);
	}
	//d.将求出的和传到页面
	oStrong.innerHTML = sum;
}
