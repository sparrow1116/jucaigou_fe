/**
 * Created by zhangyj on 2017/10/31.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListView } from 'antd-mobile';
import classnames from 'classnames';
import { routerRedux } from 'dva/router';

import styles from './list.css'
import * as method from '../../../utils/method'
import productPic from '../../../assets/2letter.png'


export default class MessageList extends React.Component {
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

    fetchData(){
        this.props.dispatch({
            type: 'message/getMessage'
        });
    }
    showDetail(id){
        /*this.props.dispatch(routerRedux.push({
            pathname: '/home/productDetail',
            query: { id }
        }));*/
    }

    componentDidMount() {

        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        // simulate initial Ajax
        this.fetchData();
        this.setState({
            height:hei
        })

    }

    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
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

    render() {

        const row = (SelfData) => {

            return (
                <div key={SelfData.id} className={styles.line} onClick={this.showDetail.bind(this,SelfData.id)}>
                    <span className={styles.date}>[{method.Format(new Date(SelfData.date),'MM-dd')}]</span>
                    <span className={styles.title}>{SelfData.title}</span>
                    <span className={styles.arrow}>></span>
                    <span style={{display:SelfData.readed ? 'none' : 'block'}} className={styles.point}></span>
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