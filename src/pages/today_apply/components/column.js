import React from 'react';
import { connect } from 'dva';
// import { classNames  } from 'classnames';
import { routerRedux } from 'dva/router';
import { RefreshControl, ListView } from 'antd-mobile';
import styles from './column.css';
import * as method from '../../../utils/method'

import {isMock} from '../../../utils/config'

var classNames = require('classnames');

const cx = classNames.bind(styles)

function choseItem(item) {

//window.bridge.getContext().then(function (data) {
  let role =window.__merchant_context__.user.userRoles.some(function(item){
      return (item.roleCode== 2 || item.roleCode==4);
  })
  if(role==true){
      console.log('/#/Detail?orderId=' + item.orderId);
      window.bridge.pushStack({url:'/#/Detail?orderId=' + item.orderId })
  }
//})


}

const Column = (rowData, sectionID, rowID) => {

    let onlyS1 = false;
    if(window.__merchant_context__ && window.__merchant_context__.user && window.__merchant_context__.user.userRoles){
        if(window.__merchant_context__.user.userRoles.length == 1 && window.__merchant_context__.user.userRoles[0].roleCode == 1){
            onlyS1 = true;
        }
    }

  return (
    <div  className={styles.items}  key={rowID} onClick={choseItem.bind(null,rowData)}>
      <div className={styles.mainPart}>
        <div className={styles.img}>
          <img src={rowData.headImg?rowData.headImg:"../../src/assets/todayApply/icon_portrait@3x.png"} alt=""/>
         </div>
       <div className={styles.showName}>
          <div className={styles.name}>{rowData.customName}</div>
           <div className={styles.money}>{rowData.productName}</div>
        </div>
        <div className={styles.status}>
           <div className={styles.type}>
            <span className={rowData.orderStatus.code==1?styles.statusIcon:null }></span>
             {rowData.orderStatus.desc}
            </div>
            <div className={styles.money}>借¥{method.formatNum(rowData.amount)}</div>
        </div>
        <span className={rowData.loanType.code==1 && !onlyS1 ?styles.Icon:null}>
              </span>
      </div>
      <div style={{ display: rowData.orderPosName==null?'none':'block'}} className={styles.location}>
        <span className={styles.address} >{rowData.orderPosName}</span>
        <span className={styles.locName} >{rowData.orderS1Name}</span>
      </div>
    </div>
  );
};


Column.propTypes = {
};

export default Column;
