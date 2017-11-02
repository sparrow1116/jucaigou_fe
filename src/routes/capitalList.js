/**
 * Created by zhangyj on 2017/11/2.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import CapitalListComponent from '../pages/user/capital/components/capitalList';


function Announcement({ location }) {
    return (
        <div>
            <CapitalListComponent />
        </div>
    );
}

export default connect()(Announcement);