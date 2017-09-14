/**
 * Created by zyj on 2017/9/5.
 */
import * as method from '../../utils/method'
import * as LoginService from './service';

let selfInterval = null;

export default {
    namespace: 'Login',
    state: {
        phone: '',
        msgCode: '',
        errorMessage: '',
        toggeleError:false,
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
        *countDown({},{call,select,put}){

            let btnDisp = yield select(state => {
                return state.Login.sendMessageBtnDisp
            });
            if(btnDisp.indexOf('s')<0){
                return;
            }
            let time = btnDisp.split('s')[0];
            if (time == 0) {
                window.clearInterval(selfInterval);
                btnDisp = '重新发送'
            } else {
                btnDisp = Number(time) - 1 + 's重发'
            }
            yield  put({
                type: 'changeSendMessageBtnDisp',
                payload: {value: btnDisp}
            });


        },
        *sendMessage({}, {call,select,put}){

            let phone = null,sendMessageBtn = null;
            yield select(state => {
                phone = state.Login.phone;
                sendMessageBtn = state.Login.sendMessageBtnDisp;
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

            const data = yield call(LoginService.sendMessageCode, {phone});
            if(data.status == 0){
                yield  put({
                    type: 'changeSendMessageBtnDisp',
                    payload: {value:'60s重发'}
                });

                var generator = countDown();
                selfInterval = setInterval(()=>{
                    generator.next();
                },1000);
            }else{
                yield  put({
                    type: 'showError',
                    payload: {msg: data.msg}
                });
            }

        },
        *login({payload:{value}}, {call,select,put}){
            yield put({
                type: 'changeMsgCode',
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