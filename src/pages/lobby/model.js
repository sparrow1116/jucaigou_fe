/**
 * Created by zhangyj on 2017/10/18.
 */
import * as method from '../../utils/method'
import { routerRedux } from 'dva/router';

export default {
    namespace: 'lobby',
    state: {
        errorMessage:''
    },
    reducers: {
    },
    effects: {
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