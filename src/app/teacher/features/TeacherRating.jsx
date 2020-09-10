import React from 'react'
import "../../teacher/styles/teacher-rating.scss"
import SideBar from '../../components/common/sideBar'
import MenuSideBarBig from '../../components/common/MenuSideBarBig'
import { ICONS } from '../../utils/enums/Index'
import RatingCard from '../common/RatingCard'

const TeacherRating = () => {
    return (
        <div className={TeacherRating.styles.Container}>
            <div className={TeacherRating.styles.displyContainer}>
                <SideBar />
                <MenuSideBarBig />
            <div className={TeacherRating.styles.middleContainer}>
               <div className={TeacherRating.styles.displyContainer} style={{marginTop:'10px'}} >
                   <img src={ICONS.ICONAVATAR}/>
                   <p style={{marginTop:'10px'}}><b>Colegio Juan Pablo II</b><br />Founded in 1996 on November 18</p>
               </div>
               <div style={{marginTop:'10px',marginLeft:'10px'}}><b>Plastic arts students</b></div>
               <div  style={{marginTop:'10px',marginLeft:'10px'}}>
                   <RatingCard />
               </div>
            </div>
            <div className={TeacherRating.styles.rightContainer}>
              <button className={TeacherRating.styles.printButton}><img src={ICONS.PRINT} />PRINT</button>
              <button className={TeacherRating.styles.emailButton}><img src={ICONS.MAILBOX}/>SEND TO EMAIL</button>
              <div>
                  <img 
                   className={TeacherRating.styles.studentChart}
                  src={ICONS.STUDENTCHART}/>
              </div>
            </div>
            </div>
        </div>
    )
}
TeacherRating.styles = {
    Container: "nos-online__teacherrating-root-containerRating",
    displyContainer: "nos-online__teacherrating-root-display",
    middleContainer: "nos-online__teacherrating-root-middle-container",
    rightContainer: "nos-online__teacherrating-root-right-container",
    printButton: "nos-online__teacherrating-root-print",
    emailButton: "nos-online__teacherrating-root-email",
    studentChart: "nos-online__teacherrating-root-chart",
}
export default TeacherRating
