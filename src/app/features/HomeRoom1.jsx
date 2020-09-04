import React from 'react'
import "../styles/home-room1.scss"
import SideBar from '../components/common/sideBar'
import MenuSidebar from "../components/common/menuSidebar"
import { ICONS } from '../utils/enums/Index'

const HomeRoom1 = () => {
    return (
        <div className={HomeRoom1.styles.mainContainer}>
            <div className={HomeRoom1.styles.sidemenuComponent}>
                <SideBar/>
              <MenuSidebar/>
              <div className={HomeRoom1.styles.roomContainer}>
                  <div className={HomeRoom1.styles.innerContainer}>
                    <div className={HomeRoom1.styles.teacher}>
                        <div>
                        <img src={ICONS.AVATAR1}/>
                        </div>
                        <div style={{marginLeft:'2%'}}>
                        <p><b>Pricila Talia Vergara</b> publicó <b>Actividad del segundo parcial</b> <br />
                        <p className={HomeRoom1.styles.content}>Hace 10 minutos <br /><p className={HomeRoom1.styles.teacherRed}>DOCENTE</p></p></p>
                        </div>
                        </div>
                        <div className={HomeRoom1.styles.largeContent}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad<br />
                             minim veniam, quis nostrud exercitation ullamco laboris consequat.
                             </div>
                             <div className={HomeRoom1.styles.progressBar}>
                                 <div className={HomeRoom1.styles.innerProgressBar}>
                                 </div>
                                 <div>Progress 4/12</div>
                                 <div>
                                 <button className={HomeRoom1.styles.PlayButton}><img src={ICONS.PLAYICON}/>Play</button>
                             </div>
                             </div>
                             
                             <div className={HomeRoom1.styles.cardInner}>
                             <div className={HomeRoom1.styles.card}>
                                 <div style={{marginLeft:"5%",marginTop:'10%'}}><b>Contemporary Art</b></div>
                                 <div style={{marginLeft:"5%",marginTop:'2%'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br />
                                      sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.<br />
                                       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.
                                       </div>
                                       <div className={HomeRoom1.styles.teacher}>
                                      <p style={{marginLeft:"5%",marginTop:'10%'}}> 1.Tempo incididunt.<br /> 2.Tempo incididunt.<br /> 3.Tempo incididunt.</p>
                                           <img style={{marginLeft:"10%",marginTop:'3%'}} src={ICONS.IMAGE}/>
                                       </div>
                                       </div>
                                       <div className={HomeRoom1.styles.leftRightContainer}>
                                           <img src={ICONS.PLAYLEFT}/>
                                           <img style={{marginLeft:'5%'}} src={ICONS.PLAYRIGHT}/>
                                       </div>
                             </div>
                            
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
    content: "nos-online__home-room1-container-content",
    teacher: "nos-online__home-room1-container-teacher",
    teacherRed: "nos-online__home-room1-container-teacher-red",
    largeContent:'nos-online__home-room1-container-large-content',
    progressBar:'nos-online__home-room1-container-progress-bar',
    innerProgressBar:'nos-online__home-room1-container-inner-progressbar',
    card:'nos-online__home-room1-container-card',
    cardInner:'nos-online__home-room1-container-card-inner',
    PlayButton:'nos-online__home-room1-container-play-button',
    leftRightContainer:'nos-online__home-room1-container-left-right-container'
   
}

export default HomeRoom1
