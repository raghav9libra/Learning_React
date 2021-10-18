import React, { useState } from "react";

const DynamicForm = () => {
	// create input field add /delete funcitonality with submit feature
	const [IpState, setIpState] = useState([{ firstName: "", lastName: "" }]);

	const addInputHandler = () => {
		let values = [...IpState, { firstName: "", lastName: "" }];
		setIpState(values);
	};
	const DeleteInputHandler = (index) => {
		let values = [...IpState];
		values.splice(index, 1);
		setIpState(values);
	};

	const onChangeHandler = (e, index) => {
		let values = [...IpState];
		let name = e.target.name;
		let value = e.target.value;
		values[index][name] = value;
		setIpState(values);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("form submitted", IpState);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				{IpState.length > 0
					? IpState.map((ele, index) => {
							return (
								<div key={index} className="input-wrapper">
									<div className="inputs">
										<input
											placeholder="First Name"
											name="firstName"
											value={ele.firstName}
											onChange={(e) => onChangeHandler(e, index)}
										/>
										<input
											placeholder="Last Name"
											name="lastName"
											value={ele.lastName}
											onChange={(e) => onChangeHandler(e, index)}
										/>
									</div>
									<div className="btn-grp">
										<button type="button" onClick={addInputHandler}>
											+
										</button>
										<button
											disabled={IpState.length > 1 ? false : true}
											type="button"
											onClick={() => DeleteInputHandler(index)}
										>
											-
										</button>
									</div>
								</div>
							);
					  })
					: null}
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default DynamicForm;
