/**
 * Created by zhangyj on 2017/10/16.
 */
import { Toast, Flex, WhiteSpace,List, InputItem, Button } from 'antd-mobile';
import React, { Component } from 'react'

import Header from '../../../common_components/head/head'
import SelfTabBar from './../../tabbar'
import { connect } from 'dva';



class HomeComponent extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.toggeleError != nextProps.toggeleError){
            Toast.info(nextProps.errorMessage);
        }
        return nextProps;
    }
    render(){
        return (
            <div>
                {this.props.children}
            <SelfTabBar dispatch={this.props.dispatch}/>
        </div>)
    }
}

function mapStateToProps(state) {
    const {errorMessage,toggeleError} = state.home;
    return {
        errorMessage,toggeleError
    };
}
export default connect(mapStateToProps)(HomeComponent);
