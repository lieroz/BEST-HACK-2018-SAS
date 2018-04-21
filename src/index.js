import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import 'assets/css/material-dashboard-react.css?v=1.2.0';

import indexRoutes from 'routes/index.jsx';

import veryCleverModule from './veryCleverModule';
import ServerApi from "./ServerApi/ServerApi";

let serverApi = new ServerApi('http://95670df7.ngrok.io');
serverApi.getData().then(res => {
   console.log(res.data);

   Object.keys(res.data).forEach(key => {
       veryCleverModule.registerAction(key,(parameters) => {
           let url = res.data[key];
           if(!parameters){
               let keys = Object.keys(parameters);
               if(keys.length !== 0){
                   url += '?';
                   keys.forEach(param  => {
                       url += `${param}=${parameters[param]}&`
                   });
                   url = url.slice(0,url.length-1);
               }
           }
           window.location = url;
       })
   })
});
const hist = createBrowserHistory();

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
