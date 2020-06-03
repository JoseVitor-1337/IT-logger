import React, { useState } from 'react'
import Materialize from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { addTech } from './../../actions/techActions'
import PropTypes from 'prop-types'
    

const AddTechModal = (props) => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    // const [ tech, setTech ] = useState('');

    async function onSubmit() {
        if ( firstName === '' || lastName === '' ){
            Materialize.toast({ html: 'Please enter a first and last name' })
        } else {
            props.addTech({
                firstName, 
                 lastName
            });
            Materialize.toast({ html: `${firstName} ${lastName} was add as tech` })
            // Clear fields after action
            setFirstName('')
            setLastName('')
        }
    }

    return (
        <div id="tech-add-modal" className="modal" >
            <div className="modal-content">

                <h4>Enter a new technician</h4>

                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="firstName" 
                            value={firstName} 
                            onChange={event => setFirstName(event.target.value)}
                        />
                        <label htmlFor="firstName" className="active">
                            First Name
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="lastName" 
                            value={lastName} 
                            onChange={event => setLastName(event.target.value)}
                        />
                        <label htmlFor="lastName" className="active">
                            Last Name
                        </label>
                    </div>
                </div>

            </div> 

            <div className="modal-footer">
                <a 
                href="#!" 
                onClick={onSubmit} 
                className="modal-close waves-effect wave-light btn" 
                > Enter </a>
            </div>
        </div>
    )
}

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired,
}


export default connect(null, { addTech } )(AddTechModal)
