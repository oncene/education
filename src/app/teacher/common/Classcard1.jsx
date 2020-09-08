import React from 'react'
import "../../teacher/styles/class-card.scss"
import { ICONS } from '../../utils/enums/Index'

const ClassCard1 = ({image,heading,content}) => {
    return (
        <div className={ClassCard1.styles.mainContainer}>
            <div className={ClassCard1.styles.cardDisplay}>
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
ClassCard1.styles = {
    mainContainer: "nos-online__classcard-root-containerCard1",
    cardDisplay: "nos-online__classcard-root-card-display1",
}
export default ClassCard1;
