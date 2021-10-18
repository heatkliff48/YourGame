import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import axios from 'axios';
import {store} from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom';


axios.defaults.baseURL = 'http://localhost:3001';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        {/* <NoteContextProvider> */}
        <App />
        {/* </NoteContextProvider> */}
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
