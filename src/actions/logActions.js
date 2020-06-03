import { ADD_LOG, GET_LOGS, SET_LOADING, LOGS_ERROR, DELETE_LOG, SET_CURRENT_LOG, CLEAR_CURRENT_LOG, UPDATE_LOG } from './types'

// The redux-thunk allow to return a function
export const getLogs = () => {
    return async (dispatch) => {
        try {
            setLoading();

            const res = await fetch('/logs');
            const data = await res.json();

            dispatch({
                type: GET_LOGS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.statusText  
            });
        }
    }
}

// Add a new log on the json-server
export const addLog = (log) => {
    return async (dispatch) => {
        try {
            setLoading();

            // POST request using the fetch()
            const res = await fetch('logs', {
                method: 'POST',
                body: JSON.stringify(log), // convert the javascript data from a objct notation,
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await res.json();

            dispatch({
                type: ADD_LOG,
                payload: data
            })

        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.statusText  
            });
        }
    }
}

// Search Logs from the user
export const searchLogs = (text) => {
    return async (dispatch) => {
        try {
            setLoading();

            const res = await fetch(`/logs?q=${text}`);
            const data = await res.json();

            dispatch({
                type: GET_LOGS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.statusText  
            });
        }
    }
}

// Delete a log
export const deleteLog = (id) => {
  return async (dispatch) => {
    try {
        setLoading();

        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        })

        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText  
        });
    }
  }
}

// Update a log on server
export const updateLog = (log) => {
    return async (dispatch) => {
        try {
            setLoading();
  
            const res = await fetch(`/logs/${log.id}`, {
                method: 'PUT',
                body: JSON.stringify(log), // convert the javascript data from a objct notation,
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json()
            console.log(data)
            dispatch({
                type: UPDATE_LOG,
                payload: data
            })
        } 
        catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.statusText  
            });
        }
    }
  }
  

// Set current log in the form
export const setCurrentLog = (log) => {
    return {
        type: SET_CURRENT_LOG,
        payload: log
    }
}

// Clear current log in the form
export const clearCurrentLog = () => {
    return {
        type: CLEAR_CURRENT_LOG,
    }
}

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}