import React from 'react'

export default function DdSettingLinks(props) {
    const { image, link } = props

    return (
        <div class="settings-links">
            <img
                src={require(`../images/${image}.png`)}
                class="settings-icon"
                alt="Setting Icon"
            />
            <a>
                {link}
                <img src={require(`../images/arrow.png`)} width={'10px'} alt="Arrow Icon"/>
            </a>
        </div>
    )
}
