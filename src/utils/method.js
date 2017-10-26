/**
 * Created by zyj on 2017/9/6.
 */

export const trim = function (str) {//去掉空格
    if (!str) return;
    str += '';
    return str.replace(/\s/g,"");
}

//检验是否是手机号
export const isMobile = function (mobile) {
    var reg = /^(1[3|5|8][0-9]|147|170|171|173|175|176|177|178)\d{8}$/; //验证规则
    return reg.test(mobile);
}

export const formatNum = function (strNum) {

    if (typeof(strNum) == undefined || strNum == null) {
	return 0;
    }
    let v = String(strNum);
    let temp = v.split('.')[0];
    let decimal = v.split('.')[1];

    v = temp;

    let dd = [];
    for (let i = 0; i < v.length; i++) {
	dd.push(v[i]);
    }

    let resArr = [];
    let tempd = '';
    while (dd.length > 3) {
	tempd = '';
	tempd = dd.pop() + tempd;
	tempd = dd.pop() + tempd;
	tempd = dd.pop() + tempd;
	resArr.unshift(tempd);
    }

    let head = '';
    while (dd.length > 0) {
	head = dd.pop() + head;
    }

    resArr.unshift(head);

    let interNum = resArr.join(',');

    return interNum;
}
//是否是纯数字
export const isAllDigital = function (str) {
    if (/^\d+$/.test(str)) return true; //纯数字
    return false;
}
//获取当前页面url中的参数
export const getParamFromUrl = function () {
    var url = window.location.href;
    var paramObj = {}
    var param = url.split('?')[1];
    if (param) {
	var paramArr = param.split('&');
	for (var i = 0; i < paramArr.length; i++) {
	    var theParam = paramArr[i].split('=');
	    paramObj[theParam[0]] = theParam[1];
	}
    }
    return paramObj;
}

//资金显示成：￥10.00
export const formatMoney = function(data){
    if(!data){
        return '￥0.00'
    }
    let selfStr = ''+data;
    if(selfStr.indexOf('￥') < 0){
        selfStr = '￥' + selfStr;
    }
    if(selfStr.indexOf('.') < 0){
        selfStr = selfStr + '.00';
    }
    return selfStr;


}

//日期format
export const Format = function (data, fmt) {
    var o = {
	"M+": data.getMonth() + 1, //月份
	"d+": data.getDate(), //日
	"h+": data.getHours(), //小时
	"m+": data.getMinutes(), //分
	"s+": data.getSeconds(), //秒
	"q+": Math.floor((data.getMonth() + 3) / 3), //季度
	"S": data.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (data.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
	if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
