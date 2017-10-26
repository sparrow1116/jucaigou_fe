/**
 * Created by zhangyj on 2017/10/26.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import HistoryComponent from '../pages/lobby/history/components/history';

function History({ location }) {
    return (
        <div>
            <HistoryComponent />
        </div>
    );
}

export default connect()(History);