import React from 'react'
import "../../teacher/styles/teacher-rating.scss"
import SideBar from '../../components/common/sideBar'
import MenuSideBarBig from '../../components/common/MenuSideBarBig'
import { ICONS } from '../../utils/enums/Index'
import RatingCard1 from '../common/RatingCard1'

const TeacherRatingSection = () => {
    return (
        <div className={TeacherRatingSection.styles.Container}>
            <div className={TeacherRatingSection.styles.displyContainer}>
                <SideBar />
                <MenuSideBarBig />
            <div className={TeacherRatingSection.styles.middleContainer}>
               <div className={TeacherRatingSection.styles.displyContainer} style={{marginTop:'10px'}} >
                   <img src={ICONS.ICONAVATAR}/>
                   <p style={{marginTop:'10px'}}><b>Colegio Juan Pablo II</b><br />Founded in 1996 on November 18</p>
               </div>
               <div className={TeacherRatingSection.styles.displyContainer} style={{marginTop:'10px',marginLeft:'20px'}}>
                   <img  src={ICONS.AVATAR1} />
                   <p style={{marginTop:'10px',marginLeft:'10px'}}><b>Carolina Airoa</b><br/>Teacher {'>'} Plastic Arts</p>
               </div>
               <div style={{marginLeft:'370px'}}>
               <div>Rating</div>
               <div><b>Plastic art</b></div>
               </div>
               <div  style={{marginTop:'10px',marginLeft:'10px'}}>
                   <RatingCard1 />
               </div>
            </div>
            <div className={TeacherRatingSection.styles.rightContainer}>
              <button className={TeacherRatingSection.styles.printButton}><img src={ICONS.PRINT} />PRINT</button>
              <button className={TeacherRatingSection.styles.emailButton}><img src={ICONS.MAILBOX}/>SEND TO EMAIL</button>
              <div>
                  <img 
                   className={TeacherRatingSection.styles.studentChart}
                  src={ICONS.STUDENTCHART}/>
              </div>
            </div>
            </div>
        </div>
    )
}
TeacherRatingSection.styles = {
    Container: "nos-online__teacherrating-root-containerRating",
    displyContainer: "nos-online__teacherrating-root-display",
    middleContainer: "nos-online__teacherrating-root-middle-container",
    rightContainer: "nos-online__teacherrating-root-right-container",
    printButton: "nos-online__teacherrating-root-print",
    emailButton: "nos-online__teacherrating-root-email",
    studentChart: "nos-online__teacherrating-root-chart",
}
export default TeacherRatingSection
