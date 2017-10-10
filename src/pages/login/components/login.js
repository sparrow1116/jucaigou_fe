/**
 * Created by zyj on 2017/9/5.
 */
import { Toast, Flex, WhiteSpace,List, InputItem, Button } from 'antd-mobile';
import React, { Component } from 'react'
import { connect } from 'dva';

import styles from './login.css';

import { createForm } from 'rc-form';
import { routerRedux } from 'dva/router';

import logoPic from '../../../assets/login/login_logo.png'


class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    onPhoneChange(value) {
        this.props.dispatch({
            type: 'Login/phoneChange',
            payload: {value}
        })
    }

    onMsgChange(value) {
        this.props.dispatch({
            type: 'Login/msgChange',
            payload: {value}
        })
    }

    sendMessage() {
        this.props.dispatch({
            type: 'Login/sendMessage'
        })
    }

    login() {
        this.props.dispatch({
            type: 'Login/login'
        })
    }

    render() {

	const {getFieldProps} = this.props.form;

	return (<div style={{position: "relative",width:'85%',marginTop:'10%'}}>
	    <InputItem
		    className={styles.input_item}
		    {...getFieldProps('phone')}
		    type="phone"
		    placeholder="11位手机号"
		    maxLength={13}
		    value={this.props.phone}
		    onChange={this.onPhoneChange.bind(this)}>
        </InputItem>
	    <InputItem
		    className={styles.input_item}
		    {...getFieldProps('password')}
		    type="number"
		    maxLength={4}
		    value={this.props.msgCode}
		    onChange={this.onMsgChange.bind(this)}
		    placeholder="4位数字">
        </InputItem>
	    <span onClick={this.sendMessage.bind(this)} className={styles.send_message_btn}>
		    {this.props.sendMessageBtnDisp}
	    </span>

	    <Button
		    className={styles.login_btn}
		    onClick={this.login.bind(this)}>
		    登录
	    </Button>
	</div>)
    }
}

LoginForm = createForm()(LoginForm)



class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.toggeleError = false;
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.toggeleError != nextProps.toggeleError){
            Toast.info(nextProps.errorMessage);
        }
        return nextProps;
    }

    gotoRegisterPage() {
        this.props.dispatch(routerRedux.push({
            pathname: '/register'
        }));
    }

    render() {
        return(<div>
            <Flex justify="center" direction="column">
                <img className={styles.logo_pic} src={logoPic} />
                {/*<div className={styles.logo_title}>买单侠商户通</div>*/}
                <LoginForm
                    {...this.props}
                    ></LoginForm>
                <div onClick={this.gotoRegisterPage.bind(this)} className={styles.register_btn}>立即注册</div>
            </Flex>
        </div>)
        }
}

function mapStateToProps(state) {
    const { toggeleError,errorMessage,phone,msgCode,sendMessageBtnDisp } = state.Login;
    return {
        toggeleError,
        errorMessage,
        phone,
        msgCode,
        sendMessageBtnDisp
    };
}

export default connect(mapStateToProps)(LoginComponent);