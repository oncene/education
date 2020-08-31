import React from 'react'
import "../styles/menu-sidebar.scss"
import { ICONS } from '../../utils/enums/Index'

const MenuSidebar = () => {
    return (
        <div className={MenuSidebar.styles.menulayoutContainer}>
            <div>
                <img
                className={MenuSidebar.styles.bgIcon}
                  src={ICONS.BG}
                />
            </div>
            <div className={MenuSidebar.styles.menuIcons}>
                <img 
                 src={ICONS.HOME}
                />
            </div>
            <div className={MenuSidebar.styles.menuIcons}>
                <img 
                  src={ICONS.GROUPS}
                />
            </div>
            <div className={MenuSidebar.styles.menuIcons}>
                <img 
                  src={ICONS.COLABORATION}
                />
            </div>
            <div className={MenuSidebar.styles.menuIcons}>
                <img 
                  src={ICONS.VIDEO}
                />
            </div>
            <div className={MenuSidebar.styles.menuIcons}>
                <img 
                  src={ICONS.PROGRAM}
                />
            </div>
            <div className={MenuSidebar.styles.menuIcons}>
                <img 
                  src={ICONS.CHAT}
                />
            </div>
            
        </div>
    )
}

MenuSidebar.styles={
    menulayoutContainer:"nos-online__menuside-bar-container-layout-menu",
    bgIcon:"nos-online__menuside-bar-container-bg-icon",
    menuIcons:"nos-online__menuside-bar-container-menu-icons"
}
export default MenuSidebar
