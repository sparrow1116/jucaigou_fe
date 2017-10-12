/**
 * Created by zhangyj on 2017/10/10.
 */
import * as method from '../../utils/method'
import * as RegisterService from './service';
import * as LoginService from '../login/service';

function isValidate(phone,msgCode,inviteCode){
    if(!method.isMobile(method.trim(phone))){
        return '手机号码格式不正确';
    }
    if(method.trim(msgCode).length !== 4){
        return '验证码长度不对'
    }
    if(!method.isAllDigital(method.trim(msgCode))){
        return '验证码格式不正确'
    }
    return false;
}

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
        toggeleError:false,
        errorMessage:'',
        sendMessageBtnDisp: '免费获取'
    },
    reducers: {
        changePhone(state, {payload:{value}}){
            state.phone = value;
            return {...state}
        },
        changeMsgCode(state, {payload:{value}}){
            state.msgCode = value;
            return {...state}
        },
        changeInviteCode(state, {payload:{value}}){
            state.inviteCode = value;
            return {...state}
        },
        changeSendMessageBtnDisp(state,{payload:{value}}){
            state.sendMessageBtnDisp = value;
            return {...state}
        },
        showError(state, {payload:{msg}}){
            state.errorMessage = msg;
            state.toggeleError = !state.toggeleError;
            return {...state};
        }
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
                type: 'changeMsgCode',
                payload: {
                    value
                }
            });
        },
        *inviteCodeChange({payload:{value}}, {call,select,put}){
            yield put({
                type: 'changeInviteCode',
                payload: {
                    value
                }
            });
        },
        *countDown({},{call,select,put}){

            yield call(delay, 1000);
            let btnDisp = yield select(state => {
                return state.Register.sendMessageBtnDisp
            });
            if(btnDisp.indexOf('s')<0){
                return;
            }
            let time = btnDisp.split('s')[0];
            if (time <= 0) {
                btnDisp = '重新发送'
            } else {
                btnDisp = Number(time) - 1 + 's重发';
                yield put({
                    type:'countDown'
                })
            }
            yield  put({
                type: 'changeSendMessageBtnDisp',
                payload: {value: btnDisp}
            });
        },
        *sendMessage({}, {call,select,put}){
            let phone = null,sendMessageBtn = null;
            yield select(state => {
                phone = state.Register.phone;
                sendMessageBtn = state.Register.sendMessageBtnDisp;
            });
            if(sendMessageBtn.indexOf('s') > 0){
                return;
            }
            if(!method.isMobile(method.trim(phone))){
                yield  put({
                    type: 'showError',
                    payload: {msg: '手机格式有误'}
                });
                return;
            }

            let data = yield call(LoginService.sendMessageCode, {phone});
            if(data.status == 0){
                yield  put({
                    type: 'changeSendMessageBtnDisp',
                    payload: {value:'60s重发'}
                });
                yield put({
                    type:'countDown'
                })

            }else{
                yield  put({
                    type: 'showError',
                    payload: {msg: data.msg}
                });
                return;
            }

        },
        *register({}, {call,select,put}){
            let phone = null, msgCode = '', inviteCode = '';

            yield select(state => {
                phone = state.Register.phone;
                msgCode = state.Register.msgCode;
                inviteCode = state.Register.inviteCode;
            });

            let errorMessage = isValidate(phone,msgCode,inviteCode);
            if(errorMessage){
                yield  put({
                    type: 'showError',
                    payload: {msg: errorMessage}
                });
                return;
            }

            let result = yield call(RegisterService.register, {phone,msgCode,inviteCode});
            if(result.status == 0){
                window.history.go(-1);
            }else{
                yield  put({
                    type: 'showError',
                    payload: {msg: result.msg}
                });
                return;
            }

        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
            });
        },
    },
};