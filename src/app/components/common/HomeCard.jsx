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
                       style={{float:'right'}}
                       src={ICONS.SURFACE1}
                       />
                   </div>
                   
                </div>
                <h6>Actividad del segundo parcial</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br />
                   sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.<br/>
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.</p>
                <div className={HomeCard.styles.bussinessCard}>
                <div className={HomeCard.styles.bussinessContent}>
                <img
                src={ICONS.BMC}
                />
              <p><b>Business Model Canvas files...</b><br />Hojas de Calculo de Google</p>
              </div>
            </div>
            <div className={HomeCard.styles.socialIcons}>
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

}
export default HomeCard
