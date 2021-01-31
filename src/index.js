import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { getGroupIdAndUserId } from './redux/Actions/authActions';
import {ErrorBoundary} from './ErrorBoundary';

store.dispatch(getGroupIdAndUserId());


ReactDOM.render(
  <ErrorBoundary>
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
