import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';

import reportWebVitals from './reportWebVitals';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import Detail from "./components/meeting/Meeting-detail.js";
import { Route, Switch } from "react-router-dom";
Amplify.configure(awsExports);

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
       <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/meeting/:meetingId"><Detail /></Route>
        <Route path="/meeting"><Detail /></Route>
     </Switch>
      </div>
    
    );
  }
}

 ReactDOM.render(
   <BrowserRouter>
     <App />
   </BrowserRouter>,   document.getElementById('root')
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
