import React from 'react'
import "../styles/ratings.scss"
import { ICONS} from "../utils/enums/Index";
import LeftMenuBar from '../components/common/LeftMenuBar';
import RatingTable from '../components/common/RatingTable';


const  Ratings=()=> {
    return (
        <div className={ Ratings.styles.mainContainer}>
            <div className={ Ratings.styles.homeContainer}>  
            <div className={ Ratings.styles.leftBar}>
                <div className={ Ratings.styles.iconContainer}>
                    <img 
                    src={ICONS.SURFACE}
                    className={ Ratings.styles.surfaceIcon}

                    />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img  
                        src={ICONS.FEATURES_LIST}
                        className={ Ratings.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img
                        src={ICONS.FILE_EXPLORER}
                        className={Ratings.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img
                        src={ICONS.CHAT_MESSAGE}
                        className={ Ratings.styles.icons}
                         />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img 
                        src={ICONS.NOTIFICATION}
                        className={ Ratings.styles.icons}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.LOGOUT}
                        className={ Ratings.styles.logout}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.USER}
                        className={ Ratings.styles.user}
                        />
                    </div>
            </div>
            <div className={ Ratings.styles.cardMiddle}>
                <div style={{marginLeft:-15}}>
                <LeftMenuBar />
                </div>
            </div>
            
            <div style={{marginTop:'2%'}}>
                <div className={Ratings.styles.avatar}>
                <img src={ICONS.ICONAVATAR}/>
                <p><b>Colegio Juan Pablo II</b><br />Fundada en 1996 de 18 de Noviembre</p>
                </div>
                <div className={Ratings.styles.avatar1}>
                    <img src={ICONS.AVATAR4}/>
                    <p style={{scrollMarginLeft:'10%'}}><b>Carolina Airoa</b><br />Docente-Artes Plasticas</p>
                </div>
                <p>Calificaciones</p>
                <h5>Artes Plásticas</h5>
               <RatingTable />
               
            </div>
            <div className={ Ratings.styles.rightContainer}>
                <div style={{marginTop:'5%',marginLeft:'3%'}}>
                <button className={Ratings.styles.print} data-toggle="modal" data-target="#myModal1"><img src={ICONS.PRINT}/>PRINT</button>
                <div class="modal fade" id="myModal1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
      
        <div class="modal-header">
          <h4 class="modal-title"></h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">
        <img src={ICONS.RATINGMODAL}/>
        </div>
        

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  
                </div>
                <div style={{marginTop:'5%',marginLeft:'3%'}}>
                <button className={Ratings.styles.sendMail} data-toggle="modal" data-target="#myModal"><img src={ICONS.MAILBOX}/>SEND TO EMAIL</button>
                <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
        <div class="modal-title"><img src={ICONS.MSG2}/>Enviar Notas a un email</div>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        
        </div>
        <div class="modal-body">
          <p>Email</p>
          <input type="email" className={Ratings.styles.inputField}></input>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" className={Ratings.styles.sendButton}><img src={ICONS.MAILBOX}/>Send</button>
        </div>
      </div>
      
    </div>
  </div>
                </div>
                <hr></hr>
                <div style={{marginTop:'10%',marginLeft:'10%'}}>
                    <img src={ICONS.CHART2} />
                </div>
                </div>
            </div>
            </div>
        
    )
}
Ratings.styles = {
    mainContainer: "nos-online__ratings-container-root",
    leftBar:"nos-online__ratings-container-leftBar",
    iconContainer:"nos-online__ratings-container-icon-container",
    icons:"nos-online__ratings-container-icons",
    surfaceIcon:"nos-online__ratings-container-surface-icon",
    logout:"nos-online__ratings-container-logout",
    user:"nos-online__ratings-container-user-icon",
    homeContainer:"nos-online__ratings-container-home-container",
    rightContainer:"nos-online__ratings-container-right-container",
    cardMiddle:"nos-online__ratings-container-card-middle",
    print:"nos-online__ratings-container-print",
    sendMail:"nos-online__ratings-container-send-mail",
    avatar:"nos-online__ratings-container-avatar",
    avatar1:"nos-online__ratings-container-avatar1",
    inputField:"nos-online__ratings-container-input-field",
    sendButton:"nos-online__ratings-container-send-button",
   
   
    
}

export default Ratings
