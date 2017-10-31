/**
 * Created by zhangyj on 2017/10/31.
 */
import request from '../../utils/request';

import * as Urls from '../../utils/urls'


export function getMessageList() {

    return request(Urls.getMessageList, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({})
    });

}