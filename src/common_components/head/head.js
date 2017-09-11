import React, {Component} from 'react';
import { connect } from 'dva';
import styles from './head.css';
import { hashHistory } from 'dva/router';


class Head extends Component {
    constructor(props) {
        super(props);
    }

    goBack = ()=> {
        if(this.props.UTBReturn){
            this.props.UTBReturn();
        }
        console.log(hashHistory);
        if(this.props.isHomePage){
            window.bridge.popStack();
        }else{
            hashHistory.goBack();
        }

    };

    UTBTitleRight01(){
        if(this.props.UTBTitleRight){
            this.props.UTBTitleRight();
        }
    }

    render() {
        return (
            <div className={styles.title}>
                <span onClick={this.goBack.bind(this)} className={styles.return}></span>
                <span >{this.props.titleName}</span>
                <span className={styles.right}  onClick={this.UTBTitleRight01.bind(this)}>{ this.props.rightText ? this.props.rightText : null}</span>
            </div>
        );

    }
}
;


export default connect()(Head);
