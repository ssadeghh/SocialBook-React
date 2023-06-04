import React from 'react'

export default function OnlineTest(props) {
    const {image, name} = props
    return (
        <div class="online-list">
            <div class="online">
                <img
                    src={require(`../images/${image}.png`)}
                />

            </div>
            <p>{name}</p>
        </div>
    )
}
