/**
 * Created by zhangyj on 2017/11/2.
 */
import * as method from '../../../utils/method'
import * as Const from '../../../utils/constData'
import { routerRedux } from 'dva/router';

import * as CapitalService from './service';

export default {
    namespace: 'capital',
    state: {
        loading:false,
        hasMore:true,
        pageInfo:{
            pageSize:7,
            pageIndex:0,
            totalCount:8
        },
        summary:{
            "currentRemain":0,
            "inOrder": 0,
            "outPrice":0,
            "allInPrice": 0,
            "profitPrice":0
        },
        list:[],
        selectCapital:{}
    },
    reducers: {
        startLoad(state, {}){
            state.loading = true;
            return{...state}
        },

        setTheOrder(state,{payload:{data}}){
            state.selectCapital = data;
            return{...state}
        },
        setSummay(state,{payload:{data}}){
            state.summary = data;
            return {...state};
        },
        refreshList(state,{payload:{data}}){
            state.list = state.list.concat(data.list);
            state.loading = false;
            if(state.pageInfo.pageIndex * state.pageInfo.pageSize >= state.pageInfo.totalCount){
                state.hasMore = false
            }
            state.pageInfo = data.pageInfo;
            return {...state};
        }
    },
    effects: {
        *getCapitalList(actions,{call,select,put}){

            let pageInfo = yield select(state =>{return state.capital.pageInfo});

            if(pageInfo.pageIndex * pageInfo.pageSize < pageInfo.totalCount){
                yield put({
                    type:'startLoad'
                });
                let userInfo = window.localStorage.getItem(Const.STORE_USER_INFO);
                const { data } = yield call(CapitalService.getCapitalList, {userId:userInfo.id,
                    pageSize:pageInfo.pageSize,
                    pageIndex:++pageInfo.pageIndex
                });
                yield put({
                    type: 'refreshList',
                    payload: {
                        data
                    },
                });
            }

        },

        *getSummary(actions,{call,select,put}){
            let userInfo = window.localStorage.getItem(Const.STORE_USER_INFO);
            const result = yield call(CapitalService.getCapitalSummay, {userId: userInfo.id});
            if(result.status == 0){
                yield put({
                    type: 'setSummay',
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
        },

        *selectCapital({payload:{id}},{call,select,put}){

            const result = yield call(CapitalService.getCapitalDetail,{id});
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
                if (pathname == '/home/capitalDetail') {
                    dispatch({type: 'selectCapital', payload: {id:query.id}});
                }
            });
        },
    },
}