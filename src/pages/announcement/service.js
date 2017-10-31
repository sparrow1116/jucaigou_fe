/**
 * Created by zhangyj on 2017/10/30.
 */
import request from '../../utils/request';

import * as Urls from '../../utils/urls'


export function getAnnoucementList() {
    //return  window.bridge.getContext().then(function (data) {
    return request(Urls.getAnnoucementList, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({})
    });
    //});
}