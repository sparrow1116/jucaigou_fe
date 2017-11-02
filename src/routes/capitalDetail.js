/**
 * Created by zhangyj on 2017/11/2.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import CapitalDetailComponent from '../pages/user/capital/components/capitalDetail';


function Announcement({ location }) {
    return (
        <div>
            <CapitalDetailComponent />
        </div>
    );
}

export default connect()(Announcement);