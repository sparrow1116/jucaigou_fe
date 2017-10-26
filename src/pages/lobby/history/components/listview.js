/**
 * Created by zhangyj on 2017/10/26.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListView } from 'antd-mobile';
import classnames from 'classnames';

import * as method from '../../../../utils/method'
import styles from './listview.css'

export default class HistoryList extends React.Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
        this.state = {
            dataSource,
            height: document.documentElement.clientHeight * 3 / 4
        };
    }

    fetchData(){
        this.props.dispatch({
            type: 'history/getHistoryList'
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
        if (nextProps.historyArr !== this.props.historyArr) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.historyArr),
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

            var statusStyle = SelfData.status == 0 ? styles.idleStyle :
                                SelfData.status == 1 ? styles.redStyle : styles.blackStyle

            return (
                <div key={SelfData.id} className={styles.line + ' ' + statusStyle}>
                    <div className={styles.left}>
                        <div className={styles.up}>
                            {SelfData.productName}[{SelfData.productId}]
                        </div>
                        <div className={styles.down}>
                            总投注:{method.formatMoney(SelfData.inputAmount)}
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.up}>
                            截止时间{method.Format(new Date(SelfData.endTime),'MM-dd hh:mm')}
                        </div>
                        <div className={styles.down}>
                            总中奖:{method.formatMoney(SelfData.outputAmount)}
                        </div>
                    </div>
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
                pageSize={8}
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                scrollEventThrottle={200}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    }

}