/**
 * Created by zhangyj on 2017/11/1.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import Message from '../pages/message/components/theMessage';


function Announce({ location }) {
    return (
        <div>
            <Message />
        </div>
    );
}

export default connect()(Announce);