/**
 * Created by zhangyj on 2017/10/31.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import Message from '../pages/message/components/message';


function Announcement({ location }) {
    return (
        <div>
            <Message />
        </div>
    );
}

export default connect()(Announcement);