import React from 'react'
import DdUserMenu from './DdUserMenu'
import DdSettingLinks from './DdSettingLinks'

export default function DropdownMenu() {
    return (
        <div class="settings-menu">
            <div id="dark-btn">
                <span></span>
            </div>

            <div class="settings-menu-inner">
                <DdUserMenu
                    image={'profile-pic'}
                    info={'John Nichlson'}
                    link={'See Your Profile'}
                />
                <DdUserMenu
                    image={'feedback'}
                    info={'Give Feedback'}
                    link={'Help us to improve the new design'}
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
