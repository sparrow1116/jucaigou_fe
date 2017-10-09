/**
 * Created by zhangyj on 2017/9/12.
 */
import request from '../../utils/request';

import * as Urls from '../../utils/urls'

//发送登录短信验证码
export function sendMessageCode({phone}) {
    //return  window.bridge.getContext().then(function (data) {
    return request(Urls.sendMessage, {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: {phone}
    });
    //});

}

export function login({phone,msgCode}){

    return request(Urls.login,  {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({phone,msgCode})

    });
}