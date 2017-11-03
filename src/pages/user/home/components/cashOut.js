/**
 * Created by zhangyj on 2017/11/3.
 */
import { Toast, Flex, WhiteSpace,List, InputItem, Button,Modal } from 'antd-mobile';
import React, { Component } from 'react'
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import Header from '../../../../common_components/head/head'

import Const from '../../../../utils/constData'
import * as method from '../../../../utils/method'

import styles from './cashOut.css'

class CashOutComponent extends Component {
    constructor(props) {
        super(props);
    }

    logout() {
        alert('注销', '您确认返回登录页吗？', [
            {
                text: '取消', onPress: ()=> {
            }
            },
            {
                text: '确认', onPress: ()=> {
                window.localStorage.setItem(Const.STORE_USER_INFO, '');
                this.props.dispatch(routerRedux.push({
                    pathname: '/'
                }))
            }
            }
        ])
    }
    render(){
        console.log('>>>>>> props');
        console.log(this.props);
        return(
            <div>
                <Header content="我的" leftBtn={{text:'注销',action:this.logout.bind(this)}}></Header>
                <div className={styles.content}>
                    <div className={styles.name}>{this.props.fundsInfo.name}</div>
                    <div className={styles.mobile}>{this.props.userInfo.mobile}</div>
                    <div className={styles.attation}>预计1-3个工作日到账您绑定的银行卡账户</div>
                    <div className={styles.line}>
                        <div className={styles.key}>当前余额</div>
                        <div className={styles.value}>{method.formatMoney(this.props.fundsInfo.balance)}</div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.key}>提现金额</div>
                        <div className={styles.value}>
                            <input type="number"
                                   onChange={(e)=>{
                                        this.props.dispatch({
                                            type:'user/changeCashOut',
                                            payload:{
                                                data:e.target.value
                                            }
                                        })
                                   }}
                                   value={this.props.cashOut || ''} placeholder="请输入提现金额" />
                        </div>
                    </div>
                    <button onClick={
                        ()=>{
                            this.props.dispatch({
                                type:'user/doCashOut'
                            })
                        }

                    } className={styles.okBtn}>确定</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {cashOut,fundsInfo,userInfo} = state.user;
    return {
        cashOut,
        userInfo,
        fundsInfo
    };
}
export default connect(mapStateToProps)(CashOutComponent);