var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('./components/TodoApp.react');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todoapp')
);
