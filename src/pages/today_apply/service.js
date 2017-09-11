import request from '../../utils/request';

import * as Urls from '../../utils/urls'


export function fetch({index,orderStatus,size,userId}) {
    //return  window.bridge.getContext().then(function (data) {
        return request(Urls.OrderListUrl, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.__merchant_context__.user.accessToken,
                'AuthUUID':window.__merchant_context__.user.userId,
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                index,
                orderStatus,
                size,
                userId: window.__merchant_context__.user.userId
            })
        });
    //});
}

/*export function remove(id) {
 return request(`/api/users/${id}`, {
 method: 'DELETE',
 });
 }

 export function patch(id, values) {
 return request(`/api/users/${id}`, {
 method: 'PATCH',
 body: JSON.stringify(values),
 });
 }

 export function create(values) {
 return request('/api/users', {
 method: 'POST',
 body: JSON.stringify(values),
 });
 }*/
