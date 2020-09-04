import React from 'react'
import "../styles/home-room.scss"
import { ICONS} from "../utils/enums/Index";
import LeftMenuBar from '../components/common/LeftMenuBar';
import HomeCard from '../components/common/HomeCard';


const HomeRoom=()=> {
    return (
        <div className={HomeRoom.styles.mainContainer}>
            <div className={HomeRoom.styles.homeContainer}>  
                <div className={HomeRoom.styles.leftBar}>
                <div className={HomeRoom.styles.iconContainer}>
                    <img 
                    src={ICONS.SURFACE}
                    className={HomeRoom.styles.surfaceIcon}

                    />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img  
                        src={ICONS.FEATURES_LIST}
                        className={HomeRoom.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img
                        src={ICONS.FILE_EXPLORER}
                        className={HomeRoom.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img
                        src={ICONS.CHAT_MESSAGE}
                        className={HomeRoom.styles.icons}
                         />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img 
                        src={ICONS.NOTIFICATION}
                        className={HomeRoom.styles.icons}
                        />
                    </div>
                    <div style={{marginLeft:'15%'}}>
                        <img
                        src={ICONS.LOGOUT}
                        className={HomeRoom.styles.logout}
                        />
                    </div>
                    <div >
                        <img
                        src={ICONS.USER}
                        className={HomeRoom.styles.user}
                        />
                    </div>
            </div>
            <div className={HomeRoom.styles.cardMiddle}>
                <div style={{marginLeft:-15}}>
                <LeftMenuBar />
                </div>
            </div>
            <div>
                <div className={HomeRoom.styles.emptyCard}>
                    <p style={{marginLeft:'10%'}}>Escribir para publicar...</p>
                    <hr></hr>
                    <div style={{marginTop:"14%"}}>
                    <button className={HomeRoom.styles.anadir}><img src={ICONS.SURFACE13}/>Anadir</button>
                    <button className={HomeRoom.styles.publish} data-toggle="modal" data-target="#myModal1"><img src={ICONS.SURFACE14}/>Publish</button>
                    <div class="modal fade" id="myModal1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
      
        <div class="modal-header">
          <h4 class="modal-title"></h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">
        <img src={ICONS.MODAL}/>
        </div>
        

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
                    </div>

                </div>
            <div style={{marginTop:'2%'}}>
                <HomeCard />
            </div>
            </div>
            <div className={HomeRoom.styles.rightContainer}>
             <h6 className={HomeRoom.styles.publication}>Publications</h6>
                 <div className={HomeRoom.styles.content}>
             <div className={HomeRoom.styles.publicationList}>
                 <p style={{marginLeft:'25%'}}>A</p>   
                </div>
             <p>Actividad del segundo parcial</p>
             </div>
             <div className={HomeRoom.styles.content}>
             <div className={HomeRoom.styles.publicationList}>
             <p style={{marginLeft:'25%'}}>A</p> 
                </div>
             <p>Actividad del segundo parcial</p>
             </div>
             <div className={HomeRoom.styles.content}>
             <div className={HomeRoom.styles.publicationList}>
             <p style={{marginLeft:'25%'}}>A</p> 
                </div>
             <p>Actividad del segundo parcial</p>
             </div>
             <div className={HomeRoom.styles.content}>
             <div className={HomeRoom.styles.publicationList}>
             <p style={{marginLeft:'25%'}}>A</p> 
                </div>
             <p>Actividad del segundo parcial</p>
             </div>
             </div>
            </div>
        </div>
    )
}
HomeRoom.styles = {
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

export default HomeRoom
