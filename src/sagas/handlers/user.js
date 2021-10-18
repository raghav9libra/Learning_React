import { call, put } from "redux-saga/effects";
import { setUser } from "../../reducers/userReducer";
import { getUsers } from "../request/user";

export function* handleGetUser() {
	try {
		const response = yield call(getUsers);
		const { data } = response;
		yield put(setUser(data));
	} catch (err) {
		console.log(err);
	}
}
