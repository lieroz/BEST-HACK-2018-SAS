import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import 'assets/css/material-dashboard-react.css?v=1.2.0';

import indexRoutes from 'routes/index.jsx';

import veryCleverModule from './veryCleverModule';
import ServerApi from './ServerApi/ServerApi';

const hist = createBrowserHistory();

let serverApi = new ServerApi('http://localhost:8000');
serverApi.getData().then(res => {});

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>,
  document.getElementById('root')
);
