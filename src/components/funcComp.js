import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { addValue, decrement, increment } from "../reducers/actionCreators";
const FuncComponent = (props) => {
	// const [count, setcount] = useState(0);
	const [showCounter, setShowCounter] = useState(true);

	// const btnRef = useRef(0);

	let Incrementhandler = () => {
		props.increment();
	};

	let add5 = () => {
		props.addValue(5);
	};

	// console.log("rendered");
	// const effect = (phase) =>
	// 	setTimeout(
	// 		() => {
	// 			console.log(`this ran after 2 seconds in ${phase}`);
	// 		},
	// 		0,
	// 		phase
	// 	);
	// const syncEffect = (phase) => {
	// 	console.log(`works as ${phase}`);
	// };

	// useEffect(() => {
	// 	// effect("mount");
	// 	syncEffect("mount");
	// 	//call an API to fetch data from netwrok
	// 	//add event listners

	// 	return syncEffect("unmount");
	// 	// effect("unmount");
	// 	//remove event listners
	// }, []);

	// useEffect(() => {
	// 	console.log("this effect ran due to change in count");

	// 	//this works as compoenent did update
	// }, [count]);

	return (
		<>
			{showCounter && (
				<div className="counter">
					Count value is {props.count}
					<div style={{ marginTop: "16px" }}>
						<button onClick={Incrementhandler}>Increment</button>
						<button onClick={() => props.decrement()}>Decrement</button>
						<button onClick={add5}>Add 5</button>
					</div>
				</div>
			)}
			<button onClick={() => setShowCounter(!showCounter)}>
				{showCounter ? "Hide Counter" : "Show Counter"}
			</button>
		</>
	);
};
function mapStateToProps(state) {
	return {
		count: state.reducer.count,
	};
}
const mapDispatchToProps = {
	increment,
	decrement,
	addValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(FuncComponent);
