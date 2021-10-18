import React from "react";
import { Component } from "react";

interface AppProps {
	heading: string;
	extraText?: string;
}
interface AppState {
	obj: ObjectState | null;
}
interface ObjectState {
	name: string;
	age: number;
}
class UserTS extends Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = {
			obj: null,
		};
	}

	fetchUser = () => {
		this.setState({
			obj: {
				name: "ram",
				age: 31,
			},
		});
	};

	render() {
		const { heading } = this.props;
		const { extraText } = this.props;

		return (
			<>
				<h1>{heading}</h1>
				{extraText && <p>{extraText}</p>}
				<button onClick={this.fetchUser}>Fetch User</button>
				{this.state.obj && <div>{this.state.obj.age}</div>}
			</>
		);
	}
}

export default UserTS;
