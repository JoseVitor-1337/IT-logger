import React from 'react'
import { connect } from 'react-redux'
import { deleteTech } from './../../actions/techActions'
import Materialize from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'

const TechItem = props => {

    const onDelete = (id) => { 
        if (props.tech.id) {
            props.deleteTech(props.tech.id)
            Materialize.toast({ html: 'Tech was delete successfully'} )
        } else {
            Materialize.toast({ html: 'Tech was not found!'})    
        }
    }

    return (
        <li className="collection-item">
            <div>
                {props.tech.firstName} {props.tech.lastName}
                <a href="#!" className="secondary-content" onClick={onDelete}>
                    <i className="fas fa-trash-alt">delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired, // "ptor"
    deleteTech: PropTypes.func.isRequired,
}

export default connect(null, { deleteTech })(TechItem)
