/**
 * Created by zhangyj on 2017/10/27.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import CalculateComponent from '../pages/lobby/calculate/components/calculate';

function Calculate({ location }) {
    return (
        <div>
            <CalculateComponent />
        </div>
    );
}

export default connect()(Calculate);
