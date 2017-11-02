import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';

import SelfTabBar from './pages/tabbar'

// import IndexPage from './routes/IndexPage';
//https://github.com/tytsp/react-antd-react-router-dva/blob/master/src/router.js
const cached = {};
function registerModel(app, model) {
    if (!cached[model.namespace]) {
        app.model(model);
        cached[model.namespace] = 1;
    }
}


function RouterConfig({ history,app}) {
    const routes = [
        {
            path: '/',
            name: 'Login',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    registerModel(app, require('./pages/login/model'));
                    cb(null, require('./routes/login'));
                });
            }
        },{
            path: '/register',
            name: 'Register',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    registerModel(app, require('./pages/register/model'));
                    cb(null, require('./routes/register'));
                });
            }
        },{
            path: '/home/',
            name: 'Home',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    registerModel(app, require('./pages/home/model'));
                    cb(null, require('./pages/home/components/home'));
                });
            },
            childRoutes: [
                {
                    path: 'lobby',
                    getComponent (nextState, cb) {
                        require.ensure([], require => {
                            registerModel(app, require('./pages/lobby/list/model'));
                            cb(null, require('./routes/lobby'));
                        })
                    },
                },{
                    path: 'history',
                    getComponent (nextState, cb) {
                        require.ensure([], require => {
                            registerModel(app, require('./pages/lobby/history/model'));
                            cb(null, require('./routes/history'));
                        })
                    },
                },{
                    path: 'productDetail',
                    getComponent (nextState, cb) {
                        require.ensure([], require => {
                            registerModel(app, require('./pages/lobby/list/model'));
                            cb(null, require('./routes/productDetail'));
                        })
                    },
                },{
                    path: 'protocol',
                    getComponent (nextState, cb) {
                        require.ensure([], require => {
                            //registerModel(app, require('./pages/lobby/list/model'));
                            cb(null, require('./routes/protocol'));
                        })
                    },
                },{
                    path: 'riskCalculate',
                    getComponent (nextState, cb) {
                        require.ensure([], require => {
                            //registerModel(app, require('./pages/lobby/list/model'));
                            cb(null, require('./routes/calculate'));
                        })
                    },
                },{
                    path: 'announcement',
                    getComponent (nextState, cb) {
                        require.ensure([], require => {
                            registerModel(app, require('./pages/announcement/model'));
                            cb(null, require('./routes/announcement'));
                        })
                    },
                },{
                    path: 'theAnnouncement',
                    getComponent (nextState, cb) {
                        require.ensure([], require => {
                            registerModel(app, require('./pages/announcement/model'));
                            cb(null, require('./routes/theAnnouncement'));
                        })
                    },
                },{
                    path: 'message',
                    getComponent (nextState, cb) {
                        require.ensure([], require => {
                            registerModel(app, require('./pages/message/model'));
                            cb(null, require('./routes/message'));
                        })
                    },
                },{
                    path: 'theMessage',
                    getComponent (nextState, cb) {
                        require.ensure([], require => {
                            registerModel(app, require('./pages/message/model'));
                            cb(null, require('./routes/theMessage'));
                        })
                    },
                },{
                    path: 'user',
                    getComponent (nextState, cb) {
                        require.ensure([], require => {
                            registerModel(app, require('./pages/user/home/model'));
                            cb(null, require('./routes/user'));
                        })
                    },
                },{
                    path: 'orderList',
                    getComponent (nextState, cb) {
                        require.ensure([], require => {
                            registerModel(app, require('./pages/user/order/model'));
                            cb(null, require('./routes/orderList'));
                        })
                    },
                },{
                    path: 'orderDetail',
                    getComponent (nextState, cb) {
                        require.ensure([], require => {
                            registerModel(app, require('./pages/user/order/model'));
                            cb(null, require('./routes/orderDetail'));
                        })
                    },
                },{
                    path: 'capitalList',
                    getComponent (nextState, cb) {
                        require.ensure([], require => {
                            registerModel(app, require('./pages/user/capital/model'));
                            cb(null, require('./routes/capitalList'));
                        })
                    },
                },{
                    path: 'capitalDetail',
                    getComponent (nextState, cb) {
                        require.ensure([], require => {
                            registerModel(app, require('./pages/user/capital/model'));
                            cb(null, require('./routes/capitalDetail'));
                        })
                    },
                },

            ]
        }
    ];

    return <Router history={history} routes={routes}/>;
}

export default RouterConfig;