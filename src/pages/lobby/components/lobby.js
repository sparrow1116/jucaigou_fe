/**
 * Created by zhangyj on 2017/10/16.
 */
import { Toast, Flex, WhiteSpace,List, InputItem, Button } from 'antd-mobile';
import React, { Component } from 'react'

import Header from '../../../common_components/head/head'
//import SelfTabBar from './tabbar'
import { connect } from 'dva';

class LobbyComponent extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (<div>
            <Header content="今日申请"></Header>
            <div>
                <div>
                    /*<span>聚买列表</span>
                    <button>红黑走势图</button>*/
                </div>


            </div>
        </div>)
    }
}

function mapStateToProps(state) {
    const {errorMessage} = state.lobby;
    return {
        errorMessage
    };
}
export default connect(mapStateToProps)(LobbyComponent);
