import React, { useEffect, useState } from "react";

const SecondChild = (props) => {
	// render()
	// doesn’t know that a prop has changed
	//  so it is not triggering the re-rendering of the component.
	// hence didMountNotworking

	const [stateNum, setstateNum] = useState();
	useEffect(() => {
		setstateNum(props.magicNum);
	}, []);

	return <div>SecondChild{stateNum}</div>;
};

export default SecondChild;
