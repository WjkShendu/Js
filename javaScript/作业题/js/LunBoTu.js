//获取元素
var oCircles = document.getElementById("circles");
var aLi = oCircles.getElementsByTagName("li");
var imgList = document.getElementById("imagesList");
var imgLi = imgList.getElementsByTagName("li");
var leftBtn = document.getElementById("carousel_leftBtn");
var rightBtn = document.getElementById("carousel_rightBtn");
var oCarousel = document.getElementById("carousel");
var index = 0;
var timer = null;
function Cleak(index){
	for(var i=0;i<aLi.length;i++){
        imgLi[i].className = "";
        aLi[i].className = "";
    }
    aLi[index].className = "current";
    imgLi[index].className = "current";
}
rightBtn.onclick = function () {
    index++;
    if(index>4){
    	index = 0;
    }
   	Cleak(index);
};
leftBtn.onclick = function () {
    index--;
    if(index<0){
    	index = 4;
    }
    Cleak(index);
}
for(var i=0;i<aLi.length;i++){
    aLi[i].index = i;
    aLi[i].onmouseover = function () {
        Cleak(this.index);
    }
}
function move() {
    index++;
    if(index>4){
   	 	index = 0;
    }
    Cleak(index);
}
timer = setInterval(move,1000);
oCarousel.onmouseover = function () {
    clearInterval(timer);
}
oCarousel.onmouseout = function () {
    timer = setInterval(move,1000);
}