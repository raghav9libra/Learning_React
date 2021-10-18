import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
	const [count, setcount] = useState(0);
	const [changeColour, setchangeColour] = useState(false);
	const [color, setcolor] = useState("red");

	const num = useMemo(() => {
		inc(count);
	}, [count]);

	const ColourChangeHandler = () => {
		setchangeColour((prevState) => {
			return !prevState;
		});

		changeColour ? setcolor("yellow") : setcolor("red");
	};

	function inc(val) {
		console.log("inc was called");
		return val + 4;
	}

	const incHandler = () => {
		setcount(count + 4);
	};

	//whether we change theme color or we increment count
	//  the function inc is alawys called
	console.log(num);
	return (
		<div>
			<p style={{ background: color }}>{count}</p>
			<button onClick={ColourChangeHandler}>Change Colour</button>
			<button onClick={incHandler}>Incremnet</button>
		</div>
	);
};

export default UseMemoHook;

///HOW IT WORKS---------

// During initial rendering, useMemo(compute, dependencies)
// invokes compute, memoizes the calculation result,
// and returns it to the component.

// If during next renderings the dependencies don’t change,
// then useMemo() doesn’t invoke compute but returns the memoized value.

// But if dependencies change during re-rendering, then useMemo()
// invokes compute, memoizes the new value, and returns it.
