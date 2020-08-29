import React from 'react'
import "../../styles/conference-card.scss"
import { ICONS } from '../../utils/enums/Index'

const ConferenceCard=()=> {
    return (
        <div className={ConferenceCard.styles.cardContainer}>
            <div className={ConferenceCard.styles.card}>
            <img
            className={ConferenceCard.styles.iconCon}
              src={ICONS.CONFERENCE}
            />
            <div className={ConferenceCard.styles.cardText}>
                <p><b>El Arte Moderno</b><br />Hace 10 minutos</p>
                <p style={{fontSize:'0.5rem',marginTop:'-10%',backgroundColor:'#08DDC1'}}>EN VIVO</p>
                </div>
                <button className={ConferenceCard.styles.button}>UNIRSE</button>
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
