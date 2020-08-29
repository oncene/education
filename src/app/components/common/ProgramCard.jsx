import React from 'react'
import "../../styles/program-card.scss"
import { ICONS } from '../../utils/enums/Index'

const ProgramCard=()=> {
    return (
        <div className={ProgramCard.styles.mainContainer}>
            <p style={{float:'right'}}>Expandir Todo</p>
            <div className={ProgramCard.styles.file}>
                <img src={ICONS.FILE} />
                <p style={{marginLeft:'4%'}}>Introducción a las Artes</p>
            </div>
            <hr></hr>
            <div className={ProgramCard.styles.file1}>
                <img src={ICONS.FILE} />
                <p style={{marginLeft:'4%'}}>Introducción a las Artes</p>
            </div>
            <hr></hr>
            <div className={ProgramCard.styles.file1}>
                <img src={ICONS.FILE} />
                <p style={{marginLeft:'4%'}}>Introducción a las Artes</p>
            </div>
            <hr></hr>
            
        </div>
    )
}
ProgramCard.styles = {
    mainContainer: "nos-online__program-card-container-program-container",
    file: "nos-online__program-card-container-file",
    file1: "nos-online__program-card-container-file1",
}
export default ProgramCard
