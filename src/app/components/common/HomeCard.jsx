import React from 'react'
import "../../styles/home-card.scss"
import { ICONS} from "../../utils/enums/Index";

const HomeCard =({icon,icon1,name,minute,designation,text,header})=> {
    return (
        <div>
            <div className={HomeCard.styles.cardContainer}>
                <div className={HomeCard.styles.profile}>
                    <div>
                   <img 
                    src={icon}
                   /> 
                   </div>
                   <div className={HomeCard.styles.profileContent}>
                   <h6>{name}</h6>
                   <p style={{color:"#7287B0"}}>{minute}</p>
                   <p className={HomeCard.styles.teacher}>{designation}</p>
                   </div>
                   <div>
                       <img 
                       style={{float:'right'}}
                       src={icon1}
                       />
                   </div>
                   
                </div>
                <h6>{header}</h6>
                <p>{text}</p>
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
