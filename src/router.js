import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';

// import IndexPage from './routes/IndexPage';

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
             },
        }/*, {
            path: '/todayapply',
            name: 'TabPage',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    registerModel(app, require('./pages/today_apply/model'));
                    cb(null, require('./routes/Tab'));
                });
            }
        }, {
            path: '/Detail',
            name: 'DetailPage',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    registerModel(app, require('./pages/applyDetail/model'));
                    cb(null, require('./routes/detail'));
                });
            }
        }, {
            path: '/Point',
            name: 'PointPage',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    registerModel(app, require('./pages/point_mall/model'));
                    cb(null, require('./routes/point'));
                });
            }
        }, {
            path: '/PointDetail',
            name: 'PointDetailPage',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    registerModel(app, require('./pages/point_mall/model'));
                    cb(null, require('./routes/PointDetail'));
                });
            }
        }, {
            path: '/banklist',
            name: 'bankListPage',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, require('./routes/bankList'));
                });
            }
        }, {
            path: '/helpCenter',
            name: 'helpCenterPage',
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, require('./routes/helpCenter'));
                });
            }
        }*/
    ];

    return <Router history={history} routes={routes}/>;
}

export default RouterConfig;
