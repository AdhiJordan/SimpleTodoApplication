var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

// Load foundation
$(document).foundation();

// App css
require('style!css!foundation-sites/dist/css/foundation.min.css');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
