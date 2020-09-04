import React from 'react'
import "../styles/chat-section.scss"
import { ICONS} from "../utils/enums/Index";
import LeftMenuBar from '../components/common/LeftMenuBar';
import HomeCard from '../components/common/HomeCard';
import ProgramCard from '../components/common/ProgramCard';


const  ChatSection=()=> {
    return (
        <div className={ ChatSection.styles.mainContainer}>
            <div className={ ChatSection.styles.homeContainer}>  
            <div className={ ChatSection.styles.leftBar}>
                <div className={ ChatSection.styles.iconContainer}>
                    <img 
                    src={ICONS.SURFACE}
                    className={ ChatSection.styles.surfaceIcon}

                    />
                    </div>
                    <div style={{marginTop:'25%' ,marginLeft:'15%'}}>
                        <img  
                        src={ICONS.FEATURES_LIST}
                        className={ ChatSection.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img
                        src={ICONS.FILE_EXPLORER}
                        className={ ChatSection.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img
                        src={ICONS.CHAT_MESSAGE}
                        className={ ChatSection.styles.icons}
                         />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img 
                        src={ICONS.NOTIFICATION}
                        className={ ChatSection.styles.icons}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.LOGOUT}
                        className={ ChatSection.styles.logout}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.USER}
                        className={ ChatSection.styles.user}
                        />
                    </div>
            </div>
              <div>
                  <LeftMenuBar />
              </div>
              <div className={ChatSection.styles.chatContainer}>
                 <p>MENSAJERIA</p>
                 <div className={ChatSection.styles.chatGeneral}>
                     <p>CHAT GENERAL <img src={ICONS.RIGHTARROW}/></p>
                 </div>
                 <div>
                     <p><img src={ICONS.CHATSMALL}/>Juan Salas Ya hicieron la<br/> tarea?Examen mañana</p>
                 </div>
                 <div className={ChatSection.styles.chatGeneral}>
                     <p>CHAT DE GRUPOS <img src={ICONS.RIGHTARROW}/></p>
                 </div>
                 <div>
                   <p> <img className={ChatSection.styles.groupIcon} src={ICONS.CONFERENCE} />LOS ACOPLADOS</p> 
                 </div>
                 <div>
                   <p> <img className={ChatSection.styles.groupIcon} src={ICONS.CONFERENCE} />LOS ACOPLADOS</p> 
                 </div>
                 <div className={ChatSection.styles.chatGeneral}>
                     <p>PERSONAS <img src={ICONS.RIGHTARROW}/></p>
                 </div>
                 <div>
                     <p><img src={ICONS.AVATAR2}/>Juan Jose Torrez</p>
                 </div>
                 <div>
                     <p><img src={ICONS.AVATAR3}/>Juan Jose Torrez</p>
                 </div>
                 <div>
                     <p><img src={ICONS.AVATAR4}/>Juan Jose Torrez</p>
                 </div>
              </div>
              <div className={ChatSection.styles.chatRightContainer}>
                  <div className={ChatSection.styles.rightsec}>
               <p style={{marginLeft:'5%'}}>Grupo LOS ACOPLADOS</p>
               <div style={{marginLeft:"50%"}}>
               <img src={ICONS.SEARCH}/>
               <button className={ChatSection.styles.unionButton}><img src={ICONS.VIDEO}/>REUNION</button>
               </div> 
               </div>
               <hr></hr>
               <div className={ChatSection.styles.rightsec} style={{marginLeft:'10%'}}>
                   <img src={ICONS.AVATAR2}/>
                   <div className={ChatSection.styles.chatingSection}>
                      <p style={{marginLeft:'5%'}}>Juan Jose Torrez <br />Hola como van...</p>
                   </div>
               </div>
               <div className={ChatSection.styles.rightsec} style={{marginLeft:'10%'}}>
                   <img src={ICONS.AVATAR4}/>
                   <div className={ChatSection.styles.chatingSection}>
                      <p style={{marginLeft:'5%'}}>Juan Jose Torrez <br />Hola como van... <img src={ICONS.SMAILY}/></p>
                   </div>
               </div>
               <hr></hr>
               <div className={ChatSection.styles.rightsec}>
                   <div className={ChatSection.styles.chatingSection2}>
                      <p style={{marginLeft:'5%'}}>Tú <br />Gracias por la Info.</p>
                   </div>
                   <img src={ICONS.AVATAR3}/>
               </div>
              </div>
            </div>
            </div>
        
    )
}
ChatSection.styles = {
    mainContainer: "nos-online__chat-section-container-root",
    leftBar:"nos-online__chat-section-container-leftBar",
    iconContainer:"nos-online__chat-section-container-icon-container",
    icons:"nos-online__chat-section-container-icons",
    surfaceIcon:"nos-online__chat-section-container-surface-icon",
    logout:"nos-online__chat-section-container-logout",
    user:"nos-online__chat-section-container-user-icon",
    homeContainer:"nos-online__chat-section-container-home-container",
    chatContainer:"nos-online__chat-section-container-chat-container",
    chatGeneral:"nos-online__chat-section-container-chat-general",
    groupIcon:"nos-online__chat-section-container-group-icon",
    chatRightContainer:"nos-online__chat-section-container-chatright-container",
    unionButton:"nos-online__chat-section-container-reunion",
    rightsec:"nos-online__chat-section-container-rightsec",
    chatingSection:"nos-online__chat-section-container-chating-section",
    chatingSection2:"nos-online__chat-section-container-chating-section2",
    
    
}

export default ChatSection
