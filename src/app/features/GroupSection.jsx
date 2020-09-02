import React from 'react'
import "../styles/home-room.scss"
import { ICONS} from "../utils/enums/Index";
import LeftMenuBar from '../components/common/LeftMenuBar';
import HomeCard from '../components/common/HomeCard';


const GroupSection=()=> {
    return (
        <div className={GroupSection.styles.mainContainer}>
            <div className={GroupSection.styles.homeContainer}>  
                <div className={GroupSection.styles.leftBar}>
                <div className={GroupSection.styles.iconContainer}>
                    <img 
                    src={ICONS.SURFACE}
                    className={GroupSection.styles.surfaceIcon}

                    />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img  
                        src={ICONS.FEATURES_LIST}
                        className={GroupSection.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img
                        src={ICONS.FILE_EXPLORER}
                        className={GroupSection.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img
                        src={ICONS.CHAT_MESSAGE}
                        className={GroupSection.styles.icons}
                         />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img 
                        src={ICONS.NOTIFICATION}
                        className={GroupSection.styles.icons}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.LOGOUT}
                        className={GroupSection.styles.logout}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.USER}
                        className={GroupSection.styles.user}
                        />
                    </div>
            </div>
            <div className={GroupSection.styles.cardMiddle}>
                <div style={{marginLeft:-15}}>
                <LeftMenuBar />
                </div>
            </div>
            <div>
                <div className={GroupSection.styles.emptyCard}>
                    <div className={GroupSection.styles.mainHeader}>Escribir para publicar...</div>
                    <hr></hr>
                    <div style={{marginTop:"14%"}}>
                    <button className={GroupSection.styles.anadir}><img src={ICONS.SURFACE13} />Anadir</button>
                    <button className={GroupSection.styles.publish} data-toggle="modal" data-target="#myModal"><img src={ICONS.SURFACE14}/>Publish</button>
                    </div>

                </div>
            <div style={{marginTop:'2%'}}>
                <HomeCard />
            </div>
            </div>
            <div className={GroupSection.styles.rightContainer}>
                <div style={{marginTop:'10%'}}>
                    <div style={{marginLeft:"30%"}}>
                        <img src={ICONS.CROWNICON}/>
                    </div>
                    
                    <div className={GroupSection.styles.groupContainer}>
                    <img 
                    className={GroupSection.styles.groupIcon}
                    src={ICONS.GROUP}/>
                   <p style={{marginLeft:'4%'}}>Grupo los ACOPLADOS</p> 
                </div>
                <p className={GroupSection.styles.groupContent}>ACEPTADO</p>
                </div>
                <hr></hr>
                <div style={{marginLeft:'10%'}}>
                <h6 className={GroupSection.styles.publication}>Members</h6>
                <div>
                    <p><img src={ICONS.AVATAR2}/>Eugene Wade</p>
                    <p><img src={ICONS.AVATAR3}/>Eugene Wade</p>
                    <p><img src={ICONS.AVATAR4}/>Eugene Wade</p>
                </div>
                </div>
                <div  style={{marginLeft:'10%'}}>
             <h6 className={GroupSection.styles.publication}>Publications</h6>
                 <div className={GroupSection.styles.content}>
             <div className={GroupSection.styles.publicationList}>
                  <p style={{marginLeft:"24%"}}>A</p>  
                </div>
             <p>Actividad del segundo parcial</p>
             </div>
             <div className={GroupSection.styles.content}>
             <div className={GroupSection.styles.publicationList}>
             <p style={{marginLeft:"24%"}}>A</p> 
                </div>
             <p>Actividad del segundo parcial</p>
             </div>
             <div className={GroupSection.styles.content}>
             <div className={GroupSection.styles.publicationList}>
                     <p style={{marginLeft:"24%"}}>A</p> 
                </div>
             <p>Actividad del segundo parcial</p>
             </div>
             <div className={GroupSection.styles.content}>
             <div className={GroupSection.styles.publicationList}>
             <p style={{marginLeft:"24%"}}>A</p> 
                </div>
             <p>Actividad del segundo parcial</p>
             </div>
             </div>
             </div>
            </div>
        </div>
    )
}
GroupSection.styles = {
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
    groupContent:"nos-online__home-room-container-group-content",
    mainHeader:"nos-online__home-room-container-main-header",
    mainHeader:"nos-online__home-room-container-main-header",
    groupIcon:"nos-online__home-room-container-group-icon",
    groupContainer:"nos-online__home-room-container-group-container",
    
}

export default GroupSection
