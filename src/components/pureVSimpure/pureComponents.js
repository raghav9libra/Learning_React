import React from "react";

class ImpureComp extends React.Component {
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
	//even though the state is not changing here but its rerendring

	render() {
		{
			console.log("render");
		}
		return <div>{this.state.count}</div>;
	}
}

export default ImpureComp;
