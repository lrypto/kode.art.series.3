import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider} from "./common/Store";
import { Router, RouteComponentProps } from "@reach/router";
import GettingStarted from './views/GettingStarted';
import NotFound from './views/NotFound';

import './bootstrap.min.css';
import './fixed.css';
import './style.css';
import "antd/dist/antd.css";

import Main from "./views/Main";
import Test from './views/Test';



const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
      <Router>
        <App path="/">        
            <RouterPage pageComponent={<Main />} path="/" />
            <RouterPage pageComponent={<Test />} path="/test" />  
            <RouterPage pageComponent={<GettingStarted />} path="/gettingStarted" />  
            <RouterPage pageComponent={<NotFound />} default />
        </App>
      </Router>
  </StoreProvider>,
  document.getElementById("root")
);
