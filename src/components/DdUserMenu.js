import React from 'react'

export default function DdUserMenu(props) {
    const { image, info, link } = props
    return (
        // dropdown user menu
        <div>
            <div class="user-profile">
                <img src={require(`../images/${image}.png`)} />
                <div>
                    <p>{info}</p>
                    <a href="profile.html">{link}</a>
                </div>
            </div>
            <hr />
        </div>
    )
}
