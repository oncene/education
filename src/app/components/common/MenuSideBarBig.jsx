import React from 'react'
import "../styles/menu-sidebar.scss"
import { ICONS } from '../../utils/enums/Index'

const MenuSideBarBig = () => {
    return (
        <div className={MenuSideBarBig.styles.menulayoutContainer}>
          <div className={MenuSideBarBig.styles.menuTopIcons}>
          <div>
            <img src={ICONS.LEFTARO} />
          </div>
          <div>
            <img src={ICONS.TOGGLEBTN}/>
          </div>
          </div>
            <div>
                <img
                className={MenuSideBarBig.styles.bgIcon1}
                  src={ICONS.BG}
                />
            </div>
            <div className={MenuSideBarBig.styles.text}>
              <p><b>Artes Plásticas</b><br />Artes Plásticas del segundo semestres <br/>de preparatorio</p>
            </div>
            <div className={MenuSideBarBig.styles.menuIcons1}>
                <img 
                 src={ICONS.HOME}
                />
                <p style={{marginLeft:'3%'}}>Home</p>
            </div>
            <div className={MenuSideBarBig.styles.menuIcons1}>
                <img 
                  src={ICONS.GROUPS}
                />
                <p  style={{marginLeft:'3%'}}>Groups</p>
            </div>
            <div className={MenuSideBarBig.styles.menuIcons2}>
                <img 
                  src={ICONS.COLABORATION}
                />
                <p  style={{marginLeft:'3%'}}>Collaborations</p>
            </div>
            <div className={MenuSideBarBig.styles.menuIcons2}>
                <img 
                  src={ICONS.VIDEO}
                />
                <p  style={{marginLeft:'3%'}}>Conferences</p>
            </div>
            <div className={MenuSideBarBig.styles.menuIcons1}>
                <img 
                  src={ICONS.PROGRAM}
                />
                <p  style={{marginLeft:'3%'}}>Ratings</p>
            </div>
            <div className={MenuSideBarBig.styles.menuIcons1}>
                <img 
                  src={ICONS.CHAT}
                />
                 <p  style={{marginLeft:'3%'}}>Chat</p>
            </div>
            
        </div>
    )
}

MenuSideBarBig.styles={
    menulayoutContainer:"nos-online__menuside-bar-container-layout-menu-big",
    bgIcon:"nos-online__menuside-bar-container-bg-icon",
    bgIcon1:"nos-online__menuside-bar-container-bg-icon1",
    menuIcons:"nos-online__menuside-bar-container-menu-icons",
    menuIcons1:"nos-online__menuside-bar-container-menu-icons1",
    menuTopIcons:"nos-online__menuside-bar-container-menu-top-icons",
    text:"nos-online__menuside-bar-container-text",
    menuIcons2:"nos-online__menuside-bar-container-menu-icons2",
}
export default MenuSideBarBig
