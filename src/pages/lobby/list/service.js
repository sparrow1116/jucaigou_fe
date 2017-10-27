/**
 * Created by zhangyj on 2017/10/18.
 */
import request from '../../../utils/request';

import * as Urls from '../../../utils/urls'


export function getProductList({index,pageSize}) {
    return request(Urls.getProductList, {
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
}

export function buyProduct({id,currentProductId,userId,count}) {
    return request(Urls.buyProduct, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            id,
            currentProductId,
            userId,
            count
        })
    });
}


export function getProductDetail({id}) {

    return request(Urls.getProductDetail, {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: {id}
    });

}

export function getAttionMsg(){
    return request(Urls.getAttionMsg, {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: {}
    });
}