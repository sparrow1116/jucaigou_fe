/**
 * Created by zhangyj on 2017/11/1.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import UserComponent from '../pages/user/home/components/user';


function Announcement({ location }) {
    return (
        <div>
            <UserComponent />
        </div>
    );
}

export default connect()(Announcement);