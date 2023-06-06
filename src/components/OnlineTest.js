import React from 'react'

export default function OnlineTest(props) {
    const {image, name} = props
    return (
        <div className="online-list">
            <div className="online">
                <img
                    src={require(`../images/${image}.png`)} alt='online-list-icon'
                />

            </div>
            <p>{name}</p>
        </div>
    )
}
