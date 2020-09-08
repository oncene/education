import React from 'react'
import "../../teacher/styles/chat-card.scss"
import { ICONS } from '../../utils/enums/Index'

const Chatcard = ({icon, name , chat}) => {
    
    return (
        <div className={Chatcard.styles.mainContainer}>
            <div className={Chatcard.styles.Display}>
                <div>
                    <img src={ICONS.AVATAR2}/>
                </div>
                <div>
                    <div>lakshmi</div>
                    <div>hi lakshmi</div>
                </div>
            </div>
        </div>
    )
}
Chatcard.styles = {
    mainContainer: "nos-online__chartcard-container-chatContainer",
    Display: "nos-online__chartcard-container-display",
}
export default Chatcard
