import React, { useState } from 'react'
import Data from '../data/data.json'
import DropdownMenu from './DropdownMenu'

const data = Data

export default function Navbar() {
    const [settingsMenuHeight, setSettingsMenuHeight] = useState(false)

    const ShowSetting = () => {
        setSettingsMenuHeight(!settingsMenuHeight)
    }

    return (
        <>
            <nav>
                <div className="nav-left">
                    <a href="/">
                        <img
                            src={require(`../images/${data.Logo}`)}
                            className="logo"
                            alt='logo'
                        />
                    </a>
                    <ul>
                        {data['Nav-data']['Nav-left'].map((item) => (
                            <li key={item.id}>
                                <img src={require(`../images/${item.image}`)} alt='item'/>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="nav-right">
                    <div className="search-box">
                        <img
                            src={require(`../images/${data['Nav-data']['search-img']}`)}
                            alt='search'
                        />
                        <input type="text" placeholder="Search" />
                    </div>

                    <div
                        className="nav-user-icon online"
                        onClick={ShowSetting}
                    >
                        <img
                            src={require(`../images/${data['Nav-data']['profile-pic']}`)} alt='profile'
                        />
                    </div>
                </div>

                {/* dropdown menu */}
                <DropdownMenu ShowSetting={settingsMenuHeight}/>
            </nav>
        </>
    )
}
