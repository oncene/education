import React from 'react'
import "../styles/group.scss"
import { ICONS} from "../utils/enums/Index";
import LeftMenuBar from '../components/common/LeftMenuBar';
import HomeCard from '../components/common/HomeCard';
import GroupCard from '../components/common/GroupCard';


const Groups=()=> {
    return (
        <div className={Groups.styles.mainContainer}>
            <div className={Groups.styles.homeContainer}>  
                <div className={Groups.styles.leftBar}>
                <div className={Groups.styles.iconContainer1}>
                    <img 
                    src={ICONS.SURFACE}
                    className={Groups.styles.surfaceIcon1}

                    />
                    </div>
                    <div style={{marginTop:'25%'}}>
                        <img  
                        src={ICONS.FEATURES_LIST}
                        className={Groups.styles.icons1}
                        />
                    </div>
                    <div style={{marginTop:'25%'}}>
                        <img
                        src={ICONS.FILE_EXPLORER}
                        className={Groups.styles.icons1}
                        />
                    </div>
                    <div style={{marginTop:'25%'}}>
                        <img
                        src={ICONS.CHAT_MESSAGE}
                        className={Groups.styles.icons1}
                         />
                    </div>
                    <div style={{marginTop:'25%'}}>
                        <img 
                        src={ICONS.NOTIFICATION}
                        className={Groups.styles.icons1}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.LOGOUT}
                        className={Groups.styles.logout1}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.USER}
                        className={Groups.styles.user}
                        />
                    </div>
            </div>
            <div className={Groups.styles.cardMiddle}>
                <div style={{marginLeft:-15}}>
                <LeftMenuBar />
                </div>
            </div>
            <div styles={{ height: '500px', overflowY: 'scroll' }}>
               <div>
                   <GroupCard />
               </div>
            <div style={{marginTop:'5%'}}>
                <HomeCard />
            </div>
            </div>
            <div className={Groups.styles.rightContainer}>
            <div>
                <button className={Groups.styles.newGroup}>+ New Group</button>
            </div>
            <hr></hr>
            <h6>GROUP</h6>
            <div style={{display:"flex",flexDirection:'row',justifyContent:'center'}}>
                <img 
                 src={ICONS.GROUP}
                 />
                
                 <div style={{marginLeft:"4%"}}>
                 <p>Grupo los ACOPLADOS<br/>5 Personas</p>
                 </div>
                 </div>
             </div>
            </div>
        </div>
    )
}
Groups.styles = {
    mainContainer: "nos-online__group-container-root",
    leftBar:"nos-online__group-container-leftBar",
    iconContainer:"nos-online__group-container-icon-container",
    icons:"nos-online__group-container-icons",
    surfaceIcon:"nos-online__group-container-surface-icon",
    logout:"nos-online__group-container-logout",
    user:"nos-online__group-container-user-icon",
    homeContainer:"nos-online__group-container-home-container",
    rightContainer:"nos-online__group-container-right-container",
    cardMiddle:"nos-online__group-container-card-middle",
    publication:"nos-online__group-container-publication",
    publicationList:"nos-online__group-container-publication-list",
    content:"nos-online__group-container-content",
    emptyCard:"nos-online__group-container-emptycard",
    publish:"nos-online__group-container-publish",
    anadir:"nos-online__group-container-anadir",
    newGroup:"nos-online__group-container-newGroup",
    
}

export default Groups