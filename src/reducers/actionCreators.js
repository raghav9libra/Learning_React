import { getUsers } from "../sagas/request/user";
import { ADD_VALUE, DECCREMENT, INCREMENT } from "./constants";
import { setUser } from "./userReducer";

export const increment = () => {
	return {
		type: INCREMENT,
	};
};

export const decrement = () => {
	return {
		type: DECCREMENT,
	};
};
export const addValue = (value) => {
	return {
		type: ADD_VALUE,
		payload: value,
	};
};

export const getUserThunk = (dispatch) => {
	return (dispatch) => {
		getUsers().then((data) => {
			dispatch(setUser(data.data));
		});
	};
};
