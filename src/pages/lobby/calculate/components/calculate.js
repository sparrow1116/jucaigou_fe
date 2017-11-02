/**
 * Created by zhangyj on 2017/10/27.
 */
import React, { Component } from 'react';
import { ListView ,InputItem} from 'antd-mobile';

import * as method from '../../../../utils/method'

import styles from './calculate.css'
import Header from '../../../../common_components/head/head'

export default class CalculateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseCount:100,
            ratio:2.1,
            multiple:2,
            tableData:[
            ]
        };
    }

    calculate(){

        let theData = []
        for(var line = 0; line<10; line++){
            var theArr = [line,0,0,0,0];
            theData.push(theArr);
        }
        for(var i = 0; i<10;i++){
            if(i == 0){
                theData[i][1] = this.state.baseCount;
                theData[i][2] = theData[i][1];
            }else{
                theData[i][1] = method.accMul(theData[i -1][1],this.state.multiple);
                theData[i][2] = Number(theData[i-1][2]) + Number(theData[i][1]);
            }
            theData[i][3] = method.accMul(theData[i][1],this.state.ratio);
            theData[i][4] = theData[i][3] - theData[i][2];
        }

        this.setState({
            tableData:theData
        });

    }


    render(){
        return(
            <div>
                <Header content="今日申请"></Header>
                <div className={styles.content}>
                    <div className={styles.headLine}>
                        <span>低赔单串模型计算</span>
                    </div>
                    <InputItem
                        type="number"
                        placeholder="请输入基数"
                        value={this.state.baseCount}
                        onChange={(value)=>this.setState({baseCount:value})}
                    >基数:</InputItem>
                    <InputItem
                        type="text"
                        placeholder="请输入固定赔率"
                        value={this.state.ratio}
                        onChange={(value)=>this.setState({ratio:value})}
                    >赔率:</InputItem>
                    <InputItem
                        type="number"
                        placeholder="请输入翻倍倍数"
                        value={this.state.multiple}
                        onChange={(value)=>this.setState({multiple:value})}
                    >倍数:</InputItem>
                </div>
                <table className={styles.myTable}>
                    <thead>
                        <tr>
                            <th>连黑</th>
                            <th>当天投入</th>
                            <th>累计投入</th>
                            <th>中奖</th>
                            <th>利润</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.tableData.map((item,i)=>{
                            return (
                                <tr key={i}>
                                    {
                                        item.map((data,j)=>{
                                            return <td key={j}>{data}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <button className={styles.riskCalculate}
                        onClick={this.calculate.bind(this)}
                >
                    开始计算
                </button>

            </div>
        )
    }
}