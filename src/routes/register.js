/**
 * Created by zhangyj on 2017/10/10.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import RegisterComponent from '../pages/register/components/register';

import loginbg from '../assets/login/bg_login.png'

const bgstyle = {
    height:'100%',
    backgroundImage: 'url(' + loginbg + ')'
}


function Login({ location }) {
    return (
        <div style={bgstyle}>
            <RegisterComponent />
        </div>
    );
}

export default connect()(Login);