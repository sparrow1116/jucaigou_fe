/**
 * Created by renwj on 2017/8/2.
 */

import React,{Component} from 'react';
import { routerRedux } from 'dva/router';
import classnames from 'classnames';
import styles from './helpCenter.css';
import Head from '../../../common_components/head/head'

class HelpCenter extends Component{
    constructor(props){
        super(props);
        // state初始化
        this.state={
            currentIndex:'',
            panelList:[
                {
                    "head-title":"如何参与 OPPO 双包活动",
                    "content":"活动期间，店员成功办单，且手机型号为 OPPO R11 / R11 Plus，即享受双包奖励（两个红包）"
                },
                {
                    "head-title":"活动到什么时候结束",
                    "content":"本次活动时间是6月15日-6月30日"
                },
                {
                    "head-title":"活动的奖品有哪些",
                    "content":"店员除收到常规红包外，还可额外获得一个活动红包"
                },
                {
                    "head-title":"红包领取失败怎么办",
                    "content":"由所在城市的销售助理收集汇总，并统一提报 OA，进行补发"
                },
                {
                    "head-title":"每个店员可参与活动的次数",
                    "content":"参与次数没有上限，凡店员成功办单，且手机型号为 OPPO R11 / R11 Plus 即可参与此活动"
                },
                {
                    "head-title":"本次活动是在全国范围的吗",
                    "content":"是的"
                },
            ]
        }
        this.getHrefUrl=this.getHrefUrl.bind(this);
        this.itemActive=this.itemActive.bind(this);
    }
    itemActive(index){
        return index === this.state.currentIndex ? true : false;
    }
    getHrefUrl(){
        let url = window.location.href;
        let paramObj = {}
        let param = url.split('?')[1]
        //      console.log(url);
        let hrefUrl='';
        if(param){
            let paramArr = param.split('&');
            for(let i = 0; i<paramArr.length; i++){
                let theParam = paramArr[i].split('=');
                paramObj[theParam[0]] = theParam[1];
            }
            hrefUrl='https://chat3.365webcall.com/chat/chatwin3.aspx?settings=mw7mwXbm0wNPNwz3Aw7bbIz3AIz3A66mmNw' +
                '&memberid=' + paramObj['memberid'] + '&note=' + paramObj['note']
        };
        //   console.log(hrefUrl);
        return hrefUrl;
    }

    render(){
        // this.test();
        return (
            <div className={styles["help-center"]}>
                <Head titleName={'帮助中心'} isHomePage={true} />
                <div className={styles.header}>
                    <div className={styles.left}>
                        <div className={classnames(styles.block,styles["right-border"])}>
                            <a href={this.getHrefUrl()}>
                                <img src="src/assets/helpCenter/help_icon_service@3x.png"/>
                                <span className={classnames(styles.discript,styles.name)}>在线客服</span>
                            </a>

                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.block} >
                            <a href="tel:4006551250">
                                <img src="src/assets/helpCenter/help_icon_tel@3x.png"/>
                                <div className={styles["discript-right"]} >
                                    <div className={styles.name}>客服热线</div>
                                    <div className={styles.phone}>400-655-1250</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles["all_head"]}>常见问题</div>
                    {
                        this.state.panelList.map(function(ele,index){
                            return (
                                <div className={styles.panel} key={index} onClick={()=>{this.setState({currentIndex:index})}}>
                                    <div className={styles.head}>
                                        <span>{ele["head-title"]}</span>
                                        <img className={ this.state.currentIndex==index?styles["rotate-icon"]:null} src="src/assets/helpCenter/icon_smallarrow_down@3x.png"/>
                                        {/*<img style={{ display: this.state.currentIndex==index?'block':'none'}} src="src/assets/helpCenter/icon_smallarrow_down@3x.png"/>*/}
                                    </div>
                                    <div className={styles.content} style={{ display: this.state.currentIndex==index?'block':'none'}}>
                                        {ele.content}
                                    </div>
                                </div>
                            )
                        }.bind(this))
                    }
                </div>
            </div>
        )
    }
}

// 组件属性验证
HelpCenter.propTypes={

}
// 组件属性默认值
HelpCenter.defaultProps={

}

export default HelpCenter;
