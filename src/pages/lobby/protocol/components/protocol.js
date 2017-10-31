/**
 * Created by zhangyj on 2017/10/27.
 */
import React, { Component } from 'react';
import { ListView } from 'antd-mobile';

import styles from './protocol.css'
import Header from '../../../../common_components/head/head'

export default class ProtocolComponent extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <Header content="今日申请"></Header>
                <div className={styles.content}>
                    <h1>What Fuck</h1>
                    <p>没什么 没什么</p>
                </div>
            </div>
        )
    }
}