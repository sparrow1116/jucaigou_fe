/**
 * Created by zhangyj on 2017/10/31.
 */
import * as method from '../../utils/method'
import { routerRedux } from 'dva/router';

import * as MessageService from './service';

export default {
    namespace: 'message',
    state: {
        loading:false,
        hasMore:true,
        pageInfo:{
            pageSize:7,
            pageIndex:1,
            totalCount:8
        },
        list:[],
        selectMessage:{}
    },
    reducers: {
        startLoad(state, {}){
            state.loading = true;
            return{...state}
        },

        setTheMessage(state,{payload:{data,index}}){
            state.selectMessage = data;
            if(index){
                state.list[index].readed = true;
            }
            return{...state}
        },

        refreshList(state,{payload:{data}}){
            state.list = data;
            state.loading = false;
            if(state.pageInfo.pageIndex * state.pageInfo.pageSize >= state.pageInfo.totalCount){
                state.hasMore = false
            }
            return {...state};
        }
    },
    effects: {
        *getMessage(actions,{call,select,put}){

            let pageInfo = yield select(state =>{return state.message.pageInfo});

            if(pageInfo.pageIndex * pageInfo.pageSize < pageInfo.totalCount){
                yield put({
                    type:'startLoad'
                })
                const { data } = yield call(MessageService.getMessageList, {});
                yield put({
                    type: 'refreshList',
                    payload: {
                        data
                    },
                });
            }

        },
        *selectMessage({payload:{id}},{call,select,put}){
            let list = yield select((state)=>{return state.message.list});
            let theData = null,theIndex = null;
            for(var i = 0; i<list.length; i++){
                if(list[i].id == id){
                    theData = list[i];
                    theIndex = i;
                }
            }
            yield put({
                type: 'setTheMessage',
                payload: {
                    data:theData,
                    index: theIndex
                },
            });
        }

    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname == '/home/theMessage') {
                    dispatch({type: 'selectMessage', payload: {id:query.id}});
                }
            });
        },
    },
}