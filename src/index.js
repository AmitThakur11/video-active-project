import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import {AuthProvider,DataProvider} from "./Context"
import ScrollToTop from "./utils/scrollToTop"
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop/>
      <DataProvider>
        <AuthProvider>
         
          <App />
       
        </AuthProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
