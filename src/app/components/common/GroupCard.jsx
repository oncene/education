import React from 'react'
import "../../styles/GroupCard.scss"
import { ICONS } from '../../utils/enums/Index'

const GroupCard=()=> {
    return (
        <div className={GroupCard.styles.mainContainer}>
            <div className={GroupCard.styles.groupChat}>
            <div className={GroupCard.styles.groupIcon}>
                <img 
                className={GroupCard.styles.icon}
                 src={ICONS.GROUP}
                />
                <p style={{marginLeft:"2%"}}><b>Grupo los ACOPLADOS</b><br /><p className={GroupCard.styles.content}>ACEPTADO</p></p>
            </div>
            <div className={GroupCard.styles.iconContainer}>
                <img 
                src={ICONS.AVATAR1}
                />
                 <img 
                  className={GroupCard.styles.icons}
                 src={ICONS.AVATAR2}
                />
                 <img 
                  className={GroupCard.styles.icons}
                src={ICONS.AVATAR3}
                />
                 <img 
                  className={GroupCard.styles.icons}
                src={ICONS.AVATAR4}
                />
                 <img 
                  className={GroupCard.styles.icons}
                src={ICONS.AVATAR}
                />
                 <div className={GroupCard.styles.persons}>5persons</div>
            </div>
            <div>
                <img
                className={GroupCard.styles.message}
                src={ICONS.MESSAGE}
                />
               
            </div>
           
            </div>
            <hr></hr>
            
        </div>
    )
}
GroupCard.styles = {
    mainContainer: "nos-online__group-card-container-card-groupContainer",
    groupChat: "nos-online__group-card-container-card-groupChat",
    groupIcon: "nos-online__group-card-container-card-groupIcon",
    content: "nos-online__group-card-container-content",
    icon: "nos-online__group-card-container-card-gicon",
    icons: "nos-online__group-card-container-card-icons",
    chartContent: "nos-online__group-card-container-card-chartcontent",
    persons: "nos-online__group-card-container-card-persons",
    iconContainer: "nos-online__group-card-container-card-icons-container",
    message: "nos-online__group-card-container-card-message",
}

export default GroupCard
