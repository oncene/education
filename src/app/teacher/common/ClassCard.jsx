import React from 'react'
import "../../teacher/styles/class-card.scss"
import { ICONS } from '../../utils/enums/Index'

const ClassCard = ({image,heading,content}) => {
    return (
        <div className={ClassCard.styles.mainContainer}>
            <div className={ClassCard.styles.cardDisplay}>
            <div>
                <img 
                  src={image}
                />
            </div>
            <div>
                <div>{heading}</div>
                <div>{content}</div>
            </div>
            </div>
        </div>
    )
}
ClassCard.styles = {
    mainContainer: "nos-online__classcard-root-containerCard",
    cardDisplay: "nos-online__classcard-root-card-display",
}
export default ClassCard;
