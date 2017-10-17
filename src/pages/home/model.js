/**
 * Created by zhangyj on 2017/10/12.
 */
import * as method from '../../utils/method'
import { routerRedux } from 'dva/router';

export default {
    namespace: 'Lobby',
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