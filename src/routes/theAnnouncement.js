/**
 * Created by zhangyj on 2017/10/31.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import Announcement from '../pages/announcement/components/theAnnouncement';


function Announce({ location }) {
    return (
        <div>
            <Announcement />
        </div>
    );
}

export default connect()(Announce);