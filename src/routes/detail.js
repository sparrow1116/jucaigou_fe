import React from 'react';
import { connect } from 'dva';
import styles from './Tab.css';
import ColumnDetail from '../pages/applyDetail/components/columnDetail';



function Detail({ location }) {
  return (
      <div >
        <ColumnDetail />
      </div>
  );
}

export default connect()(Detail);
