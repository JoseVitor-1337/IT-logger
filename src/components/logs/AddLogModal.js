import React, { useState } from 'react'
import Materialize from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'
import TechSelectOptions from './../techs/TechSelectOptions'

import { connect } from 'react-redux'
import { addLog } from './../../actions/logActions' 

const AddLogModal = (props) => {
    const [ message, setMessage ] = useState('');
    const [ attention, setAttention ] = useState(false);
    const [ tech, setTech ] = useState('');

    const onSubmit = () => {
        if (message === '' || tech === '' ){
            Materialize.toast({ html: 'Please enter a message and tech' })
        } else {
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            }

            props.addLog(newLog);

            Materialize.toast({ html: `Log added by ${tech}` })
        }
        // Clear fields after action
        setMessage('')
        setTech('')
        setAttention(false)
    }

    return (
        <div id = "add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">

                <h4>Enter System Log</h4>

                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="message" 
                            value={message} 
                            onChange={event => setMessage(event.target.value)}
                        />
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech}  onChange={event => setTech(event.target.value)}
                            className="browser-default"
                        >
                            <option value="" disabled>
                                Select Technicia
                            </option>
                            <TechSelectOptions /> 
                        </select>
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input 
                                    type="checkbox" 
                                    className="filled-in" 
                                    checked={attention} 
                                    value={attention}
                                    onChange={event => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>

            </div> 

            <div className="modal-footer">
                <a 
                href="#!" 
                onClick={onSubmit} 
                className="modal-close waves-effect wave-light btn" 
                > Add new log </a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired,
}


export default connect(
    null, // Theres no state pass in here
    { addLog }
)(AddLogModal)
