import React from 'react'
import "../../teacher/styles/teacher-rating.scss"
import SideBar from '../../components/common/sideBar'
import MenuSideBarBig from '../../components/common/MenuSideBarBig'
import { ICONS } from '../../utils/enums/Index'
import RatingCard from '../common/RatingCard'
import TeacherProgramCard from '../common/TeacherProgramCard'

const TeacherProgram = () => {
    return (
        <div className={TeacherProgram.styles.Container}>
            <div className={TeacherProgram.styles.displyContainer}>
                <SideBar />
                <MenuSideBarBig />
            <div className={TeacherProgram.styles.middleContainer}>
              <div style={{padding:'30px'}}><b>Subject program</b><br />Plastic Arts</div>
              <div style={{marginTop:'10px',marginLeft:'60px'}}>
                  <TeacherProgramCard />
              </div>
            </div>
            <div className={TeacherProgram.styles.rightContainer}>
                <div style={{padding:'30px'}}>
             <div><b>Considerations</b></div>
             <div>Los exámenes de prueba, las puntuaciones obtenidas no son calificadas.</div>
             </div>
            </div>
            </div>
        </div>
    )
}
TeacherProgram.styles = {
    Container: "nos-online__teacherrating-root-containerRating",
    displyContainer: "nos-online__teacherrating-root-display",
    middleContainer: "nos-online__teacherrating-root-middle-container",
    rightContainer: "nos-online__teacherrating-root-right-container",
    printButton: "nos-online__teacherrating-root-print",
    emailButton: "nos-online__teacherrating-root-email",
    studentChart: "nos-online__teacherrating-root-chart",
}
export default TeacherProgram
