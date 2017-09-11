/**
 * Created by zyj on 2017/9/5.
 */
import React from 'react';
import { connect } from 'dva';
// import styles from './Tab.css';
import LoginComponent from '../pages/login/components/login';

import loginbg from '../assets/login/bg_login.png'

const bgstyle = {
    height:'100%',
    backgroundImage: 'url(' + loginbg + ')'
}


function Login({ location }) {
    return (
	<div style={bgstyle}>
	    <LoginComponent />
	</div>
    );
}

export default connect()(Login);