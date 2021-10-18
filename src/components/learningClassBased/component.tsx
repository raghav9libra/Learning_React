import React, { Component } from "react";
import { AppState } from "./container";
interface DisplayProps {
	name: string;
}
interface DisplayState {
	projects: Array<string>;
}
class Display extends Component<DisplayProps, DisplayState> {
	constructor(props: DisplayProps) {
		super(props);
		this.state = { projects: [] };
	}

	fetchDetails = (name: string) => {
		setTimeout(() => {
			this.setState({
				projects: name === "John" ? ["Alpha", "beta"] : ["gamma", "jeta"],
			});
		}, 2000);
	};

	componentDidUpdate(prevProps: DisplayProps, prevState: DisplayState) {
		if (prevProps.name !== this.props.name) {
			this.fetchDetails(this.props.name);
		}
	}

	render() {
		return (
			<>
				<p>This is project for {this.props.name}</p>
				{this.state.projects.map((ele) => {
					return <li>{ele}</li>;
				})}
			</>
		);
	}
}
export default Display;
