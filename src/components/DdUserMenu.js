import React from 'react'

export default function DdUserMenu(props) {
    const { image, info, link, profile } = props
    return (
        // dropdown user menu
        <div>
            <div className="user-profile">
                <img src={require(`../images/${image}.png`)} alt='Profile'/>
                <div>
                    <p>{info}</p>
                    <a href={`${profile ? '/profile':''}`}>{link}</a>
                </div>
            </div>
            <hr />
        </div>
    )
}
