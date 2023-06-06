import React from 'react'
import Data from '../data/data.json'

const impLinks = Data['Left-Sidebar']['imp-links']
const shortcutLinks = Data['Left-Sidebar']['shortcut-links']

export default function LeftSidebar() {
    return (
        <div class="left-sidebar">
            <div class="imp-links">
                {impLinks.map((item) => (
                    <a href="" key={item.id}>
                        <img
                            src={require(`../images/${item.image}`)}
                        />
                        {item.text}
                    </a>
                ))}
                <a href="">See More</a>
            </div>
            <div class="shortcut-links">
                <p>Your Shortcuts</p>
                {shortcutLinks.map((item, index) => (
                    <a href="" key={index}>
                        <img
                            src={require(`../images/${item.image}`)}
                        />
                        {item.text}
                    </a>
                ))}
            </div>
        </div>
    )
}
