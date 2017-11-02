/**
 * Created by zhangyj on 2017/11/1.
 */
import request from '../../../utils/request';
import * as Urls from '../../../utils/urls'

export function getBaseBankInfo({userId}) {

    return request(Urls.getBaseBankInfo, {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: {userId}
    });

}