import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import Data from '../data/data.json'

const icons = Data['Write-Post-Container']

export default function WritePostContainer() {
    return (
        <div className="write-post-container">
            <div className="user-profile">
                <img src={require(`../images/profile-pic.png`)} alt='profile' />
                <div>
                    <p>John Nichlson</p>
                    <small>
                        public <FontAwesomeIcon icon={faCaretDown} />
                    </small>
                </div>
            </div>

            <div className="post-input-container">
                <textarea
                    rows="3"
                    placeholder="What's on your mind, John?"
                ></textarea>

                <div className="add-post-links">
                    {icons.map((item) => (
                        <a href="#" key={item.id}>
                            <img src={require(`../images/${item.image}`)} alt='item'/>
                            {item.text}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
