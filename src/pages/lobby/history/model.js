/**
 * Created by zhangyj on 2017/10/26.
 */
import * as method from '../../../utils/method'
import { routerRedux } from 'dva/router';
import * as HistoryService from './service';

export default {
    namespace: 'history',
    state: {
        loading:false,
        hasMore:true,
        pageInfo:{
            pageSize:8,
            pageIndex:1,
            totalCount:9999999
        },
        historyArr:[

        ]
    },
    reducers: {
        startLoad(state, {}){
            state.loading = true;
            return{...state}
        },

        changeData(state, {payload:{data}  }) {
            state.pageInfo = data.pageInfo;
            state.historyArr = state.historyArr.concat(data.historyArr);
            state.loading = false;
            if(state.pageInfo.pageIndex * state.pageInfo.pageSize >= state.pageInfo.totalCount){
                state.hasMore = false
            }
            return {...state};
        },
    },
    effects: {
        *getHistoryList(action,{call,select,put}){
            let pageInfo = yield select(state =>{return state.history.pageInfo});
            if(pageInfo.pageIndex * pageInfo.pageSize < pageInfo.totalCount){
                yield put({
                    type:'startLoad'
                })
                const { data } = yield call(HistoryService.getHistoryList, {index: ++pageInfo.pageIndex,pageSize: pageInfo.pageSize});
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