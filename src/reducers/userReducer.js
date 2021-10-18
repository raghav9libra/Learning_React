export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";

export const getUser = () => {
	return {
		type: GET_USER,
	};
};
export const setUser = (data) => {
	return {
		type: SET_USER,
		payload: data,
	};
};

const intialState = {
	users: undefined,
};

export const userReducer = (state = intialState, action) => {
	switch (action.type) {
		// case SET_USER:
		// 	return {
		// 		...state,
		// 		users: action.payload,
		// 	};

		default:
			return state;
	}
};
