/**
 * Created by zhangyj on 2017/11/1.
 */
import * as method from '../../../utils/method'
import * as Const from '../../../utils/constData'
import { routerRedux } from 'dva/router';

import * as OrderService from './service';

export default {
    namespace: 'order',
    state: {
        loading:false,
        hasMore:true,
        pageInfo:{
            pageSize:7,
            pageIndex:1,
            totalCount:8
        },
        list:[],
        selectOrder:{}
    },
    reducers: {
        startLoad(state, {}){
            state.loading = true;
            return{...state}
        },

        setTheOrder(state,{payload:{data}}){
            state.selectOrder = data;
            return{...state}
        },

        refreshList(state,{payload:{data}}){
            state.list = state.list.concat(data);
            state.loading = false;
            if(state.pageInfo.pageIndex * state.pageInfo.pageSize >= state.pageInfo.totalCount){
                state.hasMore = false
            }
            return {...state};
        }
    },
    effects: {
        *getOrderList(actions,{call,select,put}){

            let pageInfo = yield select(state =>{return state.order.pageInfo});

            if(pageInfo.pageIndex * pageInfo.pageSize < pageInfo.totalCount){
                yield put({
                    type:'startLoad'
                });
                let userInfo = window.localStorage.getItem(Const.STORE_USER_INFO);
                const { data } = yield call(OrderService.getOrderList, {userId:userInfo.id});
                yield put({
                    type: 'refreshList',
                    payload: {
                        data
                    },
                });
            }

        },
        *selectOrder({payload:{id}},{call,select,put}){

            const result = yield call(OrderService.getOrderDetail,{id});
            if(result.status == 0){
                yield put({
                    type: 'setTheOrder',
                    payload: {
                        data:result.data,
                    },
                });
            }else{
                yield put({
                    type:'home/showError',
                    payload: {msg: result.msg}
                })
            }


        }

    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname == '/home/orderDetail') {
                    dispatch({type: 'selectOrder', payload: {id:query.id}});
                }
            });
        },
    },
}