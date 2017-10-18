/**
 * Created by zhangyj on 2017/10/18.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import LobbyComponent from '../pages/lobby/components/lobby';

function Home({ location }) {
    return (
        <div>
            <LobbyComponent />
        </div>
    );
}

export default connect()(Home);