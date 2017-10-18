/**
 * Created by zhangyj on 2017/10/18.
 */
import React, { Component } from 'react'

export default class TT001 extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <div>
            {this.props.children}
            Fuck
        </div>
    }
}