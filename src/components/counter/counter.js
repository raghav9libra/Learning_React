import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import {
	addValue,
	decrement,
	getUserThunk,
	increment,
} from "../../reducers/actionCreators";

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	incHandler = () => {
		this.setState((prevState) => {
			return { count: prevState.count + 1 };
		});
	};

	DecHandler = () => {
		this.setState((prevState) => {
			return { count: prevState.count - 1 };
		});
	};

	render() {
		return (
			<>
				{/* <p>{this.props.count}</p> */}
				<div>
					<button onClick={this.props.onInc}>INC</button>
					<button onClick={this.props.onDec}>DEC</button>
					<button onClick={this.props.getUsers}>Get Users</button>
				</div>
				{this.props.user
					? this.props.user.map((ele) => {
							return <p>{ele.name}</p>;
					  })
					: null}
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		count: state.reducer.count,
		user: state.reducer.users,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onInc: () => dispatch(increment()),
		onDec: () => dispatch(decrement()),
		addVal: () => dispatch(addValue(5)),
		getUsers: () => dispatch(getUserThunk()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
