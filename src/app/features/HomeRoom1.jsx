import React from 'react'
import "../styles/home-room1.scss"
import SideBar from '../components/common/sideBar'
import MenuSidebar from "../components/common/menuSidebar"

const HomeRoom1 = () => {
    return (
        <div className={HomeRoom1.styles.mainContainer}>
            <div className={HomeRoom1.styles.sidemenuComponent}>
                <SideBar/>
              <MenuSidebar/>
              <div className={HomeRoom1.styles.roomContainer}>
                  <div className={HomeRoom1.styles.innerContainer}>

                  </div>

              </div>
            </div>
            
        </div>
    )
}
HomeRoom1.styles = {
    mainContainer: "nos-online__home-room1-container-main-container",
    sidemenuComponent: "nos-online__home-room1-container-sidemenu-components",
    roomContainer: "nos-online__home-room1-container-room-container",
    innerContainer: "nos-online__home-room1-container-inner-container",
}

export default HomeRoom1
