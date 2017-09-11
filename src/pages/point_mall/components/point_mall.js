import React, { Component } from 'react'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './point_mall.css';

import Hammer from 'react-hammerjs'
import Head from '../../../common_components/head/head'

import AlertPop from '../../../common_components/alert-popup/alert-popup'

import * as method from '../../../utils/method'



class PointMall extends Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        this.props.dispatch({
            type: 'Point/getAllPoint'
        })
    }
    choseItem(goodId){
        this.UBTcollect(goodId+'_details','button','click');
        this.props.dispatch(routerRedux.push({
            pathname: '/PointDetail',
            query: { goodId }
        }));
    }

    //handleTouchStart(e){
    //    console.log(e);
    //    var _x=e.changedPointers[0].clientX;
    //    var _y=e.changedPointers[0].clientY;
    //    this.UBTcollect('积分商城',_x+'+'+_y,'touch_start');
    //}
    //handleTouchEnd(e){
    //    console.log(">>>>>>>>>>>>>>>>>>end");
    //    console.log(e);
    //    var _x=e.changedPointers[0].clientX;
    //    var _y=e.changedPointers[0].clientY;
    //    this.UBTcollect('积分商城',_x+'+'+_y,'touch_end');
    //}






    UBTcollect(targetName,targetType ,eventType){
        console.log('>>>>>>>>>UTB');
        const UBTData={
            "currentPage":'point_store',
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

//    onTouchStart={this.handleTouchStart.bind(this)}
//onTouchEnd={this.handleTouchEnd.bind(this)}


    render() {
        return(
            //<Hammer
            //    onPanStart={this.handleTouchStart.bind(this)}
            //    onPanEnd={this.handleTouchEnd.bind(this)}
            //>
            <div>
            <Head titleName={'积分商城'}
                  rightText={'积分规则'}
                  isHomePage={true}
                  UTBReturn={this.UBTcollect.bind(this,'back','button','click')}
                  UTBTitleRight={this.UBTcollect.bind(this,'point_rules','button','click')}
            />
                <div className={styles.head}>
                    <div className={styles.content}>
                        <div className={styles.titleName}>我的积分</div>
                        <div className={styles.titlePoint}>{method.formatNum(this.props.points)}</div>
                        <div className={styles.actionBlock} style={{paddingTop:"45px"}}>
                            <div>兑换记录</div>
                            <div  onClick={this.UBTcollect.bind(this,'point_exchange_details','button','click')} style={{marginLeft:"110px"}}>变动明细</div>
                        </div>
                    </div>
                </div>
                <div className={styles.lists}>
                    <div className={styles.title}>大家都在兑</div>
                    <div className={styles.listContainer}>

                        {this.props.goods.map((good,index)=>{
                            return (<div className={styles.item} key={index} onClick={this.choseItem.bind(this,good.id)}>
                                <img src={good.img} />
                                <div className={styles.productName}>{good.name}</div>
                                <div className={styles.pointBlock} style={{paddingTop:"10px"}} ><span>{method.formatNum(good.pointPrice)}</span><span style={{marginLeft:"20px"}}>积分</span></div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
            //
            //</Hammer>
                )
    }
}

function mapStateToProps(state) {
    console.log('>>>>>>>>>>>>state');
    console.log(state);
    const { points,goods } = state.Point;
    return {
        points,
        goods
    };
}

export default connect(mapStateToProps)(PointMall);

