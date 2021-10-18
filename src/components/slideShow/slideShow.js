import React, { useEffect, useRef, useState } from "react";
//create a slide show that displays names one by one
//play pause button
//loops through

const SlideShow = () => {
	const [state, setState] = useState(["ram", "mohan", "Tim"]);
	// const [value, setvalue] = useState(state[0]);
	const [reRender, setreRender] = useState(false);
	let index = useRef(0);

	const value = useRef(state[0]);

	return (
		<div>
			<p>{value.current}</p>
			{/* <button>Play</button>
			<button>Pause</button> */}
		</div>
	);
};

export default SlideShow;
