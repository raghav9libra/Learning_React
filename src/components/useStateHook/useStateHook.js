import React, { useState } from "react";
//UseState hooks how to use
const intitalFunction = () => {
	console.log("intial function ran");
	return 0;
};

const UseStateHook = () => {
	const [count, setcount] = useState(0);

	//this way of initialising state calls function on every render

	// const [count, setcount] = useState(intitalFunction());
	// alternate calls fucntion only on intial render
	// const [count, setcount] = useState(() => intitalFunction());

	const [mystate, setmystate] = useState({ name: "ram", age: "32" });
	// let { name, age } = mystate;
	let age = mystate.age;
	let name = mystate.name;

	const inc = () => {
		// setcount(count + 1);
		// setcount(count + 1);
		//this does not work we are overwriting same value
		//if we want to use  prev value to update the current value

		setcount((prevState) => prevState + 1); //this is function updater form

		//use function version of setState
		setcount((prevState) => prevState + 1);

		setmystate((prevState) => {
			return { ...prevState, age: prevState.age - 1 };

			//this overwrites the state ,does not update but overwrite
		});
	};

	const dec = () => {
		setcount(count - 1);
	};

	return (
		<div>
			<button onClick={inc}>Increment</button>
			<span>{count}</span>
			<button onClick={dec}>Decrement</button>
			<p>{name}</p>
			<p>{age}</p>
		</div>
	);
};

export default UseStateHook;

//---------points to remember in STATE HOOK-----------
//1.To update current value based on prev value use setState function version

// If the new state is computed using the previous state,
// you can pass a function to setState. The function will receive the previous value,
// and return an updated value.

//2.State updates are not merged in useState hook

// 3.Careful with intial value as a function call.

// Sometimes instead of passing a primitive value,
// an object or an array as argument, you can also pass a function.
// The value returned by the function passed is used for initializing state.
// That is referred to as lazy state initialization.

// function initializer() {
//     return Math.random();
//   }
// 1.you can pass a function which calls initializer as an argument, like:
//  -----------const [state, setState] = React.useState(() => initializer());
// 2.or else pass initializer to useState without invoking it like:
//  -----------const [state, setState] = React.useState(initializer);

// The above two approaches ensure initializer is invoked on
// first render but ignored in subsequent re-renders.

// 3.-----------const [state, setState] = React.useState(initializer());
// The initial state is ignored in subsequent renders but the
// initializer which is used for initializing it is invoked in every re-render.
