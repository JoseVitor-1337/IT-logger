import { ADD_LOG, GET_LOGS, SET_LOADING, LOGS_ERROR, DELETE_LOG, SET_CURRENT_LOG, CLEAR_CURRENT_LOG, UPDATE_LOG, SEARCH_LOGS } from './../actions/types'

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload], // Get all state logs, plus the new log from payload
                loading: false
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload),
                loading: false
            }
        case UPDATE_LOG: 
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log),
                loading: false
            }
        case SET_CURRENT_LOG:
            console.log(action.payload)
            return {
                ...state,
                current: action.payload
            }
        case SEARCH_LOGS:
            return {
                ...state,
                logs: action.payload
            }
        case CLEAR_CURRENT_LOG:
            return {
                ...state,
                current: null
            }    
        case LOGS_ERROR:
            return {
                ...state,
                error: action.payload   
            }
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        default: 
            return state
    }
}