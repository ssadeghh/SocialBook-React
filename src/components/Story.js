import React from 'react'

export default function Story(props) {
    const { text, image, classname } = props
    return (
        <div className={`story ${classname}`}>
            <img src={require(`../images/${image}.png`)} alt='item' />
            <p>{text}</p>
        </div>
    )
}
