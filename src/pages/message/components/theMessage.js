/**
 * Created by zhangyj on 2017/11/1.
 */
import React, { Component } from 'react'
import { connect } from 'dva';

import Header from '../../../common_components/head/head'
import styles from './theMessge.css'

import * as method from '../../../utils/method'


class TheMessage extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <Header content="消息通知"></Header>
                <div className={styles.content}>
                    <div className={styles.title}>{this.props.selectMessage.title}</div>
                    <div className={styles.subTitle}><span>{method.Format(new Date(this.props.selectMessage.date),'yyyy-MM-dd')}</span><span className={styles.self_span}>|</span><span>{this.props.selectMessage.mobile}</span></div>
                    <div className={styles.messageContent}>{this.props.selectMessage.content}</div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { selectMessage} = state.message;
    return {
        selectMessage
    };
}

export default connect(mapStateToProps)(TheMessage);