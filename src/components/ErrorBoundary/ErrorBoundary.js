import React, { Component } from "react";

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
		};
	}
	static getDerivedStateFromError(error) {
		this.setState({ error: error });
	}
	componentDidCatch(error, info) {
		console.log(error, info);
	}

	render() {
		return (
			<>
				{this.state.error ? (
					<p>Something Went Wrong !!</p>
				) : (
					this.props.children
				)}
			</>
		);
	}
}

// They catch errors in their child component(s),
// during the rendering phase, and in lifecycle methods. Errors thrown in
// any of the child components of an error boundary will be delegated to the
// closest error boundary in the component tree.

// The rule of thumb is that static getDerivedStateFromError()
// should be used to render a fallback UI after an error has been thrown,
//  while componentDidCatch() should be used to log those error(s).
