/**
 * Created by zhangyj on 2017/11/1.
 */
import { Toast, Flex, WhiteSpace,List, InputItem, Button,Modal } from 'antd-mobile';
import React, { Component } from 'react'
import { routerRedux } from 'dva/router';
import { connect } from 'dva';

const alert = Modal.alert;
import * as method from '../../../../utils/method'
import * as Const from '../../../../utils/constData'
const Item = List.Item;

import styles from './user.css'
import Header from '../../../../common_components/head/head'

class UserComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.dispatch({
            type:'user/initialData'
        })
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
                    <div className={styles.head}>
                        <div className={styles.name}>{this.props.fundsInfo.name}</div>
                        <div className={styles.subTitle}>{this.props.userInfo.mobile}[认证姓名:{this.props.fundsInfo.name}]</div>
                        <div className={styles.attations}>提现为提现到绑定银行卡，跨行可能有延时，请耐心等候，一般1-3个工作日到账。每日提现次数不超过3次。</div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.key}>银 行 卡</div>
                        <div className={styles.value}>{this.props.fundsInfo.bankCard}</div>
                    </div>
                    <div className={styles.line}>
                        <div className={styles.key}>可用余额</div>
                        <div className={styles.value}>{method.formatMoney(this.props.fundsInfo.balance)}</div>
                    </div>
                    <div className={styles.actionLine}>
                        <div className={styles.left}>充值</div>
                        <div className={styles.right}>提现</div>
                    </div>

                    <List className={styles.subPageAction}>

                        <Item
                            arrow="horizontal"
                            onClick={() => {
                                this.props.dispatch(routerRedux.push({
                                    pathname: 'home/orderList'
                                }))
                            }}
                            className={styles.item}
                        >我的订单</Item>
                        <Item
                            arrow="horizontal"
                            onClick={() => {
                                this.props.dispatch(routerRedux.push({
                                    pathname: 'home/capitalList'
                                }))
                            }}
                        >资金明细</Item>
                        <Item
                            arrow="horizontal"
                            onClick={() => {
                                this.props.dispatch(routerRedux.push({
                                    pathname: 'home/riskCalculate'
                                }))
                            }}
                        >风险计算器</Item>

                    </List>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {userInfo,fundsInfo} = state.user;
    return {
        userInfo,
        fundsInfo
    };
}
export default connect(mapStateToProps)(UserComponent);