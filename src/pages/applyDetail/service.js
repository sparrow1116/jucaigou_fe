import request from '../../utils/request';

import * as Urls from '../../utils/urls'

export function fetch({orderId}) {
    //return  window.bridge.getContext().then(function (data) {
         //alert('Authorization:' + data.Authorization);
         //alert('uesrId:' + data.userId);

        return request(Urls.OrderDetailUrl, {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.__merchant_context__.user.accessToken,
                'AuthUUID':window.__merchant_context__.user.userId,
                'Accept': 'application/json'
            },
            body: {
                orderId:orderId
            }
        });

     //});

}
