import React, { useEffect, useState } from "react";
import FirstChild from "./counterChild/firstChild";
import SecondChild from "./counterChild/secondChild";
import ThirdChild from "./counterChild/thirdChild";

//rules of state
// 1. Do not modify state directly

//2. Async Update this.props and this.state may be updated asynchronously,
// should not rely on their values for calculating the next state.

// setcount((state,props)=>{
// count=state.count+props.x
// })
// 3. State Updates are Merged

// setState a prop and use it in your component,
//  you’re breaking the flow of the rendering props.

//props should be rendred

const StateConcept = (props) => {
	let [magicNumber, setmagicNumber] = useState(0);

	const randomNumGen = () => {
		let num = Math.random().toFixed(2);
		return num;
	};

	useEffect(() => {
		let timerId = setInterval(() => {
			setmagicNumber(randomNumGen());
		}, 1000);
		return () => {
			clearInterval(timerId);
		};
	}, []);

	return (
		<div>
			<FirstChild magicNum={magicNumber} />
			<SecondChild magicNum={magicNumber} />
			<ThirdChild magicNum={magicNumber} />
		</div>
	);
};

export default StateConcept;
