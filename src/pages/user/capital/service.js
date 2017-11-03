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
        body: JSON.stringify({userId,pageSize,pageIndex})
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
        body: JSON.stringify({id})
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
        body: JSON.stringify({id})
    });
}