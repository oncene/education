import React from 'react'
import "../../teacher/styles/teacher-program-card.scss"
import { ICONS } from '../../utils/enums/Index'


const TeacherProgramCard = () => {
    return (
        <div className={TeacherProgramCard.styles.Container}>
            <div style={{float:'right'}}>Collapse All</div>
            <div className={TeacherProgramCard.styles.display1} style={{padding:'30px'}}>
                <div className={TeacherProgramCard.styles.display}>
                    <img src={ICONS.FILE}/>
                    <p>Introducción a las Artes</p>
                </div>
                <div>
                    <button className={TeacherProgramCard.styles.add}><img src={ICONS.SURFACE13}/>Add</button>
                </div>
            </div>
            <div className={TeacherProgramCard.styles.display} style={{marginLeft:'80px',marginTop:'-40px'}}>
                <img src={ICONS.XM1} className={TeacherProgramCard.styles.image}/>
                <p>introducción_a_as_artes.pdf</p>
                <img src={ICONS.TRASH} style={{marginLeft:'10px'}}className={TeacherProgramCard.styles.delete} />
            </div>
            <div  className={TeacherProgramCard.styles.display} style={{marginLeft:'80px',marginTop:'-10px'}}>
                <img src={ICONS.VIDEO} className={TeacherProgramCard.styles.delete}/>
                <p>que es el arte.mp4</p>
                <img src={ICONS.TRASH} style={{marginLeft:'10px'}}className={TeacherProgramCard.styles.delete}/>
            </div>
            <div className={TeacherProgramCard.styles.display} style={{marginLeft:'80px',marginTop:'-10px'}}>
                <img src={ICONS.XM1} className={TeacherProgramCard.styles.image}/>
                <p>introducción_a_as_artes.pdf</p>
                <img src={ICONS.TRASH} style={{marginLeft:'10px'}}className={TeacherProgramCard.styles.delete} />
            </div>
            <hr></hr>
            <div className={TeacherProgramCard.styles.display1} style={{padding:'30px',marginTop:'-25px'}}>
                <div className={TeacherProgramCard.styles.display}>
                    <img src={ICONS.FILE}/>
                    <p>El Arte Moderno</p>
                </div>
                <div>
                    <button className={TeacherProgramCard.styles.add}><img src={ICONS.SURFACE13}/>Add</button>
                </div>
            </div>
            <hr></hr>
            <div className={TeacherProgramCard.styles.display1} style={{padding:'30px',marginTop:'-25px'}}>
                <div className={TeacherProgramCard.styles.display}>
                    <img src={ICONS.FILE}/>
                    <p>El Arte Contemporáneo</p>
                </div>
                <div>
                    <button className={TeacherProgramCard.styles.add}><img src={ICONS.SURFACE13}/>Add</button>
                </div>
            </div>
        </div>
    )
}
TeacherProgramCard.styles = {
    Container: "nos-online__teacherprogram-root-containerProgram",
    add: "nos-online__teacherprogram-root-add",
    display: "nos-online__teacherprogram-root-display",
    display1: "nos-online__teacherprogram-root-display1",
    image: "nos-online__teacherprogram-root-image",
    delete: "nos-online__teacherprogram-root-delete",
}
export default TeacherProgramCard
