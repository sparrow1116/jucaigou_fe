import React, { Component } from 'react'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './goods_detail.css';
import Head from '../../../common_components/head/head'
import AlertPop from '../../../common_components/alert-popup/alert-popup'
import ConfirmPopup from '../../../common_components/confirm-popup/confirm-popup'
import BlackLoading from '../../../common_components/black-loading/black-loading'
import * as method from '../../../utils/method'


class GoodsDetail extends Component {
    constructor(props) {
        super(props);
    }

    confirm = () => {
        this.UBTcollect('exchange_confirm','button','click');
        this.props.dispatch({
            type: 'Point/exchange'
        });
    }


    changeToStatus(status){
        console.log('>>>>>>>>>>> change status');
        if(status=='confirm'){
            this.UBTcollect(this.props.selectGood.id+'_exchange','button','click');
        }
        this.props.dispatch({
            type: 'Point/changeStatus',
            payload:{
                status
            }
        });
    }




    UBTcollect(targetName,targetType ,eventType){
        console.log('>>>>>>>>>UTB');
        const UBTData={
            "currentPage":this.props.selectGood.name,
            "snapshotTime":(new Date()).valueOf(),
            "targetType":targetType,
            "targetName":targetName,
            "eventType":eventType,
            "userId":window.__merchant_context__.user.userId,
            "appVersion":window.__merchant_context__.app.appVersion,
            "deviceId":window.__merchant_context__.app.deviceId
        };
        console.log(UBTData);
        this.props.dispatch({
            type: 'Point/UBT',
            payload:{
                UBTData
            }
        });
    };



    render() {
        const goodsIntrduct=this.props.selectGood.introduction.map(function (item,index) {
            return (
                <div key={index}>{item.key}:&nbsp;{item.value}</div>
            )})
        const cashFlows =this.props.selectGood.cashFlow.map(function (item,index) {
            return (
                <div key={index}>{index+1}，{item}</div>
            )})
        const attentions=this.props.selectGood.attention.map(function (item,index) {
            return (
                 <div key={index}>{index+1}，{item}</div>
            )})

        return (


            <div className={styles.goods}>
                <Head titleName={this.props.selectGood.name}
                      UTBReturn={this.UBTcollect.bind(this,'return','button','click')}
                />
                <div className={styles.goodsImg}>
                    <div><img src={this.props.selectGood.img} alt=""/></div>
                </div>
                <div className={styles.goodsName}>
                    <div>{this.props.selectGood.name}</div>
                    <div className={styles.goodsPrice}>{method.formatNum(this.props.selectGood.pointPrice)}<span>积分</span>
                        <span>¥{method.formatNum(this.props.selectGood.originalPrice)}</span></div>
                </div>
                <div className={styles.goodsContent}>
                    <div className={styles.content}>
                        <div className={styles.contentHead}><span></span> <span></span><span>商品简介</span><span></span>
                            <span></span></div>
                        <div className={styles.goodsIntrduct}>
                           {goodsIntrduct}
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.contentHead}><span></span> <span></span><span>兑换流程</span><span></span>
                            <span></span></div>
                        <div className={styles.contents}>
                            {cashFlows}
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.contentHead}><span></span> <span></span><span>注意事项</span><span></span>
                            <span></span></div>
                        <div className={styles.contents}>
                            {attentions}
                        </div>
                    </div>


                </div>
                <div style={{display:this.props.points>=this.props.selectGood.pointPrice?'block':'none'}} className={styles.sureButton} onClick={this.changeToStatus.bind(this,'confirm')}>立即兑换</div>
                <div style={{display:this.props.points>=this.props.selectGood.pointPrice?'none':'block'}}  className={styles.sureButtonDisable}>立即兑换</div>

                <BlackLoading
                    show={this.props.currentState == 'loading' ? true : false}
                    content={"兑换中..."}/>


                <ConfirmPopup
                    show={ this.props.currentState == 'confirm' ? true : false}
                    confirm={this.confirm}
                    cancel={this.changeToStatus.bind(this,'idle')}
                    title={"确定使用"+this.props.selectGood.pointPrice+"积分兑换吗？"}
                    content={"兑换成功后，买单侠工作人员会与您取得联系，请注意接听电话。"}/>

                <AlertPop
                        show={this.props.currentState == 'success'||  this.props.currentState == 'failed'? true : false}
                        confirm={this.changeToStatus.bind(this,'idle')}
                        imgUrl={this.props.currentState == 'success'?"../../src/assets/pointMall/mall_alert_img_success@3x.png":"../../src/assets/pointMall/mall_alert_img_fall@3x.png"}
                        title={this.props.currentState == 'success'?"恭喜您兑换成功":"兑换失败"}
                        content={this.props.currentState == 'success'?"我们的工作人员将通过手机与您联系，请注意接听电话。":"为什么，之后怎么办?"}/>

            </div>

        )
    }

}


function mapStateToProps(state) {

    const {selectGood,currentState,points } = state.Point;
    return {
        selectGood,
        currentState,
        points
    };
}

export default connect(mapStateToProps)(GoodsDetail);

