import React from 'react'
import "../styles/collaborations.scss"
import { ICONS} from "../utils/enums/Index";
import LeftMenuBar from '../components/common/LeftMenuBar';
import HomeCard from '../components/common/HomeCard';


const Collaborations=()=> {
    return (
        <div className={Collaborations.styles.mainContainer}>
            <div className={Collaborations.styles.homeContainer}>  
            <div className={Collaborations.styles.leftBar}>
                <div className={Collaborations.styles.iconContainer}>
                    <img 
                    src={ICONS.SURFACE}
                    className={Collaborations.styles.surfaceIcon}

                    />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img  
                        src={ICONS.FEATURES_LIST}
                        className={Collaborations.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img
                        src={ICONS.FILE_EXPLORER}
                        className={Collaborations.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img
                        src={ICONS.CHAT_MESSAGE}
                        className={Collaborations.styles.icons}
                         />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img 
                        src={ICONS.NOTIFICATION}
                        className={Collaborations.styles.icons}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.LOGOUT}
                        className={Collaborations.styles.logout}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.USER}
                        className={Collaborations.styles.user}
                        />
                    </div>
            </div>
            <div className={Collaborations.styles.cardMiddle}>
                <div style={{marginLeft:-15}}>
                <LeftMenuBar />
                </div>
            </div>
            <div style={{marginTop:'5%'}}>
                <HomeCard />
            </div>
            <div className={Collaborations.styles.rightContainer}>
                <h6 style={{marginTop:"5%",marginLeft:'5%'}}>Collaborators</h6>
                <div className={Collaborations.styles.chatCollaboration}>
                    <img 
                    className={Collaborations.styles.chatIcon}
                    src={ICONS.AVATAR3}
                    />
                        <p style={{marginLeft:'4%'}}> <b>Yerson Virreira</b><br />Las Artes con la Computación</p>
                    </div>
                </div>
                <div>

            </div>
            </div>
            </div>
        
    )
}
Collaborations.styles = {
    mainContainer: "nos-online__collaboration-container-root",
    leftBar:"nos-online__collaboration-container-leftBar",
    iconContainer:"nos-online__collaboration-container-icon-container",
    icons:"nos-online__collaboration-container-icons",
    surfaceIcon:"nos-online__collaboration-container-surface-icon",
    logout:"nos-online__collaboration-container-logout",
    user:"nos-online__collaboration-container-user-icon",
    homeContainer:"nos-online__collaboration-container-home-container",
    rightContainer:"nos-online__collaboration-container-right-container",
    cardMiddle:"nos-online__collaboration-container-card-middle",
    chatCollaboration:"nos-online__collaboration-container-chat-collaboration",
    chatIcon:"nos-online__collaboration-container-chat-icon",
    
    
}

export default Collaborations
