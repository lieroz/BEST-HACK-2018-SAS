import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import 'assets/css/material-dashboard-react.css?v=1.2.0';

import indexRoutes from 'routes/index.jsx';

import veryCleverModule from './veryCleverModule';
import ServerApi from "./ServerApi/ServerApi";
import Chat from './components/Chat';

window.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results==null){
    return null;
  }
  else{
    return decodeURI(results[1]) || 0;
  }
};


let serverApi = new ServerApi('http://95670df7.ngrok.io');
serverApi.getData().then(res => {
   console.log(res.data);

   Object.keys(res.data).forEach(key => {
       veryCleverModule.registerAction(key,(parameters) => {
           debugger;
           let url = res.data[key];
           if(parameters){
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
  <div>
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>
    <div style={{position: 'absolute', right: 0, bottom: 0, height: '400px', width: '300px', background: 'white'}}>
      <Chat/>
    </div>
  </div>,
  document.getElementById('root')
);
