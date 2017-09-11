import React from 'react';
import styles from './alert-popup.css';




const AlertPop = (props) => {
    return (
        <div className={styles.confrimBG} style={{ display: props.show?'block':'none'}}>
                       <div className={styles.confrimResult} >
                            <div><img src={props.imgUrl} /></div>
                            <div>{props.title}</div>
                            <div>{props.content}</div>
                            <div onClick={props.confirm} >确定</div>
                       </div>
         </div>
    );
};






AlertPop.propTypes = {
};

export default AlertPop;
