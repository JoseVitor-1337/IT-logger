import React, { useState, useEffect } from 'react'
import Materialize from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'
import TechSelectOptions from './../techs/TechSelectOptions'

import { connect } from 'react-redux';
import { updateLog } from './../../actions/logActions'



const EditLogModal = (props) => {
    const [ message, setMessage ] = useState('');
    const [ attention, setAttention ] = useState(false);
    const [ tech, setTech ] = useState('');

    useEffect(() => {
        if (props.current !== null) {
            setMessage(props.current.message)
            setAttention(props.current.attention)
            setTech(props.current.tech)
        }
    }, [props.current]) // When current change this your be activated

    async function onSubmit() {
        if (message === '' || tech === '' ){
            Materialize.toast({ html: 'Please enter a message and tech' })
        } else {
            const updateLog = {
                id: props.current.id,
                message,
                attention,
                tech,
                date: new Date()
            }

            props.updateLog(updateLog);
            Materialize.toast({ html: `Log updated by ${tech}`})

        // Clear fields after action
        setMessage('')
        setTech('')
        setAttention(false)
        }
    }

    return (
        <div id = "edit-log-modal" className="modal" style={modalStyle}>
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
                > Edit the log </a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired,
}

// When you get a state from the reducer to your aplication
const mapStateToProps = (state) => ({ // return
    current: state.log.current
})

export default connect(
    mapStateToProps,
    { updateLog }
)(EditLogModal)
