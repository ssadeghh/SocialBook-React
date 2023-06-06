import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import ActivityIcons from './ActivityIcons';

export default function Post(props) {
    const {name, date, image } = props
    return (
        <div className="post-container">
            <div className="post-row">
                <div className="user-profile">
                    <img src={require(`../images/profile-pic.png`)} alt='profile'/>
                    <div>
                        <p>{name}</p>
                        <span>{date}</span>
                    </div>
                </div>
                <a href="">
                    <FontAwesomeIcon icon={faEllipsisV} />
                </a>
            </div>

            <p className="post-text">
                Like and share this video with friends, tag
                <span>@FacebookPage</span> facebook page on your post. ask your
                doubts in the comment <a href="#">Our Page</a>
            </p>
            <img src={require(`../images/${image}.png`)} className="post-image" alt='post' />

            <div className="post-row">
                <ActivityIcons/>
            </div>
        </div>
    )
}
