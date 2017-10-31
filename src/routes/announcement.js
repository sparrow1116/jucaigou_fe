/**
 * Created by zhangyj on 2017/10/30.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import AnnouncementList from '../pages/announcement/components/announcement';


function Announcement({ location }) {
    return (
        <div>
            <AnnouncementList />
        </div>
    );
}

export default connect()(Announcement);