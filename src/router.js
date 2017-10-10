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
        }
    ];

    return <Router history={history} routes={routes}/>;
}

export default RouterConfig;
