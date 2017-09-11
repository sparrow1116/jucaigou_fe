import request from '../../utils/request';

import * as Urls from '../../utils/urls'

//获取剩余积分总数
export function fetch({}) {
    //return  window.bridge.getContext().then(function (data) {
        return request(Urls.RemainPoints, {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.__merchant_context__.user.accessToken,
                'AuthUUID':window.__merchant_context__.user.userId,
                'Accept': 'application/json'
            },
            body: {}
        });
    //});

}

//兑换商品
export function exchange({id}){
    //return  window.bridge.getContext().then(function (data) {
        return request(Urls.ExchangeCommodity, {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.__merchant_context__.user.accessToken,
                'AuthUUID':window.__merchant_context__.user.userId,
                'Accept': 'application/json'
            },
            body: {id}
        });
    //});

}



//UBT数据埋点
export function UBT(UBTDataCollection){
    //return  window.bridge.getContext().then(function (data) {
    
        return request(Urls.DataCollect,  {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.__merchant_context__.user.accessToken,
                'AuthUUID':window.__merchant_context__.user.userId,
                'Accept': 'application/json'
            },
            body: JSON.stringify(UBTDataCollection)

        });
    //});

}
