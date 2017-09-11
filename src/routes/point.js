import React from 'react';
import { connect } from 'dva';
import styles from './Tab.css';
import PointMall from '../pages/point_mall/components/point_mall';



function Point({ location }) {
  return (
      <div style={{height:"100%"}}>
        <PointMall />
      </div>
  );
}

export default connect()(Point);
