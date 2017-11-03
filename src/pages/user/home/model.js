/**
 * Created by zhangyj on 2017/11/1.
 */
import * as method from '../../../utils/method'
import * as Const from '../../../utils/constData'
import { routerRedux ,hashHistory} from 'dva/router';
import * as UserService from './service';

export default {
    namespace: 'user',
    state: {
        userInfo:{
            mobile:''
        },
        cashOut:0,
        fundsInfo:{
            name:'***',
            bankCard: '',
            balance: 0
        }
    },
    reducers: {
        setUserInfo(state,{payload:{data}}){
            state.userInfo.mobile = data.mobile;
            return {...state};
        },
        changeCash(state,{payload:{data}}){
            state.cashOut = data;
            return {...state}
        },
        setBankInfo(state,{payload:{data}}){
            state = Object.assign({},state,{fundsInfo:Object.assign({},state.fundsInfo,data)});
            if(data.balance >= 100){
                state.cashOut = 100;
            }
            return{...state};
        },
        deleteBankCard(state,{}){
            state.fundsInfo.bankCard = '';
            return{...state};
        }
    },
    effects: {

        *initialData(actions,{put,select,call}){
            let strUserInfo = window.localStorage.getItem(Const.STORE_USER_INFO);
            let userInfo = {};
            if(!strUserInfo){
                return;
            }
            userInfo = JSON.parse(strUserInfo);
            yield put({
                type:'setUserInfo',
                payload:{data:userInfo}
            })
            const result = yield call(UserService.getBaseBankInfo,{userId:userInfo.id})
            if(result.status == 0){
                yield put({
                    type:'setBankInfo',
                    payload:{data:result.data}
                })
            }else{
                yield put({
                    type:'home/showError',
                    payload: {msg: result.msg}
                })
            }
        },
        *doCashOut(actions,{call,select,put}){
            let strUserInfo = window.localStorage.getItem(Const.STORE_USER_INFO);
            let userInfo = {};
            if(!strUserInfo){
                return;
            }
            let remainPrice = null, outPrice = null;
            yield select((state)=>{
                remainPrice = state.user.fundsInfo.balance;
                outPrice = state.user.cashOut;
            })

            if(outPrice>remainPrice){
                yield put({
                    type:'home/showError',
                    payload: {msg: '提现金额不能大于余额'}
                })
                return;
            }
            const result = yield call(UserService.cashOut,{userId:userInfo.id,price:outPrice});
            if(result.status == 0){
                yield put({
                    type:'home/showError',
                    payload: {msg: '提现成功'}
                })
                hashHistory.goBack();
            }else{
                yield put({
                    type:'home/showError',
                    payload: {msg: result.msg}
                })
            }

        },
        *changeCashOut({payload:{data}},{call,select,put}){
            yield put({
                type:'changeCash',
                payload:{data}
            })
        },
        *deleteCard(ations,{put,select,call}){
            let strUserInfo = window.localStorage.getItem(Const.STORE_USER_INFO);
            let userInfo = {};
            if(!strUserInfo){
                return;
            }
            const result = yield call(UserService.deleteCard,{userId:userInfo.id})
            if(result.status == 0){
                yield put({
                    type:'deleteBankCard'
                })
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

                /*if (pathname === '/home/cashOut') {

                }*/
            });
        },
    },
}