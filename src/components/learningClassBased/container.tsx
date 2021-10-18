import React, { Component } from "react";
import Display from "./component";

export interface AppState {
	name: string;
}
export interface AppProps {
	name: string;
}
class Container extends Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = {
			name: "",
		};
	}

	handleJohn = () => {
		this.setState({ name: "John" });
	};
	handleMary = () => {
		this.setState({ name: "Mary" });
	};

	render() {
		return (
			<>
				<button onClick={this.handleJohn}>Get John</button>
				<button onClick={this.handleMary}>Get Mary</button>
				<Display name={this.state.name} />
			</>
		);
	}
}

export default Container;
