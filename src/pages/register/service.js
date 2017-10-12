/**
 * Created by zhangyj on 2017/10/10.
 */
import request from '../../utils/request';

import * as Urls from '../../utils/urls'

//注册用户
export function register({phone,msgCode,inviteCode}){

    return request(Urls.register,  {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({phone,msgCode,inviteCode})

    });
}