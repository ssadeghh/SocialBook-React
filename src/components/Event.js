import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function Event(props) {
    const {dateNum, dateMonth, title} = props
    return (
        <div class="event">
            <div class="left-event">
                <h3>{dateNum}</h3>
                <span>{dateMonth}</span>
            </div>
            <div class="right-event">
                <h4>{title}</h4>
                <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Willson Tech Park
                </p>
                <a href="">More Info</a>
            </div>
        </div>
    )
}
