import React from 'react'

export default function DdSettingLinks(props) {
    const { image, link } = props

    return (
        <div className="settings-links">
            <img
                src={require(`../images/${image}.png`)}
                className="settings-icon"
                alt="Setting Icon"
            />
            <a href='#'>
                {link}
                <img src={require(`../images/arrow.png`)} width={'10px'} alt="Arrow Icon"/>
            </a>
        </div>
    )
}
