import React from 'react';
import styles from './confirm-popup.css';




const ConfirmPopup = (props) => {
    return (
        <div className={styles.sureBoxBG} style={{ display: props.show?'block':'none'}}>
                    <div className={styles.sureBox}>
                        <div> {props.title}
                            <span>{props.content}</span>
                        </div>
                        <div >
                            <span onClick={props.confirm}>确定</span>
                            <span onClick={props.cancel}>取消</span>
                        </div>
                     </div>

                 </div>
    );
};

ConfirmPopup.propTypes = {
};

export default ConfirmPopup;
