/**
 * Created by zhangyj on 2017/10/26.
 */
import { Toast, Flex, WhiteSpace,List, InputItem, Button } from 'antd-mobile';
import React, { Component } from 'react'
import { routerRedux } from 'dva/router';
import { connect } from 'dva';

import Header from '../../../../common_components/head/head'
import SelfList from './listview'

import styles from './history.css'

class HistoryComponent extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (<div>
            <Header content="今日申请"></Header>
            <div className={styles.content}>
                <div className={styles.headLine}>
                    <span>列表</span>
                </div>
                <SelfList {...this.props}></SelfList>

            </div>
        </div>)
    }
}

function mapStateToProps(state) {
    const {historyArr,loading,hasMore} = state.history;
    return {
        historyArr,
        loading,
        hasMore
    };
}
export default connect(mapStateToProps)(HistoryComponent);