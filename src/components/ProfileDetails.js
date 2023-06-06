import React from 'react'

export default function ProfileDetails(props) {
    const { name, follower, images } = props
    return (
        <>
            <div className="profile-details">
                <div className="pd-left">
                    <div className="pd-row">
                        <img
                            src={require(`../images/profile.png`)}
                            className="pd-img"
                            alt='profile'
                        />
                        <div>
                            <h3>{name}</h3>
                            <p>{follower}</p>
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={require(`../images/${image}`)}
                                    alt='item'
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="pd-right">
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
