/**
 * Created by zhangyj on 2017/11/1.
 */
import request from '../../../utils/request';
import * as Urls from '../../../utils/urls'

export function getCapitalList({userId,pageSize,pageIndex}) {

    return request(Urls.getCapitalList, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: {userId,pageSize,pageIndex}
    });

}

export function getCapitalDetail({id}) {

    return request(Urls.getCapitalDetail, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: {id}
    });
}
export function getCapitalSummay(id){
    return request(Urls.getCapitalSummay, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: {id}
    });
}