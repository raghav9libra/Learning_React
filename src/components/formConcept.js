import React, { useState } from "react";

const FormConcept = () => {
	const [state, setstate] = useState({ fname: "", lname: "" });
	const handleChange = (e) => {
		// abstracted handleFormChange
		const { name, value } = e.target;
		// updateState-----
		setstate((prevState) => ({
			...prevState,
			[name]: value,
		}));
		//use this pattern when we need to use State as an object
	};

	return (
		<form>
			<label for="fname">FirstName</label>
			<input value={state.fName} name="fname" onChange={handleChange}></input>
			<label for="fname">LastName</label>
			<input value={state.lName} name="lname" onChange={handleChange}></input>

			{state.fname}
			{state.lname}
		</form>
	);
};

export default FormConcept;
