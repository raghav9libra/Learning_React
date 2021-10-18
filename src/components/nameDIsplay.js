import React from "react";

class NameDisplay extends React.Component {
	constructor(props) {
		// console.log("constructor");
		super(props);
		this.state = {
			age: 20,
		};
		this.buttonHAndler2 = this.buttonHAndler2.bind(this);
	}

	static getDerivedStateFromProps() {
		// console.log("getDerivedStateFromProps");
	}

	componentDidMount() {
		// console.log("componentDidMount");
	}
	buttonHAndler = () => {
		// this.setState({ age: 30 });
	};

	buttonHAndler2() {}

	// componentDidUpdate() {
	// 	console.log(componentDidUpdate);
	// }

	shouldComponentUpdate() {
		// console.log("shouldComponentUpdate");
	}

	getSnapshotBeforeUpdate() {
		// console.log("getSnapShowBeforeUpdate");
	}

	render() {
		// console.log("render");
		return (
			<div>
				Hi my name is {this.props.name} and i am {this.state.age} years old
				<button onClick={this.buttonHAndler}>Click Me</button>
				<button onClick={this.buttonHAndler2}>Click Me 2</button>
			</div>
		);
	}
}

export default NameDisplay;
