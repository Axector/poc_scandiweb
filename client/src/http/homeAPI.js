import { $host } from "./index";
import { FETCH_HOME_TEXT } from '../reducers/textReducer'

export const fetchHomeText = () => {
	return async (dispatch) => {
		const {data} = await $host.get('api/home')
		dispatch({type: FETCH_HOME_TEXT, payload: data})
	}
}

export const fetchRandomNumber = async () => {
	const {data} = await $host.get('api/home/number')
	return data
}
