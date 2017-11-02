/**
 * Created by zhangyj on 2017/11/2.
 */
import { Toast, Flex, WhiteSpace,List, InputItem, Button,Modal } from 'antd-mobile';
import React, { Component } from 'react'
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import Header from '../../../../common_components/head/head'
import Const from '../../../../utils/constData'
import styles from './orderDetail.css'
const alert = Modal.alert;

import * as method from '../../../../utils/method'

class OrderDetailComponent extends Component {
    constructor(props) {
        super(props);
    }

    logout() {
        alert('注销', '您确认返回登录页吗？', [
            {
                text: '取消', onPress: ()=> {}},
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
        console.log('>>>> selectOrder');
        console.log(this.props.selectOrder);

        return(
            <div>
                <Header content="我的" leftBtn={{text:'注销',action:this.logout.bind(this)}}></Header>
                <div className={styles.content}>

                    <div className={styles.line + ' ' + styles.headLine}>
                        <div className={styles.key}>订单编号</div>
                        <div className={styles.value}>{this.props.selectOrder.numbering}</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>聚买类型</div>
                        <div className={styles.value}>[{this.props.selectOrder.productName}]</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>聚买期号</div>
                        <div className={styles.value}>[{this.props.selectOrder.productId}]</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>聚买方案</div>
                        <div className={styles.value}>{this.props.selectOrder.productScheme}</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>开售时间</div>
                        <div className={styles.value}>{method.Format(new Date(this.props.selectOrder.sellOpenTime),'yyyy-MM-dd hh:mm')}</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>截止时间</div>
                        <div className={styles.value}>{method.Format(new Date(this.props.selectOrder.sellCloseTime),'yyyy-MM-dd hh:mm')}</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>开奖时间</div>
                        <div className={styles.value}>{method.Format(new Date(this.props.selectOrder.lotteryTime),'yyyy-MM-dd hh:mm')}</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>下单时间</div>
                        <div className={styles.value}>{method.Format(new Date(this.props.selectOrder.orderTime),'yyyy-MM-dd hh:mm')}</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>单份金额</div>
                        <div className={styles.value}>{method.formatMoney(this.props.selectOrder.singlePrice)}</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>参与份数</div>
                        <div className={styles.value}>{this.props.selectOrder.buyNumbers}份</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>支付金额</div>
                        <div className={styles.value}>{method.formatMoney(this.props.selectOrder.orderPrice)}</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>支付方式</div>
                        <div className={styles.value}>{this.props.selectOrder.payType}</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>订单状态</div>
                          <div style={{"display": method.isContainChinese(this.props.selectOrder.orderStatus)? 'block': 'none'}} className={styles.value}>{this.props.selectOrder.orderStatus}</div>
                        <div style={{"display": method.isContainChinese(this.props.selectOrder.orderStatus)? 'none': 'block'}} className={styles.value + ' ' + styles.red}>
                            中奖{method.formatMoney(this.props.selectOrder.orderStatus)}元
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { selectOrder} = state.order;
    return {
        selectOrder
    };
}

export default connect(mapStateToProps)(OrderDetailComponent);