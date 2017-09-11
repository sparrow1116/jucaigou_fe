import React from 'react';
import { connect } from 'dva';
import styles from './Tab.css';
import GoodsDetail from '../pages/point_mall/components/goods_detail';



function PointDetail({ location }) {
  return (
      <div >
        <GoodsDetail />
      </div>
  );
}

export default connect()(PointDetail);
