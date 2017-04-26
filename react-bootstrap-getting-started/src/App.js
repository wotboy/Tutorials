const React = require('react');
const ReactDOM = require('react-dom');
const Button = require('react-bootstrap/lib/Button');
const HeaderNavigation = require('./HeaderNavigation');
import 'bootstrap/less/bootstrap.less';

ReactDOM.render(
	<HeaderNavigation />,
	document.getElementById('app'));
