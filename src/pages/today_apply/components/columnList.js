import React, { Component } from 'react'
import { connect } from 'dva';
import { classnames } from 'classnames';
import { routerRedux } from 'dva/router';
import { RefreshControl, ListView } from 'antd-mobile';
import styles from './columnList.css';
import Column from './column';
import Separator from './separator';

import LoadingPage from '../../../common_components/loading/loading'


class ColumnList extends Component {

    constructor(props) {
        super(props);


    }


    onRefresh = () => {
        this.props.dispatch({
            type: 'Tabs/startRefresh'
        });
    };
    onScroll = (e) => {
    console.log('>>>>>>>>>scroll');
    console.log(document.documentElement.clientHeight);
    console.log(document.body.clientHeight);
        console.log(e.indicatorsPos.y);

       if(e.indicatorsPos.y != 0 && e.indicatorsPos.y + document.documentElement.clientHeight >= document.body.clientHeight - 200){
           console.log('>>>>>>>>>chudile@@@@@@@...');
           this.props.dispatch({
               type: 'Tabs/loadData'
           });
       }
        // if(e.contentSize.y>document.documentElement.clientHeight){
        //      if(e.indicatorsPos.y + 250 + 200 + document.documentElement.clientHeight>e.contentSize.y){
        //          console.log('>>>>>>>>>chudile@@@@@@@...');
        //           this.props.dispatch({
        //                 type: 'Tabs/loadData'
        //             });
        //      }
        // }

    };

    // componentDidMount(){
    //     if(this.props.data.init){
    //         this.props.dispatch({
    //             type: 'Tabs/startRefresh'
    //         });
    //     }
    // }

    render() {

        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        console.log('>>>>>>>>>render  column list');
        console.log(this.props);
        this.list = this.props.data.list;
        this.dataSource = this.dataSource.cloneWithRows(this.list);

        //this.listHeight = 0;
        //if (this.list.length > 6) {
            // this.listHeight = document.documentElement.clientHeight
        //} else {
        //    this.listHeight = 383.5 * this.list.length;
        //}

        //this.listHeight = 5000;


        if(this.props.init){
            return <LoadingPage></LoadingPage>
        }
        else if(this.props.data.list.length == 0) {
            return (
                <div className={styles.nonePage}>
                    <div className={styles.noneList}>
                        <span style={{ display: this.props.Tabkey==0?'block':'none'}}>今日还没有申请，加油哦！<br/>办单多多，生意兴隆~</span>
                        <span style={{ display: this.props.Tabkey!=0?'block':'none'}}>当前状态无申请单</span>
                    </div>
                </div>
            )
        } else {
            return (
                <ListView
                    dataSource={this.dataSource}
                    renderRow={Column}
                    renderSeparator={Separator}
                    initialListSize={10}
                    pageSize={10}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.props.data.isLoading == 2 ? '已加载全部数据' : this.props.data.isLoading == 1 ? '正在加载中...': ''}
                </div>)}
                    scrollRenderAheadDistance={100}
                    scrollEventThrottle={2000}
                    onScroll={this.onScroll}
                    style={{
                height: document.documentElement.clientHeight + 'px',
                border: '1px solid #ddd',
                margin: '0.1rem 0'
              }}
                    scrollerOptions={{ scrollbars: true }}
                    refreshControl={<RefreshControl
                refreshing={this.props.data.refreshing}
                onRefresh={this.onRefresh}
              />}
                />
            );
        }
    }


}
;

ColumnList.propTypes = {};

export default ColumnList;

