import React, { useCallback, useMemo, useState } from "react";
import GetList from "./GetList";

const UseCallBackHook = () => {
	const [number, setnumber] = useState(0);
	const [dark, setDark] = useState(false);
	const getList = useCallback(() => {
		return [number, number + 1, number + 2];
	}, [number]);

	const theme = {
		backgroundColor: dark ? "#333" : "#fff",
	};
	return (
		<div style={theme}>
			<input
				type="number"
				onChange={(e) => setnumber(parseInt(e.target.value))}
			></input>
			<button onClick={() => setDark((prevState) => !prevState)}>
				Set Theme
			</button>
			<GetList getList={getList} />

			{/* we pass a function as a param this changes on every render (ref changes)*/}
		</div>
	);
};

export default UseCallBackHook;

// useCallback(callbackFun, deps) is: given the same dependency values deps,
//  the hook returns (aka memoizes) the function instance between renderings:
