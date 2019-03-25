var oLiA = document.getElementsByTagName("li");
var oCon = document.getElementsByClassName("container")[0];
var oLiB = oCon.getElementsByTagName("ul");
for (var i = 0 ; i < oLiA.length ; i++) {
	oLiA[i].index = i;
	oLiA[i].onclick = function(){
		for (var i = 0 ; i < oLiA.length ; i++) {
			oLiA[i].className = "";
		}
		for (var i = 0 ; i < oLiB.length ; i++ ) {
			oLiB[i].className = "";
		}
		this.className = "cur";
		oLiB[this.index].className = "con_show";
	}
}