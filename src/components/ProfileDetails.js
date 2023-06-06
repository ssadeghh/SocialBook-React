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
                            alt='profile'
                        />
                        <div>
                            <h3>{name}</h3>
                            <p>{follower}</p>
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={require(`../images/${image}`)}
                                    alt='image'
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div class="pd-right">
                    <button type="button">
                        <img src={require(`../images/add-friends.png`)} alt='add-friend' />
                        Friend
                    </button>
                    <button type="button">
                        <img src={require(`../images/message.png`)} alt='message'/> Message
                    </button>
                    <br />
                    <a href="#">
                        <img src={require(`../images/more.png`)} alt='more'/>
                    </a>
                </div>
            </div>
        </>
    )
}
