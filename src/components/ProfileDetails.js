import React from 'react'

export default function ProfileDetails(props) {
    const { name, follower, images } = props
    return (
        <>
            <div class="profile-details">
                <div class="pd-left">
                    <div class="pd-row">
                        <img
                            src={require(`../images/profile.png`)}
                            class="pd-img"
                        />
                        <div>
                            <h3>{name}</h3>
                            <p>{follower}</p>
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={require(`../images/${image}`)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div class="pd-right">
                    <button type="button">
                        <img src={require(`../images/add-friends.png`)} />
                        Friend
                    </button>
                    <button type="button">
                        <img src={require(`../images/message.png`)} /> Message
                    </button>
                    <br />
                    <a href="#">
                        <img src={require(`../images/more.png`)} />
                    </a>
                </div>
            </div>
        </>
    )
}
