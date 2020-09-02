import React from 'react'
import "../styles/ratings.scss"
import { ICONS} from "../utils/enums/Index";
import LeftMenuBar from '../components/common/LeftMenuBar';
import RatingTable from '../components/common/RatingTable';


const  Ratings1=()=> {
    return (
        <div className={ Ratings1.styles.mainContainer}>
            <div className={ Ratings1.styles.homeContainer}>  
            <div className={ Ratings1.styles.leftBar}>
                <div className={ Ratings1.styles.iconContainer}>
                    <img 
                    src={ICONS.SURFACE}
                    className={ Ratings1.styles.surfaceIcon}

                    />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img  
                        src={ICONS.FEATURES_LIST}
                        className={ Ratings1.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img
                        src={ICONS.FILE_EXPLORER}
                        className={Ratings1.styles.icons}
                        />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img
                        src={ICONS.CHAT_MESSAGE}
                        className={ Ratings1.styles.icons}
                         />
                    </div>
                    <div style={{marginTop:'25%',marginLeft:'15%'}}>
                        <img 
                        src={ICONS.NOTIFICATION}
                        className={ Ratings1.styles.icons}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.LOGOUT}
                        className={ Ratings1.styles.logout}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.USER}
                        className={ Ratings1.styles.user}
                        />
                    </div>
            </div>
            <div className={ Ratings1.styles.cardMiddle}>
                <div style={{marginLeft:-15}}>
                <LeftMenuBar />
                </div>
            </div>
            
            <div style={{marginTop:'2%'}}>
                <div className={Ratings1.styles.avatar}>
                <img src={ICONS.ICONAVATAR}/>
                <p><b>Colegio Juan Pablo II</b><br />Fundada en 1996 de 18 de Noviembre</p>
                </div>
                <div className={Ratings1.styles.avatar1}>
                    <img src={ICONS.AVATAR4}/>
                    <p style={{scrollMarginLeft:'10%'}}><b>Carolina Airoa</b><br />Docente-Artes Plasticas</p>
                </div>
                <p>Calificaciones</p>
                <h5>Artes Plásticas</h5>
               <RatingTable />
               
            </div>
            <div className={ Ratings1.styles.rightContainer}>
                <div style={{marginTop:'5%',marginLeft:'35%'}}>
                <button className={Ratings1.styles.print}  data-toggle="modal" data-target="#myModal"><img src={ICONS.PRINT} />PRINT</button>
                <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"></h4>
        </div>
        <div class="modal-body">
         <img src={ICONS.RATINGMODAL}/>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
                </div>
                <div style={{marginTop:'5%',marginLeft:'10%'}}>
                <button className={Ratings1.styles.sendMail} data-toggle="modal" data-target="#myModal1"><img src={ICONS.MAILBOX}/>SEND TO EMAIL</button>
                <div class="modal" id="myModal1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" style={{color:'#657596',fontSize:'small'}}><img src={ICONS.MSG2}/>Send Notes to an email</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">
         <p style={{color:'#657596',fontSize:'small'}}>Email</p> 
          <div>
          <input type="email" className={Ratings1.styles.inputField}></input>
          </div>
        </div>
        
        <div class="modal-footer">
          <button type="button" className={Ratings1.styles.sendButton} data-dismiss="modal"><img src={ICONS.MAILBOX}/>Send</button>
        </div>
        
      </div>
    </div>
  </div>
                </div>
                <hr></hr>
                <div style={{marginTop:'10%',marginLeft:'20%'}}>
                    <img src={ICONS.CHART2} />
                </div>
                </div>
            </div>
            </div>
        
    )
}
Ratings1.styles = {
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
    modal:"nos-online__ratings-container-avatar1",
    sendButton:"nos-online__ratings-container-send-button",
    inputField:"nos-online__ratings-container-input-field",
   
   
    
}

export default Ratings1
