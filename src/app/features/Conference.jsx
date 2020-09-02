import React from 'react'
import "../styles/conference.scss"
import { ICONS} from "../utils/enums/Index";
import LeftMenuBar from '../components/common/LeftMenuBar';
import HomeCard from '../components/common/HomeCard';
import ConferenceCard from '../components/common/ConferenceCard';


const Conference=()=> {
    return (
        <div className={Conference.styles.mainContainer}>
            <div className={Conference.styles.homeContainer}>  
            <div className={Conference.styles.leftBar}>
                <div className={Conference.styles.iconContainer}>
                    <img 
                    src={ICONS.SURFACE}
                    className={Conference.styles.surfaceIcon}

                    />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img  
                        src={ICONS.FEATURES_LIST}
                        className={Conference.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img
                        src={ICONS.FILE_EXPLORER}
                        className={Conference.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img
                        src={ICONS.CHAT_MESSAGE}
                        className={Conference.styles.icons}
                         />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img 
                        src={ICONS.NOTIFICATION}
                        className={Conference.styles.icons}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.LOGOUT}
                        className={Conference.styles.logout}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.USER}
                        className={Conference.styles.user}
                        />
                    </div>
            </div>
            <div className={Conference.styles.cardMiddle}>
                <div style={{marginLeft:-15}}>
                <LeftMenuBar />
                </div>
            </div>
            <div style={{marginTop:'2%'}}>
                <h6>Live Conference</h6>
               <ConferenceCard />
               <div style={{marginTop:'3%'}} >
               <h6>Group Conference</h6>
               <ConferenceCard />
               <div style={{marginTop:'3%'}}>
               <ConferenceCard />
               </div>
               </div>
               <div style={{marginTop:'3%'}}>
               <h6>Schedule Conference</h6>
               <div style={{marginTop:'2%'}}>
               <ConferenceCard />
               </div>
               <div>
                   <div style={{marginTop:'2%'}}>
               <ConferenceCard />
               </div>
               <div style={{marginTop:'2%'}}>
               <ConferenceCard />
               </div>
               </div>
               </div>
               
            </div>
            <div className={Conference.styles.rightContainer}>
            <h6 className={Conference.styles.publication}>Conference History</h6>
                 <div className={Conference.styles.content}>
             <div className={Conference.styles.publicationList}>
                    <img 
                    className={Conference.styles.rightIcon}
                    src={ICONS.RIGHTMARK}
                    />
                </div>
             <p>Las Artes Plásticas <br />18 Abril 2020 12:00 PM</p>
             </div>
             <div className={Conference.styles.content}>
             <div className={Conference.styles.publicationList}>
                  <img 
                    className={Conference.styles.rightIcon}
                    src={ICONS.RIGHTMARK}
                    />
                </div>
             <p>Las Artes Plásticas <br/>18 Abril 2020 12:00 PM</p>
             </div>
                </div>
                <div>

            </div>
            </div>
            </div>
        
    )
}
Conference.styles = {
    mainContainer: "nos-online__conference-main-container-root",
    leftBar:"nos-online__conference-main-container-leftBar",
    iconContainer:"nos-online__conference-main-container-icon-container",
    icons:"nos-online__conference-main-container-icons",
    surfaceIcon:"nos-online__conference-main-container-surface-icon",
    logout:"nos-online__conference-main-container-logout",
    user:"nos-online__conference-main-container-user-icon",
    homeContainer:"nos-online__conference-main-container-home-container",
    rightContainer:"nos-online__conference-main-container-right-container",
    cardMiddle:"nos-online__conference-main-container-card-middle",
    chatCollaboration:"nos-online__conference-main-container-chat-collaboration",
    chatIcon:"nos-online__conference-main-container-chat-icon",
    publication:"nos-online__conference-main-container-publication",
    content:"nos-online__conference-main-container-content",
    publicationList:"nos-online__conference-main-container-publication-list",
    rightIcon:"nos-online__conference-main-container-right-mark",
   
    
}

export default Conference
