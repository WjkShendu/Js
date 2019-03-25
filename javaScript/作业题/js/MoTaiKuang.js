var oBtn = document.getElementById("btn");
var oLogin = document.getElementById("login");
var oClose = document.getElementById("close");
var oInner = document.getElementById("inner");
oBtn.onclick = function(){
	oLogin.style.display = "block";
	oInner.style.display = "block";
	document.body.style.overflow = "hidden";
}
oClose.onclick = function(){
	oLogin.style.display = "none";
	oInner.style.display = "none";
	document.body.style.overflow = "auto";
}
