import fetchDva from 'dva/fetch';


import 'whatwg-fetch';
import 'es6-promise/dist/es6-promise.min.js';
import 'fetch-ie8/fetch.js';

import {isMock} from './config'

let meFetch;
if(isMock){
    meFetch = fetch;
}else{
    meFetch = fetchDva;
}
function generatorMockUrl(url){
    var urlArr = url.split('/');
    var length = urlArr.length;
    return '../../mock/'+urlArr[length-2] + '/' + urlArr[length-1] + '.json'
}


function parseJSON(response) {
    let serverData = response.json();
    if(serverData.status != 0){
        alert(serverData.msg);
    }
    return serverData;
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {

    let meUrl = url;
    if(isMock){
        meUrl = generatorMockUrl(meUrl)
        return meFetch(meUrl)
            .then((res) => {
                console.log(res.status);
                return res.json(); })
            .then((data) => {
                if(data.status == 0 ){
                    return {data:data.data}
                }else if(data.status == 2){
                    window.bridge.logout();
                }else if(data.status == 1){
                   if(data.errCode == "E102"){
                         return {data:"failed"}
                    }else{
                        window.bridge.displayToast(data.msg);
                        return {data:null}
                    }
                }
            })
            .catch((e) =>({e}) );

            /*.then(checkStatus)
            .then(parseJSON)
            .then((data) => ({data}))
            .catch((err) => ({err}));*/
    }

    if(options.method == 'GET'){
        for(var key in options.body){
            meUrl += '/' + options.body[key];
        }
        delete options.body;
    }
     
    return meFetch(meUrl,options)
        /*.then(checkStatus)
        .then(parseJSON)
        .then((data) => ({data}))
        .catch((err) => ({err}));*/

        .then((res) => {
            console.log(res.status);
            return res.json(); })
        .then((data) =>{
            if(data.status == 0 ){
                return {data:data.data}
            }else if(data.status == 2){
                window.bridge.logout();
            }else if(data.status == 1){
                if(data.errCode == "E102"){
                    return {data:"failed"}
                }else{
                    window.bridge.displayToast(data.msg);
                    return {data:null}
                }
            }
        })
        .catch((e) =>({e}) );

    /*return fetchDva(meUrl, options)
        .then(checkStatus)
        .then(parseJSON)
        .then((data) => ({data}))
        .catch((err) => ({err}));*/
}
