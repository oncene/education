import React from 'react'
import "../../styles/home-card.scss"
import { ICONS} from "../../utils/enums/Index";

const HomeCard =()=> {
    return (
        <div>
            <div className={HomeCard.styles.cardContainer}>
                <div className={HomeCard.styles.profile}>
                    <div>
                   <img 
                    src={ICONS.AVATAR}
                   /> 
                   </div>
                   <div className={HomeCard.styles.profileContent}>
                   <h6>Pricilla Talia</h6>
                   <p style={{color:"#7287B0"}}>10 minutes ago</p>
                   <p className={HomeCard.styles.teacher}>Teacher</p>
                   </div>
                   <div>
                       <img 
                       style={{marginLeft:'830%'}}
                       src={ICONS.SURFACE15}
                       />
                   </div>
                   
                </div>
                <h6 style={{marginLeft:'5%'}}>Actividad del segundo parcial</h6>
                <p style={{marginLeft:'5%'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br />
                   sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.<br/>
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.</p>
                <div style={{marginLeft:'5%'}}className={HomeCard.styles.bussinessCard}>
                <div style={{marginLeft:'5%'}}className={HomeCard.styles.bussinessContent}>
                <img
                src={ICONS.BMC}
                />
              <p><b>Business Model Canvas files...</b><br />Hojas de Calculo de Google</p>
              </div>
            </div>
            <div style={{marginLeft:'5%'}} className={HomeCard.styles.socialIcons}>
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
            <div className={HomeCard.styles.profile}>
                <div>
                <img src={ICONS.AVATAR1}/>
                </div>
                <div className={HomeCard.styles.profileContent}>
                <p><b>Janice Willis</b><br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
               
                </div>
               
            </div>
                <input  className={HomeCard.styles.inputField} placeholder="write comment"></input>
            </div>
           
        </div>
    )
}
HomeCard.styles = {
    cardContainer: "nos-online__homecard-container-card-container",
    profile : "nos-online__homecard-container-profile",
    teacher : "nos-online__homecard-container-teacher",
    profileContent : "nos-online__homecard-container-profile-content",
    profileImage : "nos-online__homecard-container-profile-image",
    bussinessCard : "nos-online__homecard-container-bussiness-card",
    bussinessContent : "nos-online__homecard-container-bussiness-content",
    socialIcons : "nos-online__homecard-container-social-icons",
    inputField : "nos-online__homecard-container-input-field",
    

}
export default HomeCard
