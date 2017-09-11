/**
 * Created by zyj on 2017/9/5.
 */
import React, { Component } from 'react'
import { List, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

class LoginForm extends Component {
    constructor(props) {
	super(props);
    }

    render() {

	const {getFieldProps} = this.props.form;

	return (<div>
	    <InputItem
		{...getFieldProps('phone')}
		type="phone"
		placeholder="186 1234 1234"
	    >手机号码</InputItem>
	    <InputItem
		{...getFieldProps('password')}
		type="password"
		placeholder="****"
	    >密码</InputItem>

	    <Button
		onClick={() => {
		    console.log('>>> submit');
		}}
	    >
		登录
	    </Button>

	</div>)

    }
}

export default createForm()(LoginForm)