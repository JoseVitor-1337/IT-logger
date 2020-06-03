import React, { useEffect } from 'react';
import Preloader from './../layout/Preloader';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'; // Connect the redux actions and state with this component
import { getLogs } from './../../actions/logActions'
import LogItem from './LogItem';

const Logs = (props) => {

    // Get all the logs from the API
    useEffect(() => {
        props.getLogs()
        // eslint-disable-next-line
    }, [])

    if (props.log.loading || props.log.logs == null) {
        return <Preloader />
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!props.log.loading && props.log.logs.length === 0 ? (
                <p className="center">No logs to show...</p>
            ) : (
                props.log.logs.map(log => (
                    <LogItem log={log} key={log.id} />
                ))
            )}
        </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
}

// Get all the state from the log on th e "logReducer" file in the "initialState"
const mapStateToProps = (state) => ({
    log: state.log
})

// Connect the reducer with this component
export default connect(
    mapStateToProps,  // 1° Parameter is the state that will be passed,
    { getLogs }  // The 2° is a object with the actions from the reducer
)(Logs);
