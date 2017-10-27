/**
 * Created by zhangyj on 2017/10/18.
 */
import * as method from '../../../utils/method'
import { routerRedux,hashHistory } from 'dva/router';
import * as ProductService from './service';

export default {
    namespace: 'lobby',
    state: {
        showConfirm:false,
        loading:false,
        hasMore:true,
        attionMsg:'',
        pageInfo:{
            pageSize:8,
            pageIndex:1,
            totalCount:9999999
        },
        productInfo:{

        },
        buyInfo:{
            count:'',
            checked:false
        },
        productArr:[

        ]
    },
    reducers: {
	    startLoad(state, {}){
            state.loading = true;
            return{...state}
        },
        showConfirm(state,{}){
            state.showConfirm = !state.showConfirm;
            return{...state}
        },
        refreshProductDetail(state,{payload:{data}}){
            state.productInfo = data;
            return {...state}
        },
        countChange(state,{payload:{value}}){
            state.buyInfo.count = value;
            return {...state}
        },
        checkedChanged(state,{payload:{checked}}){
            state.buyInfo.checked = checked;
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
        refreshAttionMsg(state,{payload:{msg}}){
            state.attionMsg = msg;
            return {...state};
        }
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
        },
        *changeCount({payload:{value}},{call,select,put}){
            yield put({
                type:'countChange',
                payload:{
                    value
                }
            })
        },
        *changeChecked({payload:{checked}},{call,select,put}){
            yield put({
                type:'checkedChanged',
                payload:{
                    checked
                }
            })
        },
        *confirmBuy(action,{call,select,put}){
            let buyInfo = null, currentProductId = null;
            yield select(state =>{
                buyInfo = state.lobby.buyInfo;
                currentProductId = state.lobby.productInfo.id;
            });

            const result = yield call(ProductService.buyProduct, {id:currentProductId,
                userId: JSON.parse(window.localStorage.getItem('jucaigou_user_info')).id,
                count:buyInfo.count});

            if(result.status == 0){

                yield  put({
                    type: 'home/showError',
                    payload: {msg: '购买成功'}
                });
                hashHistory.goBack();
            }else{
                yield  put({
                    type: 'home/showError',
                    payload: {msg: result.msg}
                });
                return;
            }

        },
        *buyProduct(action,{call,select,put}){
            let buyInfo = yield select(state =>{return state.lobby.buyInfo});
            if(!buyInfo.checked){
                yield put({
                    type:'home/showError',
                    payload:{
                        msg:'没有勾选已阅读聚财购服务协议'
                    }
                })
                return;
            }
            if(!method.isRegData(buyInfo.count)){
                yield put({
                    type:'home/showError',
                    payload:{
                        msg:'参与份数填写错误'
                    }
                })
                return;
            }

            yield put({type:'showConfirm'})
        },
        *getAttionMsg(action,{call,select,put}){
            const result = yield call(ProductService.getAttionMsg, {});
            if(result.status == 0){
                yield put({
                    type:'refreshAttionMsg',
                    payload:{
                        msg:result.data
                    }
                })
            }else{
                yield  put({
                    type: 'home/showError',
                    payload: {msg: result.msg}
                });
            }
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname == '/home/productDetail') {
                    dispatch({type: 'showProductDetail', payload: {id:query.id}});
                }
            });
        },
    },
}