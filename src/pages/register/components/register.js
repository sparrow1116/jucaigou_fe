/**
 * Created by zhangyj on 2017/10/10.
 */
import { Toast, Flex, WhiteSpace,List, InputItem, Button } from 'antd-mobile';
import React, { Component } from 'react'
import { connect } from 'dva';

import { createForm } from 'rc-form';
import { routerRedux } from 'dva/router';

import styles from './register.css';


import logoPic from '../../../assets/login/login_logo.png'


class RegisterForm extends Component {
    constructor(props) {
        super(props);
    }
    onPhoneChange(value){
        this.props.dispatch({
            type: 'Register/phoneChange',
            payload: {value}
        })
    }
    onMsgChange(value){
        this.props.dispatch({
            type: 'Register/msgChange',
            payload: {value}
        })
    }
    sendMessage(){
        this.props.dispatch({
            type: 'Register/sendMessage'
        })
    }

    onInviteCodeChange(value){
        this.props.dispatch({
            type: 'Register/inviteCodeChange',
            payload: {value}
        })
    }
    register(){
        this.props.dispatch({
            type: 'Register/register'
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
                type="number"
                maxLength={4}
                value={this.props.msgCode}
                onChange={this.onMsgChange.bind(this)}
                placeholder="4位数字">
            </InputItem>
            <span onClick={this.sendMessage.bind(this)} className={styles.send_message_btn}>
                {this.props.sendMessageBtnDisp}
            </span>

            <InputItem
                className={styles.input_item}
                type="text"
                placeholder="推荐码"
                maxLength={50}
                value={this.props.inviteCode}
                onChange={this.onInviteCodeChange.bind(this)}>
            </InputItem>

            <Button
                className={styles.login_btn}
                onClick={this.register.bind(this)}>
                注册
            </Button>
        </div>)
    }
}


RegisterForm = createForm()(RegisterForm)
class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.toggeleError = false;
    }

    gotoLoginPage(){
        window.history.go(-1);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.props.toggeleError != nextProps.toggeleError){
            Toast.info(nextProps.errorMessage);
        }
        return nextProps;
    }

    render() {
        return(<div>
            <Flex justify="center" direction="column">
                <img className={styles.logo_pic} src={logoPic} />
                <RegisterForm
                    {...this.props}
                ></RegisterForm>
                <div onClick={this.gotoLoginPage.bind(this)} className={styles.register_btn}>已有账号,立即登录</div>
            </Flex>
        </div>)
    }

}

function mapStateToProps(state) {
    const { phone, msgCode, inviteCode, toggeleError,errorMessage,sendMessageBtnDisp} = state.Register;
    return {
        phone,
        msgCode,
        inviteCode,
        toggeleError,
        errorMessage,
        sendMessageBtnDisp
    };
}

export default connect(mapStateToProps)(RegisterComponent);