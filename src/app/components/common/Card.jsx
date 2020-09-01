import React from 'react'
import "../../styles/card.scss"
import { ICONS} from "../../utils/enums/Index";

const Card=({image,subject,discription,by})=> {
   
    return (
        <div className={Card.styles.mainContainer} >
            <div className={Card.styles.cardInner}>
            <div>
            <img 
            src={image}
            className={Card.styles.bgImage}
            />
            </div>
                <div style={{color:'white'}}> 
                   <h4>{subject}</h4>  
                   <p>{discription}</p>
                   <p>{by}</p>
                </div>
                <div>
                    <img 
                     src={ICONS.RIGHTARROW}
                     className={Card.styles.arrow}
                    />
                </div>
                <div className={Card.styles.round}>
                    <p style={{marginLeft:'28%'}}>5</p>
                </div>
                </div>
        </div>
    )
}
Card.styles = {
    mainContainer: "nos-online__student-home-container-main",
    bgImage: "nos-online__student-home-container-bg",
    cardInner: "nos-online__student-home-container-card-inner",
    arrow: "nos-online__student-home-container-arrow",
    round:"nos-online__student-home-container-round",

}
export default Card
