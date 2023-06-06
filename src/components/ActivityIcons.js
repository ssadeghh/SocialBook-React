import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Data from '../data/data.json'

const Profile = Data['Nav-data']['profile-pic']

export default function ActivityIcons() {
    return (
        <>
            <div class="activity-icons">
                <div>
                    <img src={require(`../images/like-blue.png`)} alt="Like Icon"/> 120
                </div>
                <div>
                    <img src={require(`../images/comments.png`)} alt="Comment Icon"/> 120
                </div>
                <div>
                    <img src={require(`../images/share.png`)} alt="Share Icon"/> 43
                </div>
            </div>
            <div class="post-profile-icon">
                <img src={require(`../images/${Profile}`)} alt="Profile Picture"/>
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
        </>
    )
}
