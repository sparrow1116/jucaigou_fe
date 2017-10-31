/**
 * Created by zhangyj on 2017/10/16.
 */
import React, { Component } from 'react'
import { Toast, TabBar, Icon } from 'antd-mobile';

import { hashHistory,routerRedux } from 'dva/router';

import styles from './tabbar.css'


export default class SelfTabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '001'
        };
    }

    render(){
        return (
            <div>
                {this.props.children}
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="red"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="聚购大厅"
                        key="聚购大厅"
                        icon={
                            <i  className={styles.selfIcon + ' ' + 'iconfont icon-home' }></i>
                        }
                        selectedIcon={<i  className={styles.selfIcon + ' ' + 'iconfont icon-home' }></i>
                    }
                        selected={this.state.selectedTab === '001'}
                        badge={1}
                        onPress={() => {
                            this.setState({selectedTab:'001'});
                            this.props.dispatch(routerRedux.push({pathname: '/home/lobby'}));
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i  className={styles.selfIcon + ' ' + 'iconfont icon-remind' }></i>}
                        selectedIcon={<i  className={styles.selfIcon + ' ' + 'iconfont icon-remind' }></i>}
                        title="系统公告"
                        key="口碑"
                        badge={'new'}
                        selected={this.state.selectedTab === '002'}
                        onPress={() => {
                            this.setState({selectedTab:'002'})
                            this.props.dispatch(routerRedux.push({pathname: '/home/announcement'}));
                        }}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i  className={styles.selfIcon + ' ' + 'iconfont icon-comments' }></i>
                        }
                        selectedIcon={
                            <i  className={styles.selfIcon + ' ' + 'iconfont icon-comments' }></i>
                         }
                        selected={this.state.selectedTab === '003'}
                        title="消息通知"
                        key="朋友"
                        dot
                        onPress={() => {
                            this.setState({selectedTab:'003'})
                            this.props.dispatch(routerRedux.push({pathname: '/home/message'}));
                        }}
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i  className={styles.selfIcon + ' ' + 'iconfont icon-account' }></i>}
                        selectedIcon={<i  className={styles.selfIcon + ' ' + 'iconfont icon-account' }></i>}
                        title="我的"
                        key="我的"
                        selected={this.state.selectedTab === '004'}
                        onPress={() => {
                            this.setState({selectedTab:'004'})
                            this.props.dispatch(routerRedux.push({pathname: '/home/user'}));
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        );

    }
}