/**
 * Created by zhangyj on 2017/10/12.
 */
import * as method from '../../utils/method'
import { routerRedux } from 'dva/router';

export default {
    namespace: 'home',
    state: {
        errorMessage: '',
        toggeleError:false,
    },
    reducers: {
        showErrorData(state, {payload:{msg}}){
            state.errorMessage = msg;
            state.toggeleError = !state.toggeleError;
            return {...state};
        }
    },
    effects: {
        *showError({payload:{msg}},{call,select,put}){
            yield put({
                type:'showErrorData',
                payload:{
                    msg
                }
            })
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