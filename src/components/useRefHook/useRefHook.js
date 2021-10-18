import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
	const [name, setname] = useState("");
	const ipref = useRef();
	//rendercount is an object with one prop current
	//rendercount={current:1}
	function focusIP() {
		ipref.current.focus();
	}

	// useEffect(() => {
	// 	renderCount.current = renderCount.current + 1;
	// });
	return (
		<div>
			<input
				ref={ipref}
				value={name}
				onChange={(e) => setname(e.target.value)}
			></input>

			<p>My name is {name}</p>
			{/* <p>I rendered {renderCount.current} times</p> */}
			<button onClick={focusIP}>Focus</button>
		</div>
	);
};

export default UseRefHook;

//the value of rendercount persists between renders
//seperate from component update cycle
//change in the value does not cause re render

//main use case is to refrence elements in html and select dom ele
//we can perform operations on them as well
