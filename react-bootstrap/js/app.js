'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Button = require('react-bootstrap/lib/Button');
const ButtonGroup = require('react-bootstrap/lib/ButtonGroup');
const ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
const Grid = require('react-bootstrap/lib/Grid');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');

function WelcomeMessage() {
	return <h1>Hi there</h1>
}

class ChangingButton extends Button {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {active:false};
	}

	handleClick() {
		this.setState(
			prev=>{return {active: !prev.active};}
		);
	}

	render() {
		console.log(this.props.children + " " + this.state.active);
		return (
			<Button
				bsClass={this.props.bsClass}
				bsSize={this.props.bsSize}
				bsStyle={this.state.active ? "primary" : this.props.bsStyle}
				onClick={this.handleClick}
				>
				{this.props.children}</Button>
		);
	}
ButtonToolbar
}

class ReactBootstrap extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
<Grid>
	<Row className="show-grid">
		<Col xs={12}>
			<WelcomeMessage />
		</Col>
	</Row>
	<Row>
		<Col xs={12} sm={6}>
			<ButtonGroup bsSize="small">
				<ChangingButton>I'm button 1</ChangingButton>
				<ChangingButton>I'm button 2</ChangingButton>
				<ChangingButton>I'm button 3</ChangingButton>
			</ButtonGroup>
		</Col>
		<Col xs={12} sm={6}>
			<ButtonGroup>
				<ChangingButton>I'm button 4</ChangingButton>
				<ChangingButton>I'm button 5</ChangingButton>
			</ButtonGroup>
		</Col>
	</Row>
</Grid>
		);
	}

	componentDidMount() {
	}

}

ReactDOM.render(
  <ReactBootstrap />,
  document.getElementById('reactContainer')
);
