import React from 'react'

export default function DdSettingLinks(props) {
    const { image, link } = props

    return (
        <div class="settings-links">
            <img
                src={require(`../images/${image}.png`)}
                class="settings-icon"
            />
            <a href="#">
                {link}
                <img src={require(`../images/arrow.png`)} width={'10px'} />
            </a>
        </div>
    )
}
