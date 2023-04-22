import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Master.css'
import Main from './Main';
import 'helpers/initFA';

ReactDOM.render(
  <React.StrictMode>
    <Main>
      <App />
    </Main>
  </React.StrictMode>,
  document.getElementById('main')
);
