/**
 * Created by zhangyj on 2017/10/18.
 */
import * as method from '../../utils/method'
import { routerRedux } from 'dva/router';
import * as ProductService from './service';

export default {
    namespace: 'lobby',
    state: {
        loading:false,
        pageInfo:{
            pageSize:8,
            pageIndex:1,
            totalCount:9999999
        },
        productArr:[
            /*{
                id:0,
                status:0,//0:集结中。1:集结完毕。 2:等待开奖
                statusDisc:'集结中',
                productName:'试试看看',
                productId:'171023',
                endTime:1508849398985
            }*/
        ]
    },
    reducers: {
        changeData(state, {payload:{data}  }) {
            state.pageInfo = data.pageInfo;
            state.productArr = state.productArr.concat(data.productArr);
            return {...state};
        },
    },
    effects: {
        *getProductList(action,{call,select,put}){
            let pageInfo = yield select(state =>{return state.lobby.pageInfo});
            if(pageInfo.pageIndex * pageInfo.pageSize < pageInfo.totalCount){
                const { data } = yield call(ProductService.getProductList, {index: ++pageInfo.pageIndex,pageSize: pageInfo.pageSize});
                yield put({
                    type: 'changeData',
                    payload: {
                        data
                    },
                });
            }
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                console.log('>>>>>>>>>>>>');
                if (pathname === '/register') {
                    //window.history.pushState('/#/register')
                }
            });
        },
    },
}