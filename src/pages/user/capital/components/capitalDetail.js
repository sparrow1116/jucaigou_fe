/**
 * Created by zhangyj on 2017/11/2.
 */
import { Toast, Flex, WhiteSpace,List, InputItem, Button,Modal } from 'antd-mobile';
import React, { Component } from 'react'
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import Header from '../../../../common_components/head/head'
import Const from '../../../../utils/constData'
import styles from './capitalDetail.css'
const alert = Modal.alert;

import * as method from '../../../../utils/method'

class CapitalDetailComponent extends Component {
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

        return(
            <div>
                <Header content="我的" leftBtn={{text:'注销',action:this.logout.bind(this)}}></Header>
                <div className={styles.content}>

                    <div className={styles.line + ' ' + styles.headLine}>
                        <div className={styles.key}>流水编号</div>
                        <div className={styles.value}>{this.props.selectCapital.numbering}</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>交易类型</div>
                        <div className={styles.value}>{this.props.selectCapital.transactType}</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>交易金额</div>
                        <div className={styles.value}>{method.formatMoney(this.props.selectCapital.transactPrice)}</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>交易状态</div>
                        <div className={styles.value}>{this.props.selectCapital.transactStatus}</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>创建时间</div>
                        <div className={styles.value}>{method.Format(new Date(this.props.selectCapital.createTime),'yyyy-MM-dd hh:mm')}</div>
                    </div>

                    <div className={styles.line}>
                        <div className={styles.key}>完成时间</div>
                        <div className={styles.value}>{method.Format(new Date(this.props.selectCapital.endTime),'yyyy-MM-dd hh:mm')}</div>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { selectCapital} = state.capital;
    return {
        selectCapital
    };
}

export default connect(mapStateToProps)(CapitalDetailComponent);