import './index.html';
import './index.css';
import dva from 'dva';
import { browserHistory } from 'dva/router';

// import './sdk/bridge.js';
// import './sdk/native.js';
// import './sdk/native-release.js';


// 1. Initialize
const app = dva(/*{
 history: browserHistory
 }*/);

// 2. Plugins
//app.use({});

// 3. Model
//app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start

// document.addEventListener('bridgeReady', function (event) {
    app.start('#root');
// }, false);


