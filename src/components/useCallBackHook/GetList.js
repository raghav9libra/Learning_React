import React, { useEffect, useState } from "react";

const GetList = ({ getList }) => {
	const [list, setList] = useState();
	useEffect(() => {
		console.log("useEffect ran");
		setList(getList());
	}, [getList]);

	return <div>{list && list.map((ele) => <p>{ele}</p>)}</div>;
};

export default GetList;
