import React from 'react'
import "../../styles/activities-card.scss"
import {ICONS} from "../../utils/enums/Index"

const ActivitiesCard=({label,text,image})=> {
    return (
        <div className={ActivitiesCard.styles.mainContainer}>
            <div>
            <img 
            src={image}
            className={ActivitiesCard.styles.image}
            />
            </div>
            <div>
                <h6 className={ActivitiesCard.styles.imageHeader}>{label}</h6>
                <p className={ActivitiesCard.styles.imageText}>{text}</p>
            </div>
        </div>
    )
}
ActivitiesCard.styles = {
    mainContainer: "nos-online__activities-card-container-main-root",
    image: "nos-online__activities-card-container-image",
    imageHeader: "nos-online__activities-card-container-image-header",
    imageText: "nos-online__activities-card-container-image-text",
}

export default ActivitiesCard;
