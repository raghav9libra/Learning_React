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

// ---------------Memoization-----------

// We just return the cached result if calling a function
// with the same parameters without recalculating

// But the requirement is that the function is a pure function

// -----------------Pure Function
// The function always returns the same result if the same arguments are passed in.

// 1.It does not depend on any state, or data, change during a program’s execution.
// It must only depend on its input arguments.

// 2.The function does not produce any observable side effects such as
// network requests, input and output devices, or data mutation.

//----------------- How to prevent re rendring in child components
// const MyComponent = React.memo(function MyComponent(props) {
//   /* render using props */
// });
