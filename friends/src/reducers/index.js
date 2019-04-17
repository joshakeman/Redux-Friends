import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    UPDATE_DATA_START,
    UPDATE_DATA_SUCCESS,
    UPDATE_DATA_FAILURE
} from '../actions'

const initialState = {
    friends: [],
    error: '',
    fetchingData: false,
    loggingIn: false
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: '',
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: '',
                loggingIn: false
            }
        case FETCH_DATA_START:
            return {
                ...state,
                error: '',
                fetchingData: true,
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                fetchingData: false,
                friends: action.payload.data
            }
        case UPDATE_DATA_START:
            return {
                ...state,
                error: '',
                fetchingData: false,
            }

            case UPDATE_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                fetchingData: false,
                friends: action.payload.data
            }
        
        default:
        return state

    }
}

export default reducer