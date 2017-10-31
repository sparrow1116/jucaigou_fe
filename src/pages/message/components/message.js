/**
 * Created by zhangyj on 2017/10/31.
 */
import React, { Component } from 'react'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import { List } from 'antd-mobile';
const Item = List.Item;
import * as method from '../../../utils/method'
import Header from '../../../common_components/head/head'

import styles from './message.css'

import MessageList from './list'

class Message extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        /*this.props.dispatch({
            type: 'Announcement/getMessage'
        })*/
    }
    deleteAllMessage(){

    }
    render(){
        return(
            <div>
                <Header content="消息通知"></Header>
                <div className={styles.content}>
                    <div className={styles.headLine}>
                        <span>消息列表</span>
                        <button onClick={this.deleteAllMessage.bind(this)}>删除消息</button>
                    </div>
                    <MessageList {...this.props}></MessageList>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { list} = state.message;
    return {
        list
    };
}

export default connect(mapStateToProps)(Message);