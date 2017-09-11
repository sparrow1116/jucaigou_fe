/**
 * Created by renwj on 2017/8/3.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './Tab.css';
import HelpCenter from '../pages/helpCenter/component/helpCenter';



function bankList({ location }) {
    return (
        <div >
            <HelpCenter />
        </div>
    );
}

export default connect()(bankList);
