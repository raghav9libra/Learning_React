import React, { useEffect, useRef, useState } from "react";
import FirstChild from "./firstChild";

const ThirdChild = (props) => {
	// This is wrong unless you need to allow the user
	// to change the prop value received.

	// If you don’t need to change the prop val
	// always try to keep things working according to the React flow
	// (FirstChild).

	const [stateNum, setstateNum] = useState();

	useEffect(() => {
		setstateNum(props.magicNum);
		//useEffect triggers rerendering
	});

	useEffect(() => {
		setstateNum(props.magicNum);
	}, []);

	return <div>ThirdChild{stateNum}</div>;
};

export default ThirdChild;
