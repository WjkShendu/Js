var oImgSrc = document.getElementById("imgSrc");
var oBtn = document.getElementById("btn");
var oPic = document.getElementById("pic");
oBtn.onclick = function(){
	 oPic.src = "img/" + oImgSrc.value + ".jpg";
}
