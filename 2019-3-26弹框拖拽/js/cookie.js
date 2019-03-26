//设置cookie   创建cookie的函数方法
function setCookie(name,value,expires,path,domain,secure){
	//设置cookie的键值
	var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	if (expires instanceof Date) {
		cookieText += ";expires = " + expires;
	}
	if (path) {
		cookieText += ";path = " + path;
	}
	if (domain) {
		cookieText += ";domain = " + domain;
	}
	if (secure) {
		cookieText += ";secure";
	}
	document.cookie = cookieText;
}
//获取cookie
function getCookie(name){
	//获取cookie名称
    var cookieName =encodeURIComponent(name) + "=";
    //得到传入cookie名的位置
    var cookieStart = document.cookie.indexOf(cookieName);
    //初始化一个变量，用来保存cookie的值
    var cookieValue = null;
    //判断能不能查找到cookie名
    if(cookieStart > -1){
        var cookieEnd = document.cookie.indexOf(";",cookieStart);
        if(cookieEnd == -1){
            cookieEnd = document.cookie.length;
        }
        cookieValue =decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length,cookieEnd));
    }
    return cookieValue;
}
//删除cookie
function unsetCookie(name) {
    document.cookie = name + "= ; expires=" + new Date(0);
}
//设置过期时间
function setCookieDate(day) {
    if(typeof day == "number" && day > 0){
        var date = new Date();
        date.setDate(date.getDate() + day);
    }else{
        throw new Error("传递的day必须是一个天数，必须比0大")
    }
    return date;
}