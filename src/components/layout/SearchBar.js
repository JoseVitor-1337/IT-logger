import React, { useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchLogs } from './../../actions/logActions'

const SearchBar = (props) => {
    const text = useRef('');

    const onChange = (event) => {
        props.searchLogs(text.current.value)
    }

    return (
        <nav style={{ marginBottom: '30px'}} className="red">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                    <input 
                        id="search" 
                        type="search"
                        placeholder="Search Logs"
                        ref={text}
                        onChange={onChange}
                        required
                    />
                        <label className="label-icon" htmlFor="search"><i className="material-icons"></i></label>
                    <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

SearchBar.propTypes = {
    searchLogs: PropTypes.func.isRequired,
}

export default connect(null, { searchLogs })(SearchBar)
