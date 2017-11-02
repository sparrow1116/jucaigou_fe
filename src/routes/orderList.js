/**
 * Created by zhangyj on 2017/11/1.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import OrderListComponent from '../pages/user/order/components/orderList';


function Announcement({ location }) {
    return (
        <div>
            <OrderListComponent />
        </div>
    );
}

export default connect()(Announcement);