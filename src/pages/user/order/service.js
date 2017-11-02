/**
 * Created by zhangyj on 2017/11/1.
 */
import request from '../../../utils/request';
import * as Urls from '../../../utils/urls'

export function getOrderList({userId}) {

    return request(Urls.getOrderList, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: {userId}
    });

}

export function getOrderDetail({id}) {

    return request(Urls.getOrderDetail, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: {id}
    });

}