import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import {AuthProvider,DataProvider , UserProvider} from "./context"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <AuthProvider>
         <UserProvider>
          <App />
        </UserProvider>
        </AuthProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
