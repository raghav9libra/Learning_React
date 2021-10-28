import React, { useState } from "react";

const FormConcept = () => {
	const [state, setstate] = useState({ fname: "", lname: "" });
	const handleChange = (e) => {
		// abstracted handleFormChange
		const { name, value } = e.target;
		// updateState-----
		// const shallowState = { ...state };
		// shallowState[name] = value;
		setstate({
			...state,
			[name]: value,
		});
		// setstate((prevState) => ({
		// 	...prevState,
		// 	[name]: value,
		// }));
		// setstate(shallowState);
		//use this pattern when we need to use State as an object
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(state);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label for="fname">FirstName</label>
			<input value={state.fName} name="fname" onChange={handleChange}></input>
			<label for="fname">LastName</label>
			<input value={state.lName} name="lname" onChange={handleChange}></input>
			<input type="submit" />
			{state.fname}
			{state.lname}
		</form>
	);
};

export default FormConcept;
