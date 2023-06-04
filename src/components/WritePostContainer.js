import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import Data from '../data/data.json'

const icons = Data['Write-Post-Container']

export default function WritePostContainer() {
    return (
        <div class="write-post-container">
            <div class="user-profile">
                <img src={require(`../images/profile-pic.png`)} />
                <div>
                    <p>John Nichlson</p>
                    <small>
                        public <FontAwesomeIcon icon={faCaretDown} />
                    </small>
                </div>
            </div>

            <div class="post-input-container">
                <textarea
                    rows="3"
                    placeholder="What's on your mind, John?"
                ></textarea>

                <div class="add-post-links">
                    {icons.map((item) => (
                        <a href="#" key={item.id}>
                            <img src={require(`../images/${item.image}`)} />
                            {item.text}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
