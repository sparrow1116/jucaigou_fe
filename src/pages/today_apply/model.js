import * as TabService from './service';

const PAGESIZE = 5;
const USERID = 'xxx';

export default {
    namespace: 'Tabs',
    state: {
        allData: {
            list:[],
            isLoading:0,
            pageNum: null,
            pageSize: null,
            pages:null,
            total:null,
            refreshing:false
        },
        loanedData: {
            list:[],
            isLoading:0,
            pageNum: null,
            pageSize: null,
            pages:null,
            total:null,
            refreshing:false
        },
        loaningData: {
            list:[],
            isLoading:0,
            pageNum: null,
            pageSize: null,
            pages:null,
            total:null,
            refreshing:false
        },
        currentTab:0,
        init:true
    },
    reducers: {
        save(state, { payload: { data: list, total, page } }) {
            return {...state, list, total, page};
        },
        changedTab(state,{payload:{currentTab}}){
            state.currentTab = Number(currentTab);
            return {...state}
        },
        startRefreshing(state,{payload:{currentTab}}){
            switch (Number(currentTab)){
                case 0:
                    state.allData.refreshing = true;
                    return {...state};
                case 1:
                    state.loanedData.refreshing = true;
                    return {...state};
                case 2:
                    state.loaningData.refreshing = true;
                    return {...state};
                default:
                    return {...state};
            }
        },
        endCall(state,{payload:{currentTab}}){
            state.init = false;
            switch (Number(currentTab)){
                case 0:
                    state.allData.isLoading = 0;
                    state.allData.refreshing = false;
                    return {...state};
                case 1:
                    state.loanedData.isLoading = 0;
                    state.loanedData.refreshing = false;
                    return {...state};
                case 2:
                    state.loaningData.isLoading = 0;
                    state.loaningData.refreshing = false;
                    return {...state};
                default:
                    return {...state};
            }
        },
        startLoad(state,{payload:{currentTab}}){
            switch (Number(currentTab)){
                case 0:
                    state.allData.isLoading = 1;
                    return {...state};
                case 1:
                    state.loanedData.isLoading = 1;
                    return {...state};
                case 2:
                    state.loaningData.isLoading = 1;
                    return {...state};
                default:
                    return {...state};
            }
        },
        refresh(state,{payload:{data,currentTab}}){
            state.init = false;
            switch (Number(currentTab)){
                case 0:
                    data.refreshing = false;
                    return Object.assign({},state,{allData:Object.assign({},state.allData,data)});
                case 1:
                    data.refreshing = false;
                    return Object.assign({},state,{loanedData:Object.assign({},state.loanedData,data)});
                case 2:
                    data.refreshing = false;
                    return Object.assign({},state,{loaningData:Object.assign({},state.loaningData,data)});
                default:
                    return state;
            }
        },
        load(state,{payload:{data,currentTab}}){
            switch (currentTab){
                case 0:
                    if(data.pageNum ==  data.pages){
                        data.isLoading = 2;
                    }else{
                        data.isLoading = 0;
                    }
                    data.init = false;
                    let allList = state.allData.list.concat(data.list);
                    let allData = Object.assign({},state.allData,data)
                    allData.list = allList;
                    return Object.assign({},state,{allData:allData});
                case 1:
                    if(data.pageNum ==  data.pages){
                        data.isLoading = 2;
                    }else{
                        data.isLoading = 0;
                    }
                    data.init = false;
                    let loanedList = state.loanedData.list.concat(data.list);
                    let loanedData = Object.assign({},state.loanedData,data)
                    loanedData.list = loanedList;
                    return Object.assign({},state,{loanedData:loanedData});
                case 2:
                    if(data.pageNum ==  data.pages){
                        data.isLoading = 2;
                    }else{
                        data.isLoading = 0;
                    }
                    data.init = false;
                    let loaningList = state.loaningData.list.concat(data.list);
                    let loaningData = Object.assign({},state.loaningData,data)
                    loaningData.list = loaningList;
                    return Object.assign({},state,{loaningData:loaningData});
                default:
                    return state;
            }
        }
    },
    effects: {
        *actionRefresh({payload:{currentTab}},{call,put}){
            console.log('>>>>start actionRefresh>>>>');
            const { data } = yield call(TabService.fetch, {
                index:0,
                orderStatus:currentTab,
                size:PAGESIZE,
                userId:USERID
            });
            if(data == null){
                yield put({
                    type: 'endCall',
                    payload: {
                        currentTab
                    },
                });
                return;
            }

            yield put({
                type: 'refresh',
                payload: {
                    data,
                    currentTab
                },
            });
        },
        *changeTab({payload:{currentTab}},{call,select,put}){
            console.log('>>>>start changeTab>>>>');
            yield put({
                type:'changedTab',
                payload:{
                    currentTab
                }
            });
        },
        *startFirstRefresh(action,{call,select,put}){
            console.log('>>>>start startRefresh>>>>');
            let currentTab =0;
            yield put({
                type:'actionRefresh',
                payload:{
                    currentTab
                }
            });
             currentTab =1;
            yield put({
                type:'actionRefresh',
                payload:{
                    currentTab
                }
            });
           currentTab =2;
            yield put({
                type:'actionRefresh',
                payload:{
                    currentTab
                }
            });
        },
        *startRefresh(action,{call,select,put}){
            console.log('>>>>start startRefresh>>>>');
             let currentTab = yield select(state =>{return state.Tabs.currentTab ? state.Tabs.currentTab : 0});
            yield put({
                type:'startRefreshing',
                payload:{
                    currentTab
                }
            });
            yield put({
                type:'actionRefresh',
                payload:{
                    currentTab
                }
            })
        },
        *loadData(action,{call,select,put}){
            console.log('>>>>start loadData>>>>');
            let tabState = yield select(state =>{return state.Tabs});
            yield put({
                type:'startLoad',
                payload:{
                    currentTab:tabState.currentTab
                }
            });
            let index = 0;
            switch (tabState.currentTab){
                case 0:
                    index = tabState.allData.pageNum++;
                    break;
                case 1:
                    index = tabState.loanedData.pageNum++;
                    break;
                case 2:
                    index = tabState.loaningData.pageNum++;
                    break;
                default:
                    break;
            }
            const { data } = yield call(TabService.fetch, {
                index:index,
                orderStatus:tabState.currentTab,
                size:PAGESIZE,
                userId:USERID
            });
            if(!data){
                yield put({
                    type: 'endCall',
                    payload: {
                        currentTab
                    },
                });
                return;
            }
            yield put({
                type:'load',
                payload:{
                    currentTab:tabState.currentTab,
                    data
                }
            });
        },

    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/users') {
                    dispatch({type: 'fetch', payload: query});
                }
            });
        },
    },
};
