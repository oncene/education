import React from 'react'
import "../styles/home-room.scss"
import { ICONS} from "../utils/enums/Index";
import LeftMenuBar from '../components/common/LeftMenuBar';
import HomeCard from '../components/common/HomeCard';
import SideBar from '../components/common/sideBar';
import MenuSideBarBig from '../components/common/MenuSideBarBig';
import HomeCard3 from '../components/common/HomeCard3';


const HomeRoom3=()=> {
    return (
        <div className={HomeRoom3.styles.mainContainer}>
            <div className={HomeRoom3.styles.homeContainer}>  
                <SideBar />
                <MenuSideBarBig />
            <div>
                <div className={HomeRoom3.styles.emptyCard}>
                    <p style={{marginLeft:'30%',marginTop:'5%'}}>Escribir para publicar...</p>
                    <hr></hr>
                    <div style={{marginTop:"14%",marginLeft:'10%'}}>
                    <button className={HomeRoom3.styles.anadir}><img src={ICONS.SURFACE13}/>Anadir</button>
                    <button className={HomeRoom3.styles.publish}><img src={ICONS.SURFACE14}/>Publish</button>
                    </div>

                </div>
            <div style={{marginTop:'2%',marginLeft:'5%'}}>
                <HomeCard3 />
            </div>
            </div>
            <div className={HomeRoom3.styles.rightContainer}>
             <h6 className={HomeRoom3.styles.publication}>Publications</h6>
                 <div className={HomeRoom3.styles.content}>
             <div className={HomeRoom3.styles.publicationList}>
                 <p style={{marginLeft:'25%'}}>A</p>   
                </div>
             <p>Actividad del segundo parcial</p>
             </div>
             <div className={HomeRoom3.styles.content}>
             <div className={HomeRoom3.styles.publicationList}>
             <p style={{marginLeft:'25%'}}>A</p> 
                </div>
             <p>Actividad del segundo parcial</p>
             </div>
             <div className={HomeRoom3.styles.content}>
             <div className={HomeRoom3.styles.publicationList}>
             <p style={{marginLeft:'25%'}}>A</p> 
                </div>
             <p>Actividad del segundo parcial</p>
             </div>
             <div className={HomeRoom3.styles.content}>
             <div className={HomeRoom3.styles.publicationList}>
             <p style={{marginLeft:'25%'}}>A</p> 
                </div>
             <p>Actividad del segundo parcial</p>
             </div>
             </div>
            </div>
        </div>
    )
}
HomeRoom3.styles = {
    mainContainer: "nos-online__home-room-container-root",
    leftBar:"nos-online__home-room-container-leftBar",
    iconContainer:"nos-online__home-room-container-icon-container",
    icons:"nos-online__home-room--container-icons",
    surfaceIcon:"nos-online__home-room-container-surface-icon",
    logout:"nos-online__home-room-container-logout",
    user:"nos-online__home-room-container-user-icon",
    homeContainer:"nos-online__home-room-container-home-container",
    rightContainer:"nos-online__home-room-container-right-container",
    cardMiddle:"nos-online__home-room-container-card-middle",
    publication:"nos-online__home-room-container-publication",
    publicationList:"nos-online__home-room-container-publication-list",
    content:"nos-online__home-room-container-content",
    emptyCard:"nos-online__home-room-container-emptycard",
    publish:"nos-online__home-room-container-publish",
    anadir:"nos-online__home-room-container-anadir",
    
}

export default HomeRoom3