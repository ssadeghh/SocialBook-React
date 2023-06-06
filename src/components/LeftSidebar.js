import React from 'react'
import Data from '../data/data.json'

const impLinks = Data['Left-Sidebar']['imp-links']
const shortcutLinks = Data['Left-Sidebar']['shortcut-links']

export default function LeftSidebar() {
    return (
        <div className="left-sidebar">
            <div className="imp-links">
                {impLinks.map((item) => (
                    <button type="button" className="link-button" key={item.id}>
                        <img
                            src={require(`../images/${item.image}`)}
                            alt="item"
                        />
                        {item.text}
                    </button>
                ))}
                <button type="button" className="link-button">
                    See More
                </button>
            </div>
            <div className="shortcut-links">
                <p>Your Shortcuts</p>
                {shortcutLinks.map((item, index) => (
                    <button type="button" className="link-button" key={index}>
                        <img
                            src={require(`../images/${item.image}`)}
                            alt="item"
                        />
                        {item.text}
                    </button>
                ))}
            </div>
        </div>
    )
}
