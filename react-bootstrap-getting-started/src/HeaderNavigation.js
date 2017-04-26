const React = require('react');
const Navbar = require('react-bootstrap/lib/Navbar');
const Nav = require('react-bootstrap/lib/Nav');
const Button = require('react-bootstrap/lib/Button');

class HeaderNavigation extends React.Component {
	render() {
		<Navbar>
			<Navbar.Header>
				<Navbar.Brand>
					<a href="#">Project name</a>
				</Navbar.Brand>
			</Navbar.Header>
		</Navbar>

	}
}

// Export
exports['default'] = HeaderNavigation;
module.exports = HeaderNavigation;
