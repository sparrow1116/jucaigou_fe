import React from 'react';
import { connect } from 'dva';
import styles from './Tab.css';
import TabComponent from '../pages/today_apply/components/Tab';



function TabsDemo({ location }) {
  return (
      <div className={styles.normal}>
        <TabComponent />
      </div>
  );
}

export default connect()(TabsDemo);
