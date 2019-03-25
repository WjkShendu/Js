var oBut = document.getElementById("but");
var timer = null;
oBut.onclick = function(){
	//1.设置秒数
	var count = 60;
	oBut.disabled = true;//给input添加禁止点击
	//2.设置点击后的初始值
	this.value = "60秒后重新发送";
	//3.this指向的是window对象所以创建that来存储
	var that = this;
	//4.清除定时器防止定时器累加
	clearInterval(timer);
	//5.添加定时器
	timer = setInterval(function(){
		count--;
		that.value = count+"秒后重新发送";
		//
		if (count == 0) {
			clearInterval(timer);
			count = 60;
			oBut.disabled = false;
			that.value = "点击重新发送验证码";
		}
	},1000);
}
