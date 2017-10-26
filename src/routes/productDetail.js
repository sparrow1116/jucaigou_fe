/**
 * Created by zhangyj on 2017/10/26.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import ProductDetailComponent from '../pages/lobby/list/components/detail';

function Detail({ location }) {
    return (
        <div>
            <ProductDetailComponent />
        </div>
    );
}

export default connect()(Detail);