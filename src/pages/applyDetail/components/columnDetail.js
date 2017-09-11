import React, { Component } from 'react'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './columnDetail.css';
import LoadingPage from '../../../common_components/loading/loading'
import Head from '../../../common_components/head/head'
import * as method from '../../../utils/method'

class ColumnDetail extends Component {
   constructor(props) {
    super(props);
  }


  componentDidMount(){
            this.props.dispatch({
                type: 'Details/fetch'
            });
    }

   render() {
     const { basic,process,loading } = this.props;
    if(loading==true){
         return  <div>
             <Head titleName={'订单详情'} isHomePage={true}></Head>
             <LoadingPage></LoadingPage>
         </div>
    }else if(basic.loanType.code==1){
       return(
           <div>
               <Head titleName={'订单详情'} isHomePage={true}></Head>
               <div style={{ display: basic.loanType.code==1?'block':'none'}} className={styles.progressStatus}>
                   <span  className={styles.public}></span>
                   <div className={styles.proHead}>
                       本金处理进度<br/>
            <span className={styles.proHeadStatus}>
              {process.processStatus.code<3?'结算中':process.processStatus.code<6?'结算完成，等待放款':process.processStatus.code==6?'已放款，注意账户查收':''}
            </span>
                   </div>
                   <div className={styles.progressing}>
                       <div className={styles.progressingBar}></div>
                       <div className={styles.progressingBody}>
                           <div className={styles.accountItem}>
                               <span className={styles.accountName}>账户:</span>
                               <span>{process.cardHolderName} </span>
                           </div>
                           <div className={styles.accountItem}>
                               <span className={styles.accountName}>入账:</span>
                               <span>{process.bankName+"("+process.cardNo+")"}</span>
                               <span className={styles.accountMoney}>¥{method.formatNum(basic.amount)}</span>
                           </div>
                           <div className={styles.progressingStatus}>
                               <span className={ process.processStatus.code>=1?styles.success:styles.notYet}>1</span>
                               <span  className={ process.processStatus.code>=3?styles.suc:null} ></span>
                               <span  className={ process.processStatus.code>=3?styles.success:styles.notYet}>2</span>
                               <span  className={ process.processStatus.code==6?styles.suc:null}></span>
                               <span  className={ process.processStatus.code==6?styles.success3:styles.notYet3}>3</span>
                           </div>
                           <div className={styles.proDetail}>
                  <span className={ process.processStatus.code>=1?styles.susStatus:null}>
                    结算中 <br/>
                    <span style={{ display:process.processStatus.code>=1?'inline-block':'none'}} className={styles.successTime}>{method.Format(new Date(process.settleActualBegin),'MM-dd hh:mm')}</span>
                  </span>
                   <span className={ process.processStatus.code>=3?styles.susStatus:null}>
                    结算成功 <br/>
                    <span style={{ display: process.processStatus.code>=3?'inline-block':'none'}} className={styles.successTime}>{method.Format(new Date(process.withdrawActualBegin),'MM-dd hh:mm')}</span>
                  </span>
                   <span className={ process.processStatus.code==6?styles.susStatus:null}>
                    已放款 <br/>
                    <span style={{ display: process.processStatus.code==6?'inline-block':'none'}} className={styles.successTime}>{method.Format(new Date(process.withdrawComplete),'MM-dd hh:mm')}</span>
                  </span>
                           </div>
                       </div>
                       <div className={styles.progressingFooter}></div>
                   </div>
               </div>
               <div className={styles.userInfo} >
                   <div className={styles.userInfoImg}>
                       <img src={basic.customerHeadImg?basic.customerHeadImg:"../../src/assets/todayApply/icon_portrait@2x.png"} alt=""/>
                   </div>
                   <div className={styles.userInfoDetail} >
                       <div className={styles.userInfoName} >
                           <span>{basic.customerName}</span>
                           <span>{basic.customerPhone}</span>
                       </div>
                       <ul className={styles.userInfoProduct}>
                           <li>¥{method.formatNum(basic.amount)}</li>
                           <li>{basic.commodityName} </li>
                           <li>{basic.productName}</li>
                       </ul>
                   </div>
               </div>

               <div className={styles.orderInfo} >
                   <table>
                       <tbody>
                       <tr>
                           <td>订单编号</td>
                           <td>{basic.orderId}</td>
                       </tr>
                       <tr>
                           <td>申请时间</td>
                           <td>{method.Format(new Date(basic.applyTime),"yyyy-MM-dd hh:mm:ss")}</td>
                       </tr>
                       <tr>
                           <td>订单状态</td>
                           <td>{basic.orderStatus.desc}</td>
                       </tr>
                       <tr>
                           <td>商户名称</td>
                           <td>{basic.sellerName}</td>
                       </tr>
                       <tr>
                           <td>门店名称</td>
                           <td>{basic.posName}</td>
                       </tr>
                       <tr>
                           <td>办单店员</td>
                           <td>{basic.s1Name}</td>
                       </tr>
                       <tr>
                           <td>买单侠销售</td>
                           <td>{basic.d1Name}</td>
                       </tr>

                       </tbody>
                   </table>

               </div>
               <div style={{ display: basic.loanType.code==1?'block':'none'}}  className={styles.orderStatus} >
                   <table>
                       <tbody>
                       <tr>
                           <td>本金单号</td>
                           <td>{process.recordId} </td>
                       </tr>
                       <tr>
                           <td>本金金额</td>
                           <td>{method.formatNum(process.loanPrincipal)}</td>
                       </tr>
                       <tr>
                           <td>本金状态 </td>
                           <td>{process.processStatus.desc}</td>
                       </tr>
                       </tbody>
                   </table>

               </div>
           </div>
       )
    }else{
       return(
           <div>
               <Head titleName={'订单详情'} isHomePage={true}></Head>
               <div style={{ display: basic.loanType.code==1?'none':'block'}}   className={styles.privateProgressStatus}>
                   <div className={styles.proHead}>
                       本金处理进度<br/>
            <span className={styles.proHeadStatus}>
              放款中，请实时检查用户账户
            </span>
                   </div>
               </div>
               <div className={styles.userInfo} >
                   <div className={styles.userInfoImg}>
                       <img src={basic.customerHeadImg?basic.customerHeadImg:"../../src/assets/todayApply/icon_portrait@2x.png"} alt=""/>
                   </div>
                   <div className={styles.userInfoDetail} >
                       <div className={styles.userInfoName} >
                           <span>{basic.customerName}</span>
                           <span>{basic.customerPhone}</span>
                       </div>
                       <ul className={styles.userInfoProduct}>
                           <li>¥{method.formatNum(basic.amount)}</li>
                           <li>{basic.commodityName} </li>
                           <li>{basic.productName}</li>
                       </ul>
                   </div>
               </div>

               <div className={styles.orderInfo} >
                   <table>
                       <tbody>
                       <tr>
                           <td>订单编号</td>
                           <td>{basic.orderId}</td>
                       </tr>
                       <tr>
                           <td>申请时间</td>
                           <td>{method.Format(new Date(basic.applyTime),"yyyy-MM-dd hh:mm:ss")}</td>
                       </tr>
                       <tr>
                           <td>订单状态</td>
                           <td>{basic.orderStatus.desc}</td>
                       </tr>
                       <tr>
                           <td>商户名称</td>
                           <td>{basic.sellerName}</td>
                       </tr>
                       <tr>
                           <td>门店名称</td>
                           <td>{basic.posName}</td>
                       </tr>
                       <tr>
                           <td>办单店员</td>
                           <td>{basic.s1Name}</td>
                       </tr>
                       <tr>
                           <td>买单侠销售</td>
                           <td>{basic.d1Name}</td>
                       </tr>

                       </tbody>
                   </table>

        </div>
      </div>
    )
    }

   }
}

function mapStateToProps(state) {
    console.log('>>>>>>>>>>>>state');
    console.log(state);
    const { basic,process,loading } = state.Details;
    return {
        basic,
        process ,
        loading
    };
}

export default connect(mapStateToProps)(ColumnDetail);

