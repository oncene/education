import React from 'react'
import "../styles/program.scss"
import { ICONS} from "../utils/enums/Index";
import LeftMenuBar from '../components/common/LeftMenuBar';
import HomeCard from '../components/common/HomeCard';
import ProgramCard from '../components/common/ProgramCard';


const Program=()=> {
    return (
        <div className={Program.styles.mainContainer}>
            <div className={Program.styles.homeContainer}>  
            <div className={Program.styles.leftBar}>
                <div className={Program.styles.iconContainer}>
                    <img 
                    src={ICONS.SURFACE}
                    className={Program.styles.surfaceIcon}

                    />
                    </div>
                    <div style={{marginTop:'25%'}}>
                        <img  
                        src={ICONS.FEATURES_LIST}
                        className={Program.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%'}}>
                        <img
                        src={ICONS.FILE_EXPLORER}
                        className={Program.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%'}}>
                        <img
                        src={ICONS.CHAT_MESSAGE}
                        className={Program.styles.icons}
                         />
                    </div>
                    <div style={{marginTop:'25%'}}>
                        <img 
                        src={ICONS.NOTIFICATION}
                        className={Program.styles.icons}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.LOGOUT}
                        className={Program.styles.logout}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.USER}
                        className={Program.styles.user}
                        />
                    </div>
            </div>
            <div className={Program.styles.cardMiddle}>
                <div style={{marginLeft:-15}}>
                <LeftMenuBar />
                </div>
            </div>

            <div style={{marginTop:'2%'}}>
            <div style={{marginRight:'80%'}}>
            <p><b>Subjects Program</b>
                <br />Plastic Arts
            </p>
            </div>
               <ProgramCard />
            </div>
            <div className={Program.styles.rightContainer}>
                <h6 style={{marginTop:"5%"}}>Weights</h6>
                <div className={Program.styles.chatCollaboration}>
                    <img 
                    className={Program.styles.chatIcon}
                    src={ICONS.WEIGHTS}
                    />
                        <p style={{marginLeft:'4%'}}> <b>Examen</b><br />Evaluado al 100%</p>
                    </div>
                    <div className={Program.styles.chatCollaboration}>
                    <img 
                    className={Program.styles.chatIcon}
                    src={ICONS.WEIGHTS}
                    />
                        <p style={{marginLeft:'4%'}}> <b>Examen</b><br />Evaluado al 100%</p>
                    </div>
                    <p><b>Considerations</b><br />Los exámenes de prueba, las<br /> puntuaciones obtenidas no son <br />calificadas.</p>
                </div>

                <div>

            </div>
            </div>
            </div>
        
    )
}
Program.styles = {
    mainContainer: "nos-online__program-container-root",
    leftBar:"nos-online__program-container-leftBar",
    iconContainer:"nos-online__program-container-icon-container",
    icons:"nos-online__program-container-icons",
    surfaceIcon:"nos-online__program-container-surface-icon",
    logout:"nos-online__program-container-logout",
    user:"nos-online__program-container-user-icon",
    homeContainer:"nos-online__program-container-home-container",
    rightContainer:"nos-online__program-container-right-container",
    cardMiddle:"nos-online__program-container-card-middle",
    chatCollaboration:"nos-online__program-container-chat-collaboration",
    chatIcon:"nos-online__program-container-chat-icon",
    
    
}

export default Program
