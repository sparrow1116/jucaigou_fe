/**
 * Created by zhangyj on 2017/10/18.
 */
import * as method from '../../../utils/method'
import { routerRedux } from 'dva/router';
import * as ProductService from './service';

export default {
    namespace: 'lobby',
    state: {
        loading:false,
        hasMore:true,
        pageInfo:{
            pageSize:8,
            pageIndex:1,
            totalCount:9999999
        },
        productInfo:{

        },
        productArr:[

        ]
    },
    reducers: {
	    startLoad(state, {}){
            state.loading = true;
            return{...state}
        },
        refreshProductDetail(state,{payload:{data}}){
            state.productInfo = data;
            return {...state}
        },

        changeData(state, {payload:{data}  }) {
            state.pageInfo = data.pageInfo;
            state.productArr = state.productArr.concat(data.productArr);
            state.loading = false;
            if(state.pageInfo.pageIndex * state.pageInfo.pageSize >= state.pageInfo.totalCount){
                state.hasMore = false
            }
            return {...state};
        },
    },
    effects: {
        *getProductList(action,{call,select,put}){
            let pageInfo = yield select(state =>{return state.lobby.pageInfo});
            if(pageInfo.pageIndex * pageInfo.pageSize < pageInfo.totalCount){
                yield put({
                    type:'startLoad'
                })
                const { data } = yield call(ProductService.getProductList, {index: ++pageInfo.pageIndex,pageSize: pageInfo.pageSize});
                yield put({
                    type: 'changeData',
                    payload: {
                        data
                    },
                });
            }
        },
        *showProductDetail({payload:{id}},{call,select,put}){
            const {data} = yield call(ProductService.getProductDetail, {id});
            yield put({
                type:'refreshProductDetail',
                payload:{
                    data
                }
            })
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                console.log('>>>>>>>>>>>>');
                if (pathname == '/home/productDetail') {
                    dispatch({type: 'showProductDetail', payload: {id:query.id}});
                }
            });
        },
    },
}