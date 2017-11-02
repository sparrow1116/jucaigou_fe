/**
 * Created by zhangyj on 2017/11/1.
 */
import { Toast, Flex, WhiteSpace,List, InputItem, Button,Modal } from 'antd-mobile';
import React, { Component } from 'react'
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import Header from '../../../../common_components/head/head'

import Const from '../../../../utils/constData'

import SelfList from './list'

import styles from './orderList.css'
const alert = Modal.alert;

class OrderListComponent extends Component {
    constructor(props) {
        super(props);
    }
    logout(){
        alert('注销','您确认返回登录页吗？',[
            {text:'取消',onPress:()=>{}},
            {text:'确认',onPress:()=>{
                window.localStorage.setItem(Const.STORE_USER_INFO,'');
                this.props.dispatch(routerRedux.push({
                    pathname: '/'
                }))
            }}
        ])
    }
    render(){
        return(
            <div>
                <Header content="我的" leftBtn={{text:'注销',action:this.logout.bind(this)}}></Header>
                <div className={styles.content}>
                    <SelfList {...this.props}></SelfList>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { list,loading,hasMore} = state.order;
    return {
        list,
        loading,
        hasMore
    };
}

export default connect(mapStateToProps)(OrderListComponent);