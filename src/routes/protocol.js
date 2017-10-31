/**
 * Created by zhangyj on 2017/10/27.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import ProtocolComponent from '../pages/lobby/protocol/components/protocol';

function Protocol({ location }) {
    return (
        <div>
            <ProtocolComponent />
        </div>
    );
}

export default connect()(Protocol);