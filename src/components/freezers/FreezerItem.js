import React from 'react'
import { Link } from 'react-router-dom'

function FreezerItem(props) {
    return (
        <div className="freezer-item">
            <img src={props.picture} alt="" />
            <p style={{ fontWeight: '600' }}>{props.model}</p>
            <p>{props.vol}</p>
            <p>Starting at <span>{props.price}</span></p>
            <p><Link to={props.route}>Specification</Link></p>
        </div>
    )
}

export default FreezerItem
