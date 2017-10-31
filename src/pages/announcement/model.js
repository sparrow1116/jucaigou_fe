/**
 * Created by zhangyj on 2017/10/30.
 */
import * as method from '../../utils/method'
import { routerRedux } from 'dva/router';

import * as AnnouncementService from './service';

export default {
    namespace: 'Announcement',
    state: {
        list:[],
        selectAnnouncement:{}
    },
    reducers: {
        setTheAnnouncement(state,{payload:{data}}){
            state.selectAnnouncement = data;
            return{...state}
        },

        refreshList(state,{payload:{data}}){
            state.list = data;
            return {...state};
        }
    },
    effects: {
        *getAnnouncement(actions,{call,select,put}){
            const { data } = yield call(AnnouncementService.getAnnoucementList, {});
            yield put({
                type: 'refreshList',
                payload: {
                    data
                },
            });
        },
        *selectAnnouncement({payload:{id}},{call,select,put}){
            let list = yield select((state)=>{return state.Announcement.list});
            let theData = null;
            for(var i = 0; i<list.length; i++){
                if(list[i].id == id){
                    theData = list[i];
                }
            }
            yield put({
                type: 'setTheAnnouncement',
                payload: {
                    data:theData
                },
            });
        }

    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname == '/home/theAnnouncement') {
                    dispatch({type: 'selectAnnouncement', payload: {id:query.id}});
                }
            });
        },
    },
}