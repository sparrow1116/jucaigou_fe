import React, {Component} from 'react';
import { connect } from 'dva';
import { hashHistory } from 'dva/router';
import styles from './head.css';

function Header({content}){

    return(
        <div className={styles.title}>
            {content}
        </div>
    )
}

export default Header