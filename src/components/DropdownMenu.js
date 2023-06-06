import React, { useState, useEffect } from 'react'
import DdUserMenu from './DdUserMenu'
import DdSettingLinks from './DdSettingLinks'

export default function DropdownMenu(props) {
    const { ShowSetting } = props

    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true')
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString())
        if (darkMode) {
            document.body.classList.add('dark-theme')
        } else {
            document.body.classList.remove('dark-theme')
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div
            class={`settings-menu ${ShowSetting ? 'settings-menu-height' : ''}`}
        >
            <div
                id="dark-btn"
                onClick={toggleDarkMode}
                className={`${darkMode ? 'dark-btn-on' : ''}`}
            >
                <span></span>
            </div>

            <div class="settings-menu-inner">
                <DdUserMenu
                    image={'profile-pic'}
                    info={'John Nichlson'}
                    link={'See Your Profile'}
                    profile={true}
                />
                <DdUserMenu
                    image={'feedback'}
                    info={'Give Feedback'}
                    link={'Help us to improve the new design'}
                    profile={false}
                />
                <DdSettingLinks image={'setting'} link={'Settings & Privacy'} />
                <DdSettingLinks image={'help'} link={'Help & Support'} />
                <DdSettingLinks
                    image={'display'}
                    link={'Display & Accesbility'}
                />
                <DdSettingLinks image={'logout'} link={'Logout'} />
            </div>
        </div>
    )
}
