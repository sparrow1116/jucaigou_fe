import * as DetailService from './service';

import * as method from '../../utils/method'

let tempId = method.getParamFromUrl().orderId ? method.getParamFromUrl().orderId : ''

const orderId = tempId;

export default {
    namespace: 'Details',
    state: {
        loading:true
    },
    reducers: {
        save(state, {payload:{data}  }) {
            state.basic=data.basic;
            state.process=data.process;
            state.loading=false;
            return {...state};
        },
        reload(state,{payload:{orderId}}){
            console.log(state);
            console.log(orderId);
        },
        startFetch(state, { }) {
            state.loading=true;
            return {...state};
        },
        endCall(state,{}){
            state.loading=false;
            return {...state};
        },
    },
    effects: {
        *fetch({}, { call, put }) {
            yield put({
                type: 'startFetch',
            });
            const { data } = yield call(DetailService.fetch, {orderId});
            if(data == null){
                yield put({
                    type: 'endCall',
                    payload: {
                    },
                });
                return;
            }
            yield put({
                type: 'save',
                payload: {
                    data
                },
            });
        }

    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/users') {
                    dispatch({type: 'fetch', payload: query});
                }
            });
        },
    },
};
