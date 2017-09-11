/**
 * Created by zyj on 2017/9/5.
 */


import * as method from '../../utils/method'

export default {
    namespace: 'Login',
    state: {
	phone:'',
	msgCode:'',
	errorMessage:'',
	sendMessageBtnDisp:'免费获取'
    },
    reducers: {
	changePhone(state,{payload:{value}}){
	    state.phone = value;
	    return {...state}
	},
	changeMsgCode(state,{payload:{value}}){
	    state.msgCode = value;
	    return {...state}
	},
	showError(state,{payload:{msg}}){
	    state.msgCode = msg;
	    return {...state};
	}
    },
    effects: {
	*phoneChange({payload:{value}},{call,select,put}){
	    yield put({
		type: 'changePhone',
		payload:{
		    value
		}
	    });
    	},
	*msgChange({payload:{value}},{call,select,put}){
	    yield put({
		type: 'changeMsgCode',
		payload:{
		    value
		}
	    });
	},
	*sendMessage({payload:{value}},{call,select,put}){

	    let sendMessageBtnDisp = null;
	    let phone = null;
	    yield select(state =>{
		sendMessageBtnDisp = state.Login.sendMessageBtnDisp;
		phone = state.Login.phone;
	    });
	    // if(sendMessageBtnDisp == '免费获取')
	    yield  put({
	        type:'showError',
		payload:{
	            msg:'手机没有注册'
		}
	    });
	    /*yield put({
		type: 'changeMsgCode',
		payload:{
		    value
		}
	    });*/
	},
	*login({payload:{value}},{call,select,put}){
	    yield put({
		type: 'changeMsgCode',
		payload:{
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