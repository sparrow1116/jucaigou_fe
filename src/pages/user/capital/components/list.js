/**
 * Created by zhangyj on 2017/11/2.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListView } from 'antd-mobile';
import classnames from 'classnames';
import { routerRedux } from 'dva/router';

import styles from './list.css'
import * as method from '../../../../utils/method'

export default class OrderList extends React.Component {
    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
        this.state = {
            dataSource,
            // isLoading: true,
            height: document.documentElement.clientHeight * 3 / 4
        };
    }

    fetchData() {
        this.props.dispatch({
            type: 'capital/getCapitalList'
        });
    }
    componentDidMount() {
        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        this.fetchData();
        this.setState({
            height:hei
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.list !== this.props.list) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.list),
            });
        }
    }
    onEndReached = (event) => {
        if(this.props.loading || !this.props.hasMore){
            return;
        }
        this.fetchData();
    }
    showDetail(id){
        this.props.dispatch(routerRedux.push({
            pathname: '/home/capitalDetail',
            query: { id }
        }));
    }
    render(){
        const row = (SelfData) => {

            return (
                <div key={SelfData.id} className={styles.line } onClick={this.showDetail.bind(this,SelfData.id)}>
                    <span className={'iconfont icon-anquanbaozhang ' + styles.icon}></span>
                    <span className={styles.name}>[{SelfData.title}]</span>
                    <span className={styles.product}>{method.formatMoney(SelfData.price)}</span>
                    <span className={styles.rightBlock}>
                        <span>{method.Format(new Date(SelfData.date),'MM-dd hh:mm')}</span>
                        <span className={styles.arrow + ' iconfont icon-more'}></span>
                    </span>

                </div>
            );
        };


        return (
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderFooter={() => (
                    <div style={{ padding: 30, textAlign: 'center' }}>
                        {!this.props.hasMore ? '已经到底' : this.props.loading ? '正在加载中...' : '已经到底'}
                    </div>)
                }
                renderRow={row}
                style={{
                      height: this.state.height,
                      overflow: 'auto',
                }}
                pageSize={5}
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                scrollEventThrottle={200}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    }
}