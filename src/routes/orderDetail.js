/**
 * Created by zhangyj on 2017/11/2.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import OrderDetailComponent from '../pages/user/order/components/orderDetail';


function Announcement({ location }) {
    return (
        <div>
            <OrderDetailComponent />
        </div>
    );
}

export default connect()(Announcement);