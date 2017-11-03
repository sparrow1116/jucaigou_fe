/**
 * Created by zhangyj on 2017/11/3.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import CashOutComponent from '../pages/user/home/components/cashOut';


function Announcement({ location }) {
    return (
        <div>
            <CashOutComponent />
        </div>
    );
}

export default connect()(Announcement);