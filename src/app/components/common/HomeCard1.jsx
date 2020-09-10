import React from 'react'
import "../../styles/home-card.scss"
import { ICONS} from "../../utils/enums/Index";

const HomeCard1 =()=> {
    return (
        <div>
            <div className={HomeCard1.styles.cardContainer1}>
                <div className={HomeCard1.styles.profile}>
                    <div>
                   <img 
                    src={ICONS.AVATAR}
                   /> 
                   </div>
                   <div className={HomeCard1.styles.profileContent}>
                   <h6>Pricilla Talia</h6>
                   <p style={{color:"#7287B0",marginTop:'-10%'}}>10 minutes ago</p>
                   <p className={HomeCard1.styles.teacher} style={{marginTop:'-10%'}}>Teacher</p>
                   </div>
                   <div>
                       <img 
                       style={{marginLeft:'830%'}}
                       src={ICONS.SURFACE15}
                       />
                   </div>
                   
                </div>
                <h6 style={{marginLeft:'5%',marginTop:'-2%'}}>Actividad del segundo parcial</h6>
                <p style={{marginLeft:'5%',marginTop:'-1%'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                   sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.</p>
                <div style={{marginLeft:'5%',marginTop:'-1%'}}className={HomeCard1.styles.bussinessCard}>
                <div style={{marginLeft:'5%'}}className={HomeCard1.styles.bussinessContent}>
                <img
                src={ICONS.BMC}
                />
              <p><b>Business Model Canvas files...</b><br />Hojas de Calculo de Google</p>
              </div>
            </div>
            <div style={{marginLeft:'5%',marginTop:'0.0%'}} className={HomeCard1.styles.socialIcons}>
                <div>
                <img 
                src={ICONS.LIKE}
                />
                </div>
                <div style={{marginLeft:'5%'}}>
                <img 
                src={ICONS.MESSAGE}
                />
                </div>
            </div>
            <hr></hr>
                <input  className={HomeCard1.styles.inputField} placeholder="write comment"></input>
            </div>
            <div>
            <div style={{marginTop:'-27px',marginLeft:'10px'}}>
                <img className={HomeCard1.styles.crmSur} src={ICONS.CMRA}/>
                <img className={HomeCard1.styles.crmSur} style={{marginLeft:'1%'}} src={ICONS.SURFACE13}/>
            </div>
            <div style={{marginTop:'-30px',float:'right'}}>
           <button className={HomeCard1.styles.comentorButton}>Comentor</button>
           </div>
           </div>
        </div>
    )
}
HomeCard1.styles = {
    cardContainer: "nos-online__homecard-container-card-container",
    profile : "nos-online__homecard-container-profile",
    teacher : "nos-online__homecard-container-teacher",
    profileContent : "nos-online__homecard-container-profile-content",
    profileImage : "nos-online__homecard-container-profile-image",
    bussinessCard : "nos-online__homecard-container-bussiness-card",
    bussinessContent : "nos-online__homecard-container-bussiness-content",
    socialIcons : "nos-online__homecard-container-social-icons",
    inputField : "nos-online__homecard-container-input-field",
    cardContainer1: "nos-online__homecard-container-card-container1",
    comentorButton: "nos-online__homecard-container-comentor-button",
    comentorButtonContainer: "nos-online__homecard-container-comentor-button-container",
    crmSur : "nos-online__homecard-container-crm-surface",
}
export default HomeCard1
