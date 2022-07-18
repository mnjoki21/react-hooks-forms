import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'
import ParentComponent from './ParentComponent';

ReactDOM.render(
  <Form />,
  <ParentComponent />,
  document.getElementById('root')
);