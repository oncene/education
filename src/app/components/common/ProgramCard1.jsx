import React from 'react'
import "../../styles/program-card.scss"
import { ICONS } from '../../utils/enums/Index'

const ProgramCard1=()=> {
    return (
        <div className={ProgramCard1.styles.mainContainer}>
            <p style={{float:'right'}}>Expandir Todo</p>
            <div className={ProgramCard1.styles.file}>
                <img src={ICONS.FILE} />
                <p style={{marginLeft:'4%'}}>Introducción a las Artes</p>
            </div>
            <div className={ProgramCard1.styles.file}>
                <img 
                className={ProgramCard1.styles.xm}
                src={ICONS.XM1} />
                <p style={{marginLeft:'2%',marginTop:'-1%'}}>Introducción a las Artes</p>
            </div>
            <div className={ProgramCard1.styles.file}>
                <img 
                className={ProgramCard1.styles.xm}
                src={ICONS.VIDEO} />
                <p style={{marginLeft:'2%',marginTop:'-1%'}}>Introducción a las Artes</p>
            </div>
            <div className={ProgramCard1.styles.file}>
                <img 
                className={ProgramCard1.styles.xm}
                src={ICONS.XM1} />
                <p style={{marginLeft:'2%',marginTop:'-1%'}}>Introducción a las Artes</p>
            </div>
            <hr></hr>
            <div className={ProgramCard1.styles.file1}>
                <img src={ICONS.FILE} />
                <p style={{marginLeft:'4%'}}>Introducción a las Artes</p>
            </div>
            <hr></hr>
            <div className={ProgramCard1.styles.file1}>
                <img src={ICONS.FILE} />
                <p style={{marginLeft:'4%'}}>Introducción a las Artes</p>
            </div>
            <hr></hr>
            
        </div>
    )
}
ProgramCard1.styles = {
    mainContainer: "nos-online__program-card-container-program-container",
    file: "nos-online__program-card-container-file",
    file1: "nos-online__program-card-container-file1",
    xm: "nos-online__program-card-container-xm",
}
export default ProgramCard1
