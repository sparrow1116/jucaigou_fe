/**
 * Created by zhangyj on 2017/10/26.
 */
import { Toast, Checkbox, WhiteSpace,List, InputItem, Button,Modal } from 'antd-mobile';
import React, { Component } from 'react'
import { connect } from 'dva';
import { hashHistory,routerRedux } from 'dva/router';

import { createForm } from 'rc-form';

import Header from '../../../../common_components/head/head'
import styles from './detail.css'

import * as method from '../../../../utils/method'

const alert = Modal.alert;

const CheckboxItem = Checkbox.CheckboxItem;

class TransactForm extends Component {
    constructor(props) {
        super(props);
    }
    gotoProtocolPage(){
        this.props.dispatch(routerRedux.push({
            pathname: '/home/protocol'
        }));
    }
    buyProduct(){
        this.props.dispatch({
            type: 'lobby/buyProduct'
        })
    }

    onCountChange(value){
        this.props.dispatch({
            type:'lobby/changeCount',
            payload: {value}
        })
    }
    onCheckChange(e){
        this.props.dispatch({
            type:'lobby/changeChecked',
            payload: {checked:e.target.checked}
        })
    }

    render() {
        const {getFieldProps} = this.props.form;
        return (
            <div>
                <div style={{position:'relative'}}>
                    <InputItem
                        {...getFieldProps('number')}
                        type="number"
                        placeholder="请输入份数"
                        value={this.props.buyInfo.count}
                        onChange={this.onCountChange.bind(this)}
                        className={styles.selfInput}
                    >参与份数</InputItem>
                    <i className={styles.attention + " iconfont icon-prompt_fill"}></i>
                </div>
                <div>
                    <CheckboxItem className={styles.selfCheckBox}
                        onChange={this.onCheckChange.bind(this)}
                    >阅读并同意
                        <a onClick={this.gotoProtocolPage.bind(this)} style={{color:'#6699FF'}}>《聚财购服务协议》</a></CheckboxItem>

                </div>
                <div className={styles.mutilBack}>
                    <div className={styles.left}>
                        返回
                    </div>
                    <div className={styles.right}
                        onClick={this.buyProduct.bind(this)}>
                        参与
                    </div>
                </div>
            </div>
        )
    }
}

TransactForm = createForm()(TransactForm)

class ProductDetailComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.dispatch({
            type:'lobby/getAttionMsg'
        })
    }

    goBack(){
        hashHistory.goBack();
    }
    gotoCalculatePage(){
        this.props.dispatch(routerRedux.push({pathname: '/home/riskCalculate'}));
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.showConfirm != nextProps.showConfirm){
            this.showConfirm();
        }
        return nextProps;
    }
    showConfirm(){
        let confirmInstance = alert('确认购买','合计金额'+ method.formatMoney(10*this.props.buyInfo.count),[
            {text:'放弃',onPress:()=>{}},
            {text:'确认支付',onPress:()=>{
                this.props.dispatch({
                    type:'lobby/confirmBuy'
                })
            }}
        ])
    }

    render(){

        return (<div>
            <Header content="今日申请"></Header>
            <div className={styles.content}>
                <div className={styles.headLine + ' '+ styles.line}>
                    <div className={styles.left}>聚买类型</div>
                    <div className={styles.right}>{this.props.productInfo.productName}</div>
                </div>
                <div className={styles.line}>
                    <div className={styles.left}>聚买期号</div>
                    <div className={styles.right}>[{this.props.productInfo.productId}]</div>
                </div>
                <div className={styles.line}>
                    <div className={styles.left}>聚买方案</div>
                    <div className={styles.right}>{this.props.productInfo.productScheme}</div>
                </div>
                <div className={styles.line}>
                    <div className={styles.left}>开售时间</div>
                    <div className={styles.right}>{method.Format(new Date(this.props.productInfo.startTime),'yyyy-MM-dd hh:mm')}</div>
                </div>
                <div className={styles.line}>
                    <div className={styles.left}>截止时间</div>
                    <div className={styles.right}>{method.Format(new Date(this.props.productInfo.endTime),'yyyy-MM-dd hh:mm')}</div>
                </div>
                <div className={styles.line}>
                    <div className={styles.left}>开奖时间</div>
                    <div className={styles.right}>{method.Format(new Date(this.props.productInfo.openTime),'yyyy-MM-dd hh:mm')}</div>
                </div>
                <div className={styles.line}>
                    <div className={styles.left}>单份金额</div>
                    <div className={styles.right}>{method.formatMoney(this.props.productInfo.oneAmount)}</div>
                </div>
                <div className={styles.line}>
                    <div className={styles.left}>剩余份数</div>
                    <div className={styles.right}>{this.props.productInfo.remainCount}份</div>
                </div>
                <TransactForm
                    style={{display: this.props.productInfo.currentStatus == 'open'? 'block' : 'none'}}
                    dispatch={this.props.dispatch}
                    buyInfo={this.props.buyInfo}
                ></TransactForm>

                <p style={{display: this.props.productInfo.currentStatus == 'open'? 'block' : 'none'}}
                    className={styles.attionMsg}
                >
                    {this.props.attionMsg}
                </p>
                <button style={{display: this.props.productInfo.currentStatus == 'open'? 'block' : 'none'}}
                    className={styles.riskCalculate}
                    onClick={this.gotoCalculatePage.bind(this)}
                >
                    风险计算器
                </button>

                <div className={styles.singleBack}
                     onClick={this.goBack.bind(this)}
                     style={{display: this.props.productInfo.currentStatus == 'open'? 'none' : 'block'}}>
                    返回
                </div>
            </div>
        </div>)
    }
}


function mapStateToProps(state) {
    const {productInfo,showConfirm,attionMsg} = state.lobby;
    const{count,checked } = state.lobby.buyInfo;
    return {
        attionMsg,
        productInfo,
        showConfirm,
        buyInfo:{count,checked}
    };
}
export default connect(mapStateToProps)(ProductDetailComponent);