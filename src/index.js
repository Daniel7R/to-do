import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';


ReactDOM.render(
    <App className="container"/>
  ,
  document.getElementById('root')
);

ReactDOM.createPortal(
  <App className="container"/>
  ,
  document.getElementById('modal')
)