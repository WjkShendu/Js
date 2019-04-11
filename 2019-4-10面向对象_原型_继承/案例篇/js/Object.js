function Tab(id){
	console.log(this)
	var tabBox = document.getElementById(id);
	this.tabBtn = tabBox.getElementsByTagName("input");
	this.tabDiv = tabBox.getElementsByTagName("div");
	for (var i = 0 ; i < this.tabBtn.length ; i++) {
		this.tabBtn[i].index = i;
		var obj = this;
		this.tabBtn[i].onclick = function(){
			obj.click(this);
		}
	}
}
Tab.prototype.click = function(btn){
	console.log(this)
	for (var i = 0 ; i < this.tabBtn.length ; i++) {
		this.tabBtn[i].className = "";
		this.tabDiv[i].className = "";
	}
	btn.className = "active";
	this.tabDiv[btn.index].className = "act";
}
