/**
 * Created by zhangyj on 2017/10/10.
 */
import * as method from '../../utils/method'

function delay(timeout){
    return new Promise(resolve => {
        setTimeout(function(){resolve()}, timeout);
    });
}

export default {
    namespace: 'Register',
    state: {
        phone: '',
        msgCode: '',
        inviteCode:'',
        sendMessageBtnDisp: '免费获取'
    },
    reducers: {
    },
    effects: {
        *phoneChange({payload:{value}}, {call,select,put}){
            yield put({
                type: 'changePhone',
                payload: {
                    value
                }
            });
        },
        *msgChange({payload:{value}}, {call,select,put}){
            yield put({
                type: 'changePhone',
                payload: {
                    value
                }
            });
        },
        *inviteCodeChange({payload:{value}}, {call,select,put}){
            yield put({
                type: 'changePhone',
                payload: {
                    value
                }
            });
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
            });
        },
    },
};