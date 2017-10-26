/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListView } from 'antd-mobile';
import classnames from 'classnames';
import { routerRedux } from 'dva/router';

import styles from './listview.css'
import * as method from '../../../../utils/method'
import productPic from '../../../../assets/2letter.png'


export default class ProductList extends React.Component {
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
            type: 'lobby/getProductList'
        });
    }
    showDetail(id){
        this.props.dispatch(routerRedux.push({
            pathname: '/home/productDetail',
            query: { id }
        }));
    }

    componentDidMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);

        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        // simulate initial Ajax
        this.fetchData();
        this.setState({
            height:hei
        })

    }

    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    componentWillReceiveProps(nextProps) {
        if (nextProps.productArr !== this.props.productArr) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.productArr),
            });
        }
    }

    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false

        if(this.props.loading || !this.props.hasMore){
            return;
        }
	    this.fetchData();

    }

    render() {

        const row = (SelfData) => {

            let statusIconCls = classnames({
                'iconfont':true,
                'icon-anquanbaozhang':SelfData.status == 0?true:false,

                'icon-time_fill':SelfData.status == 2?true:false,

                'icon-prompt_fill':SelfData.status == 1?true:false,
            });
            let selfColor = SelfData.status == 0 ? styles.selfGreen : SelfData.status == 1 ? styles.selfYellow : SelfData.status == 2  ? styles.selfBlue : ''
            return (
                <div key={SelfData.id} className={styles.line} onClick={this.showDetail.bind(this,SelfData.id)}>

                        <div className={styles.left}>
                            <img className={styles.productPic} src={productPic} />
                        </div>
                        <div className={styles.center}>
                            <div className={styles.upLine}>{SelfData.productName}</div>
                            <div className={styles.downLine}>
                                <i className={statusIconCls + ' '+ selfColor + ' ' + styles.iconStyle}></i>
                                <span>{SelfData.statusDisc}</span>
                            </div>
                        </div>

                        <div className={styles.right}>
                            <div>[{SelfData.productId}]</div>
                            <div>截止:{method.Format(new Date(SelfData.endTime),'MM-dd hh:mm')}</div>
                        </div>
                </div>
            );
        };

        let keyIndex = 0;
        const separator = () => {
            return (
                <div
                    key={keyIndex++}
                    style={{
                      backgroundColor: '#F5F5F9',
                      height: 8,
                      borderTop: '1px solid #ECECED',
                      borderBottom: '1px solid #ECECED',
                }}/>
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
                renderSeparator={separator}
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
