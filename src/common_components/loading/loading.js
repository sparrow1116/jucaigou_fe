import React from 'react';
import styles from './loading.css';




const LoadingPage = () => {
  return (
   <div className={styles.nonePage}>
        <div className={styles.noneList}>
                   正在加载中...    
         </div>
    </div>
  );
};


LoadingPage.propTypes = {
};

export default LoadingPage;
