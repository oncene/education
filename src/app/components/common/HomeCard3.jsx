import React from 'react'
import "../../styles/home-card.scss"
import { ICONS} from "../../utils/enums/Index";

const HomeCard3 =()=> {
    return (
        <div>
            <div className={HomeCard3.styles.cardContainer2}>
                <div className={HomeCard3.styles.profile}>
                    <div>
                   <img 
                    src={ICONS.AVATAR}
                   /> 
                   </div>
                   <div className={HomeCard3.styles.profileContent}>
                   <h6>Pricilla Talia</h6>
                   <p style={{color:"#7287B0",marginTop:'-10%'}}>10 minutes ago</p>
                   <p className={HomeCard3.styles.teacher} style={{marginTop:'-10%'}}>Teacher</p>
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
                <div style={{marginLeft:'5%',marginTop:'-1%'}}className={HomeCard3.styles.bussinessCard}>
                <div style={{marginLeft:'5%'}}className={HomeCard3.styles.bussinessContent}>
                <img
                src={ICONS.BMC}
                />
              <p><b>Business Model Canvas files...</b><br />Hojas de Calculo de Google</p>
              </div>
            </div>
            <div style={{marginLeft:'5%',marginTop:'0.0%'}} className={HomeCard3.styles.socialIcons}>
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
            <div className={HomeCard3.styles.profile}>
               <img src={ICONS.AVATAR2} />
               <p style={{marginLeft:'5%',marginTop:'-2%'}}><b>Janice Willis</b><br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
           </div>
                <input  className={HomeCard3.styles.inputField} placeholder="write comment"></input>
            </div>
            <div style={{marginTop:'-5%',marginLeft:'5%'}} >
                <img className={HomeCard3.styles.crmSur} src={ICONS.CMRA}/>
                <img className={HomeCard3.styles.crmSur} style={{marginLeft:'1%'}} src={ICONS.SURFACE13}/>
            </div>
            <div style={{marginTop:'-5.5%',marginLeft:'74%'}}>
           <button className={HomeCard3.styles.comentorButton}>Comentor</button>
           </div>
           <h></h>
         
        </div>
    )
}
HomeCard3.styles = {
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
    cardContainer2: "nos-online__homecard-container-card-container2",
    comentorButton: "nos-online__homecard-container-comentor-button",
    comentorButtonContainer: "nos-online__homecard-container-comentor-button-container",
    crmSur : "nos-online__homecard-container-crm-surface",
}
export default HomeCard3
