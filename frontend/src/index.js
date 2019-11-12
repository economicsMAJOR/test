// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import HomeApp from './HomeApp';
import Home from './containers/Home';
import Posts from './containers/Posts';
import Post from './containers/Post';
import Good from './containers/Good';
import Shop from './containers/Shop';
import Lookbook from './containers/Lookbook';
import Board from './containers/Board';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={HomeApp}/>
    <Route path="/" component={App}>

        {/* {<IndexRoute component={HomeApp}/>} */}
        {/* <Route path="post" component={Posts}>
          <Route path=":id" component={Post}/>
        </Route> */}

        <Route path="shop" component={Shop}>
          <Route path=":id" component={Good}/>
        </Route>
        <Route path="lookbook" component={Lookbook}/>
        <Route path="board" component={Board}>
          <Route path=":id" component={Post}/>
        </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);

