/**
 * Created by zhangyj on 2017/10/30.
 */
import React, { Component } from 'react'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import { List } from 'antd-mobile';
const Item = List.Item;
import * as method from '../../../utils/method'
import Header from '../../../common_components/head/head'
import styles from './annoucement.css'
import productPic from '../../../assets/2letter.png'

class AnnouncementList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.dispatch({
            type: 'Announcement/getAnnouncement'
        })
    }

    render(){
        return(
            <div>
                <Header content="系统公告"></Header>
                <div className={styles.content}>
                    <div className={styles.headLine}>
                        <span>公告列表</span>
                    </div>
                    <List >
                        {
                            this.props.list.map((item,index)=>{
                                return(
                                    <Item
                                        key={index}
                                        thumb={productPic}
                                        arrow="horizontal"
                                        onClick={() => {
                                            this.props.dispatch(routerRedux.push({
                                                pathname: '/home/theAnnouncement',
                                                query: { id:item.id }
                                            }))
                                        }}
                                    >[{method.Format(new Date(item.date),'MM-dd')}]{item.title}</Item>
                                )
                            })
                        }
                    </List>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const { list} = state.Announcement;
    return {
        list
    };
}

export default connect(mapStateToProps)(AnnouncementList);