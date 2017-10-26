/**
 * Created by zhangyj on 2017/10/26.
 */
import request from '../../../utils/request';

import * as Urls from '../../../utils/urls'


export function getHistoryList({index,pageSize}) {
    //return  window.bridge.getContext().then(function (data) {
    return request(Urls.getHistoryList, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            index,
            pageSize
        })
    });
    //});
}