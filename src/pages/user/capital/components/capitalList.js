/**
 * Created by zhangyj on 2017/11/2.
 */
import { Toast, Flex, WhiteSpace,List, InputItem, Button,Modal } from 'antd-mobile';
import React, { Component } from 'react'
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import Header from '../../../../common_components/head/head'

import Const from '../../../../utils/constData'
import * as method from '../../../../utils/method'

import SelfList from './list'

import styles from './capitalList.css'
const alert = Modal.alert;

class CapitalListComponent extends Component {
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
    componentDidMount(){
        this.props.dispatch({
            type:'capital/getSummary'
        })
    }
    render(){
        return(
            <div>
                <Header content="我的" leftBtn={{text:'注销',action:this.logout.bind(this)}}></Header>
                <div className={styles.content}>
                    <div className={styles.summary}>
                       <div className={styles.line}>
                           <div className={styles.key}>当前余额</div>
                           <div className={styles.value}>{method.formatMoney(this.props.summary.currentRemain)}元</div>
                       </div>
                        <div className={styles.line}>
                            <div className={styles.key}>未开奖投入</div>
                            <div className={styles.value}>{method.formatMoney(this.props.summary.inOrder)}元</div>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.key}>总提现金额</div>
                            <div className={styles.value}>{method.formatMoney(this.props.summary.outPrice)}元</div>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.key}>总充值金额</div>
                            <div className={styles.value}>{method.formatMoney(this.props.summary.allInPrice)}元</div>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.key}>总盈利情况</div>
                            <div className={styles.value}>{method.formatMoney(this.props.summary.profitPrice)}元</div>
                        </div>
                    </div>
                    <SelfList {...this.props}></SelfList>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { list,loading,hasMore,summary} = state.capital;
    return {
        list,
        loading,
        hasMore,
        summary
    };
}

export default connect(mapStateToProps)(CapitalListComponent);