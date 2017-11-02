import React, {Component} from 'react';
import { connect } from 'dva';
import { hashHistory } from 'dva/router';
import styles from './head.css';

function Header(props){

    if(props.leftBtn){
        return(
            <div>
                <div className={styles.title}>
                    {props.content}
                </div>
                <span className={styles.leftBtn} onClick={props.leftBtn.action}>{props.leftBtn.text}</span>
            </div>

        )
    }else{
        return(
            <div className={styles.title}>
                {props.content}
            </div>
        )
    }

}

export default Header