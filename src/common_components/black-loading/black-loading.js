import React from 'react';
import styles from './black-loading.css';




const BlackLoading = (props) => {
    return (
         <div className={styles.loadingBG} style={{ display: props.show?'block':'none'}}>
             <div className={styles.loading}>
                    <div></div>
                    <div>{props.content}</div>           
                </div>
         </div>
        
    );
};






BlackLoading.propTypes = {
};

export default BlackLoading;
