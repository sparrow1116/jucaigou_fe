/**
 * Created by zhangyj on 2017/10/16.
 */
import { Toast, Flex, WhiteSpace,List, InputItem, Button } from 'antd-mobile';
import React, { Component } from 'react'
import { routerRedux } from 'dva/router';

import SelfList from './listview'
import styles from './lobby.css'
import Header from '../../../common_components/head/head'
//import SelfTabBar from './tabbar'
import { connect } from 'dva';

class LobbyComponent extends Component {
    constructor(props) {
        super(props);
    }

    gotoHistoryPage(){
        this.props.dispatch(routerRedux.push({
            pathname: '/home/history'
        }));
    }

    render(){
        return (<div>
            <Header content="今日申请"></Header>
            <div className={styles.content}>
                <div className={styles.headLine}>
                    <span>列表</span>
                    <button onClick={this.gotoHistoryPage.bind(this)}>走势图</button>
                </div>
                <SelfList {...this.props}></SelfList>

            </div>
        </div>)
    }
}

function mapStateToProps(state) {
    const {productArr,pageInfo} = state.lobby;
    return {
        productArr,
        pageInfo
    };
}
export default connect(mapStateToProps)(LobbyComponent);
