import React from 'react'

const AddButton = () => {
    return (
        <div className="fixed-action-btn">
            <a href="#add-log-modal" className="btn-floating btn-large blue darken-2 modal-trigger">
                <i className="fas fa-plus"></i>
            </a>

            <ul>
                <li>
                    <a href="#tech-add-modal" className="btn-floating green modal-trigger">
                        <i className="fas fa-user-friends"></i>
                    </a>
                </li>
                <li>
                    <a href="#tech-list-modal" className="btn-floating red modal-trigger">
                        <i className="fas fa-user-plus"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AddButton
