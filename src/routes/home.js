/**
 * Created by zhangyj on 2017/10/10.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import HomeComponent from '../pages/home/components/home';


function Home({ location }) {
    return (
        <div>
            <HomeComponent />
        </div>
    );
}

export default connect()(Home);