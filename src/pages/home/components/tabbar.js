/**
 * Created by zhangyj on 2017/10/16.
 */
import React, { Component } from 'react'
import { Toast, TabBar, Icon } from 'antd-mobile';


export default class SelfTabBar extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
            >
                <TabBar.Item
                    title="聚购大厅"
                    key="聚购大厅"
                    icon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
                      />
                    }
                    selectedIcon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
                      />
                    }
                    badge={1}
                    onPress={() => {
                        console.log('>>>>11');
                    }}
                    data-seed="logId"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type="koubei-o" size="md" />}
                    selectedIcon={<Icon type="koubei" size="md" />}
                    title="口碑"
                    key="口碑"
                    badge={'new'}

                    onPress={() => {
                        console.log('>>>>>22');
                    }}
                    data-seed="logId1"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                          width: '0.44rem',
                          height: '0.44rem',
                          background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                          width: '0.44rem',
                          height: '0.44rem',
                          background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
                        />
                     }
                    title="朋友"
                    key="朋友"
                    dot
                    onPress={() => {
                        console.log('>>>>>33');
                    }}
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    title="我的"
                    key="我的"
                    onPress={() => {
                        console.log('>>>>>44');
                    }}
                >
                </TabBar.Item>
            </TabBar>
        );

    }
}