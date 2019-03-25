var oText = document.getElementById("text");
var oAdd = document.getElementById("add");
var oBox = document.getElementById("box");
oAdd.onclick = function(){
	oBox.innerHTML += oText.value;
	oText.value = "";
}
