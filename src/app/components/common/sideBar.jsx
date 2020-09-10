import React from 'react'
import "../styles/side-bar.scss"
import { ICONS } from '../../utils/enums/Index'


const SideBar = () => {
    return (
        <div className={SideBar.styles.layoutContainer}>
             <div>
                <img 
                   className={SideBar.styles.iconsSize1}
                   src={ICONS.LOGO}
                />
            </div>
            <div className={SideBar.styles.iconsContainer}>
            <div>
                <img 
                   className={SideBar.styles.iconsSize}
                   src={ICONS.SURFACE}
                />
            </div>
            <div>
            <img 
             className={SideBar.styles.iconsSize}
              src={ICONS.FEATURES_LIST}
            /> 
            </div>
            <div>
                <img 
                 className={SideBar.styles.iconsSize}
                  src={ICONS.FILE_EXPLORER}
                />
            </div>
            <div>
                <img 
                 className={SideBar.styles.iconsSize}
                  src={ICONS.CHAT_MESSAGE}
                />
            </div>
            <div>
                <img 
                 className={SideBar.styles.iconsSize}
                  src={ICONS.NOTIFICATION}
                />
            </div>
            <div className={SideBar.styles.logoutContainer}>
                <img 
                 className={SideBar.styles.iconsSize}
                 src={ICONS.LOGOUT}
                />
            </div>
            <div className={SideBar.styles.avatar}>
                <img 
                 className={SideBar.styles.iconsSize}
                 src={ICONS.AVATAR1}
                />
            </div>
            </div>
        </div>
    )
}
SideBar.styles={
    layoutContainer:"nos-online__side-bar-container-layout",
    iconsSize:'nos-online__side-bar-container-icon-size',
    iconsSize1:'nos-online__side-bar-container-icon-size1',
    iconsContainer:'nos-online__side-bar-container-icons-container',
    logoutContainer:'nos-online__side-bar-container-logout-container',
    avatar:'nos-online__side-bar-container-avatar'
}

export default SideBar
