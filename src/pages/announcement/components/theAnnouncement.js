/**
 * Created by zhangyj on 2017/10/31.
 */
import React, { Component } from 'react'
import { connect } from 'dva';

import Header from '../../../common_components/head/head'
import styles from './theAnnouncement.css'

import * as method from '../../../utils/method'

class theAnnouncement extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        console.log('>>>> selectAnnouncement');
        console.log(this.props.selectAnnouncement);
        return(
            <div>
                <Header content="系统公告"></Header>
                <div className={styles.content}>
                    <div className={styles.announceContent}>
                        <div>{this.props.selectAnnouncement.title}</div>
                        <div>{method.Format(new Date(this.props.selectAnnouncement.date),'yyyy-MM-dd')}聚财购</div>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { selectAnnouncement} = state.Announcement;
    return {
        selectAnnouncement
    };
}

export default connect(mapStateToProps)(theAnnouncement);