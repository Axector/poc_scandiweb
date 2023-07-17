const defaultState = {
	homeText: 'Home',
	aboutText: 'About'
}

export const FETCH_HOME_TEXT = 'fetch_home_text'
export const FETCH_ABOUT_TEXT = 'fetch_about_text'

export const textReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_HOME_TEXT:
			return {...state, homeText: action.payload}
		case FETCH_ABOUT_TEXT:
			return {...state, aboutText: action.payload}
		default:
			return state
	}
};
