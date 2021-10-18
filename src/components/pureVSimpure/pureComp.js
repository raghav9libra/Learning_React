import React from "react";

class Purecomp extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}
	componentDidMount() {
		setInterval(() => {
			this.setState({ count: 0 });
		}, 1000);
	}

	render() {
		{
			console.log("render");
		}
		return <div>{this.state.count}</div>;
	}
}

// They compare the initial and final values for the state and props variables.
// If there is no difference between the two,
// they won’t trigger the re-rendering logic for the component.
// Performance is improved by not calling “render” recursively.

// TakeAway---------------
// Use Pure Components, in the case when the props and state changes are made to
// primitive type variable, state and props changes to reference variable
// may lead to incorrect results and inconsistent rendering

export default Purecomp;
