    import React from 'react'
    import Data from '../data/data.json'
    import DropdownMenu from './DropdownMenu'

    const data = Data

    export default function Navbar() {
        return (
            <>
                <nav>
                    <div class="nav-left">
                        <a href="index.html">
                            <img
                                src={require(`../images/${data.Logo}`)}
                                className="logo"
                            />
                        </a>
                        <ul>
                            {data['Nav-data']['Nav-left'].map((item) => (
                                <li key={item.id}>
                                    <img src={require(`../images/${item.image}`)} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div class="nav-right">
                        <div class="search-box">
                            <img
                                src={require(`../images/${data['Nav-data']['search-img']}`)}
                            />
                            <input type="text" placeholder="Search" />
                        </div>

                        <div
                            class="nav-user-icon online"
                            onclick="settingsMenuToggle()"
                        >
                            <img
                                src={require(`../images/${data['Nav-data']['profile-pic']}`)}
                            />
                        </div>
                    </div>

                    {/* dropdown menu */}
                    <DropdownMenu/>
                </nav>
            </>
        )
    }
