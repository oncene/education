import React from 'react'
import "../styles/chat-section.scss"
import { ICONS} from "../utils/enums/Index";
import LeftMenuBar from '../components/common/LeftMenuBar';


const   ChatSectionGroup=()=> {
    return (
        <div className={  ChatSectionGroup.styles.mainContainer}>
            <div className={  ChatSectionGroup.styles.homeContainer}>  
            <div className={  ChatSectionGroup.styles.leftBar}>
                <div className={  ChatSectionGroup.styles.iconContainer}>
                    <img 
                    src={ICONS.SURFACE}
                    className={  ChatSectionGroup.styles.surfaceIcon}

                    />
                    </div>
                    <div style={{marginTop:'25%'}}>
                        <img  
                        src={ICONS.FEATURES_LIST}
                        className={  ChatSectionGroup.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%'}}>
                        <img
                        src={ICONS.FILE_EXPLORER}
                        className={  ChatSectionGroup.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%'}}>
                        <img
                        src={ICONS.CHAT_MESSAGE}
                        className={  ChatSectionGroup.styles.icons}
                         />
                    </div>
                    <div style={{marginTop:'25%'}}>
                        <img 
                        src={ICONS.NOTIFICATION}
                        className={  ChatSectionGroup.styles.icons}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.LOGOUT}
                        className={  ChatSectionGroup.styles.logout}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.USER}
                        className={  ChatSectionGroup.styles.user}
                        />
                    </div>
            </div>
              <div>
                  <LeftMenuBar />
              </div>
              <div className={ ChatSectionGroup.styles.chatContainer}>
                 <p>MENSAJERIA</p>
                 <div className={ ChatSectionGroup.styles.chatGeneral}>
                     <p>CHAT GENERAL <img src={ICONS.RIGHTARROW}/></p>
                 </div>
                 <div>
                     <p><img src={ICONS.CHATSMALL}/>Juan Salas Ya hicieron la<br/> tarea?Examen mañana</p>
                 </div>
                 <div className={ ChatSectionGroup.styles.chatGeneral}>
                     <p>CHAT DE GRUPOS <img src={ICONS.RIGHTARROW}/></p>
                 </div>
                 <div>
                   <p> <img className={ ChatSectionGroup.styles.groupIcon} src={ICONS.CONFERENCE} />LOS ACOPLADOS</p> 
                 </div>
                 <div>
                   <p> <img className={ ChatSectionGroup.styles.groupIcon} src={ICONS.CONFERENCE} />LOS ACOPLADOS</p> 
                 </div>
                 <div className={ ChatSectionGroup.styles.chatGeneral}>
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
              <div className={ ChatSectionGroup.styles.chatRightContainer}>
                  <div className={ ChatSectionGroup.styles.rightsec}>
               <p style={{marginLeft:'30%'}}>Chat General</p>
               <div style={{marginLeft:"50%"}}>
               <img src={ICONS.SEARCH}/>
               </div> 
               </div>
               <hr></hr>
               <div className={ ChatSectionGroup.styles.rightsec} style={{marginLeft:'10%'}}>
                   <img src={ICONS.AVATAR2}/>
                   <div className={ ChatSectionGroup.styles.chatingSection}>
                      <p>Juan Jose Torrez <br />Hola como van...</p>
                   </div>
               </div>
               <div className={ ChatSectionGroup.styles.rightsec} style={{marginLeft:'10%'}}>
                   <img src={ICONS.AVATAR4}/>
                   <div className={ ChatSectionGroup.styles.chatingSection}>
                      <p>Juan Jose Torrez <br />Hola como van... <img src={ICONS.SMAILY}/></p>
                   </div>
               </div>
               <div className={ ChatSectionGroup.styles.rightsec}>
                   <div className={ ChatSectionGroup.styles.chatingSection2}>
                      <p>Tú <br />Gracias por la Info.</p>
                   </div>
                   <img src={ICONS.AVATAR3}/>
               </div>
               <div className={ ChatSectionGroup.styles.rightsec} style={{marginLeft:'10%'}}>
                   <img src={ICONS.AVATAR4}/>
                   <div className={ ChatSectionGroup.styles.chatingSection}>
                      <p>Juan Jose Torrez <br />Hola como van... <img src={ICONS.SMAILY}/></p>
                   </div>
               </div>
               <div className={ ChatSectionGroup.styles.rightsec}>
                   <div className={ ChatSectionGroup.styles.chatingSection2}>
                      <p>Tú <br />Gracias por la Info.</p>
                   </div>
                   <img src={ICONS.AVATAR3}/>
               </div>
              </div>
            </div>
            </div>
        
    )
}
ChatSectionGroup.styles = {
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

export default ChatSectionGroup
