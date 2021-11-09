import { USER_ERROR, USER_GET, USER_LOADING } from "../../types/Type"

const initialState = {
    user: [],
    error: "",
    loading: false
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_GET:
            return { ...state, user: action.user, loading: action.loading }
        case USER_ERROR:
            return { ...state, error: action.error, loading: action.loading }
        case USER_LOADING:
            return { ...state, loading: action.loading }
        default:
            return state
    }
}
export default user
