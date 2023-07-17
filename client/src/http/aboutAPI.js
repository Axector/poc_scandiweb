import { $host } from "./index";
import { FETCH_ABOUT_TEXT } from "../reducers/textReducer";

export const fetchAboutText = () => {
	return async (dispatch) => {
		const {data} = await $host.get('api/about')
		dispatch({type: FETCH_ABOUT_TEXT, payload: data})
	}
}
