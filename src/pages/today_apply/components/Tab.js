import React,{Component} from 'react';
import { connect } from 'react-redux';
import { routerRedux } from 'dva/router';
import styles from './Tab.css';
import  {Tabs} from 'antd-mobile';
import ColumnList from './columnList'

const TabPane = Tabs.TabPane;



class TabsDemo extends Component {

    constructor(props) {
        super(props);


    }

// function TabsDemo({ dispatch, allData,loanedData, loaningData,currentTab, allIsLoading,
//     loanedIsLoading,
//     loaningIsLoading}) {


    callback(key) {
        this.props.dispatch({
            type: 'Tabs/changeTab',
            payload: { currentTab:key }
        });
    }

    componentWillMount(){
    }
    componentDidMount(){
        if(this.props.init){
            this.props.dispatch({
                type: 'Tabs/startFirstRefresh'
            });
        }
    }



// hammerOptions={[{"type":"pan","enable":false,},{"type":"swipe","direction":"DIRECTION_HORIZONTAL",},{"event":"pan","direction":"DIRECTION_HORIZONTAL","threshold":100}]}

    render() {

        // const tabTitle = ()=>{
        //     return <span>今日全部 <span style={{fontSize: '12px'}}>{this.props.allData.total?this.props.allData.total:''}</span> </span>
        // }

        const tabTitle = () => {

            <span>今日全部 <span style={{fontSize: '12px'}}>{this.props.allData.total?this.props.allData.total:''}</span> </span>

        };

        return (
        <div >
            <Tabs defaultActiveKey={this.props.currentTab + ''} animated={true}  className={styles.tab} onChange={this.callback.bind(this)} hammerOptions={{"event":"pan","enable":false}}>
                <TabPane tab={"今日全部("+(this.props.allData.total?this.props.loanedData.total:'0')+")"}  key="0">
                    <div style={{ justifyContent: 'center'}}>
                        <ColumnList  Tabkey={0}   dispatch={this.props.dispatch} data={this.props.allData} init={this.props.init} />
                    </div>
                </TabPane>
                <TabPane tab={"已放款("+(this.props.loanedData.total?this.props.loanedData.total:'0')+")"} key="1">
                    <div style={{justifyContent: 'center' }}>
                        <ColumnList   Tabkey={1}  dispatch={this.props.dispatch} data={this.props.loanedData} init={this.props.init}  />

                    </div>
                </TabPane>
                <TabPane tab={"结算中("+(this.props.loaningData.total?this.props.loaningData.total:'0')+")"}  key="2">
                    <div style={{  justifyContent: 'center' }}>
                        <ColumnList   Tabkey={2}  dispatch={this.props.dispatch} data={this.props.loaningData} init={this.props.init}  />

                    </div>
                </TabPane>
            </Tabs>
        </div>
    );
   }
}

function mapStateToProps(state) {

    const { allData,loanedData, loaningData,currentTab,init } = state.Tabs;
    const allRefreshing = state.Tabs.allData.refreshing;
    const loanedRefreshing = state.Tabs.loanedData.refreshing;
    const loaningRefreshing = state.Tabs.loaningData.refreshing;

    const allIsLoading = state.Tabs.allData.isLoading;
    const loanedIsLoading = state.Tabs.loanedData.isLoading;
    const loaningIsLoading = state.Tabs.loaningData.isLoading;

    const allInit = state.Tabs.allData.init;
    const loanedInit = state.Tabs.loanedData.init;
    const loaningInit = state.Tabs.loaningData.init;

    return {
        allData,
        loanedData,
        loaningData,
        currentTab,
        init,
        allRefreshing,
        loanedRefreshing,
        loaningRefreshing,
        allIsLoading,
        loanedIsLoading,
        loaningIsLoading,
        allInit,
        loanedInit,
        loaningInit
    };
}

export default connect(mapStateToProps)(TabsDemo);
