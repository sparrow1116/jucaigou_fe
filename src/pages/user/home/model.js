/**
 * Created by zhangyj on 2017/11/1.
 */
import * as method from '../../../utils/method'
import * as Const from '../../../utils/constData'
import { routerRedux } from 'dva/router';
import * as UserService from './service';

export default {
    namespace: 'user',
    state: {
        userInfo:{
            mobile:''
        },
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
        setBankInfo(state,{payload:{data}}){
            state = Object.assign({},state,{fundsInfo:Object.assign({},state.fundsInfo,data)});
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