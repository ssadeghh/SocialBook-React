import React from 'react'

export default function Story(props) {
    const { text, image, classname } = props
    return (
        <div class={`story ${classname}`}>
            <img src={require(`../images/${image}.png`)} />
            <p>{text}</p>
        </div>
    )
}
