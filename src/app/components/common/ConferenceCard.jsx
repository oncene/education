import React from 'react'
import "../../styles/conference-card.scss"
import { ICONS } from '../../utils/enums/Index'

const ConferenceCard=({header,min,icon,colortext,button,colortext1})=> {
    return (
        <div className={ConferenceCard.styles.cardContainer}>
            <div className={ConferenceCard.styles.card}>
            <img
            className={ConferenceCard.styles.iconCon}
              src={icon}
            />
            <div className={ConferenceCard.styles.cardText}>
             <p><b>{header}</b><br />{min}</p>
                <p style={{fontSize:'0.5rem',marginTop:'-10%',backgroundColor:'#08DDC1'}}>{colortext}</p>
                <p style={{fontSize:'0.5rem',marginTop:'-10%',backgroundColor:'#7C5AC1'}}>{colortext1}</p>
                </div>
              <button className={ConferenceCard.styles.button}>{button}</button>
                </div>
        </div>
    )
}
ConferenceCard.styles = {
    cardContainer: "nos-online__conference-container-root-conference",
    iconCon: "nos-online__conference-container-icon-con",
    cardText: "nos-online__conference-container-card-text",
    card: "nos-online__conference-container-card",
    button: "nos-online__conference-container-button",
    
}
export default ConferenceCard
