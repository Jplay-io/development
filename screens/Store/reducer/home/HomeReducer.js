import { HOME_ERROR, HOME_GET, HOME_LOADING, } from "../../types/Type"

const initialState = {
    home: [],
    error: "",
    loading: false
}

const home = (state = initialState, action) => {
    switch (action.type) {
        case HOME_GET:
            return { ...state, home: action.home, loading: action.loading }
        case HOME_ERROR:
            return { ...state, error: action.error, loading: action.loading }
        case HOME_LOADING:
            return { ...state, loading: action.loading }
        default:
            return state
    }
}
export default home
