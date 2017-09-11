/**
 * Created by renwj on 2017/8/3.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './Tab.css';
import BankList from '../pages/bankList/component/bankList';



function bankList({ location }) {
    return (
        <div >
            <BankList />
        </div>
    );
}

export default connect()(bankList);
