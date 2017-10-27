import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';

import TT001 from './pages/tt001'
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
                },
            ]
        }
    ];

    return <Router history={history} routes={routes}/>;
}

export default RouterConfig;