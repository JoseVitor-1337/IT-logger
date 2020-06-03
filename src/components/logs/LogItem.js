import React from 'react'
import PropTypes from 'prop-types'  
import Moment from 'react-moment'
import Materialize from 'materialize-css/dist/js/materialize.min.js'

import { connect } from 'react-redux'
import { deleteLog, setCurrentLog } from './../../actions/logActions'

const LogItem = (props) => {

    const onDelete = () => {
        props.deleteLog(props.log.id)
        Materialize.toast( { html: 'Log delete with success!'})
    }

    return (
        <li className="collection-item">
            <div>
                <a 
                    href="#edit-log-modal" 
                    onClick={() => props.setCurrentLog(props.log)}
                    className={`modal-trigger ${props.log.attention ? 'red-text' : 'blue-text'} `}>{props.log.message}
                </a>

                <br/>

                <span className="grey-text">
                    <span className="black-text">ID #{props.log.id} </span> 
                    last update by {' '} 
                    <span className="black-text">{props.log.tech } </span>
                    on {' '}<Moment format='MMMM do YYYY, h:mm:ss a'>{props.log.date}</Moment>
                </span>

                <a href="#!" onClick={onDelete} className="secondary-content">
                    <i className="fas fa-trash-alt"></i>
                </a>

            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrentLog: PropTypes.func.isRequired,
}

export default connect(
    null,
    { deleteLog, setCurrentLog }
)(LogItem)
