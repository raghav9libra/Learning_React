import { ADD_VALUE, DECCREMENT, INCREMENT } from "./constants";
import { SET_USER } from "./userReducer";

const intialState = {
	count: 0,
	users: null,
};

export const reducer = (state = intialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { count: state.count + 1 };

		case DECCREMENT:
			return {
				count: state.count > 0 ? state.count - 1 : state.count,
			};
		case ADD_VALUE:
			return {
				count: state.count + action.payload,
			};
		case SET_USER:
			return {
				...state,
				users: action.payload,
			};
		default:
			return state;
	}
};
