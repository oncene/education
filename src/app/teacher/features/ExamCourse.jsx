import React from 'react'
import "../../teacher/styles/presentation-card.scss"
import SideBar from '../../components/common/sideBar'
import MenuSidebar from '../../components/common/menuSidebar'
import { ICONS } from '../../utils/enums/Index'

const ExamCourse = () => {
    return (
        <div className={ExamCourse.styles.mainContainer}>
            <div className={ExamCourse.styles.sidebar}>
            <div className={ExamCourse.styles.sidebar}>
                <SideBar />
                <MenuSidebar />
            </div>
            <div className={ExamCourse.styles.subContainer}>
                <div className={ExamCourse.styles.innerContainer}>
                    <div className={ExamCourse.styles.headerDisplay}>
                    <div className={ExamCourse.styles.sidebar} style={{padding:'3%'}}>
                        <img src={ICONS.MSG2}/>
                        <div>Create new Activity</div>
                        </div>
                        <div>
                            <img src={ICONS.TAGP}/>
                        </div>
                        </div>
                        <hr />
                        <div style={{marginLeft:'20%',marginTop:'1%'}}>
                        <div className={ExamCourse.styles.examCard}>
                         <p>Exam Title (*)</p>
                         <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                         <hr />
                         <p>Activity Details (*)</p>
                         <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</p>
                        </div>
                        <div className={ExamCourse.styles.artCard} style={{marginTop:'1%'}}>
                        <p>Art is a science?</p>
                        <p>o-yes</p>
                        <p>o-No</p>
                        </div>
                        <div style={{marginLeft:'45%',marginTop:'5%'}}>
                            <button type="button" className={ExamCourse.styles.cancelButton} style={{marginLeft:'3%'}}><img src={ICONS.CROSS}/>Cancel</button>
                            <button type="button" className={ExamCourse.styles.nextButton}> <img src={ICONS.SURFACE14}/>Finalize</button>
                        </div>
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}
ExamCourse.styles={
    mainContainer:"nos-online__presentation-root-containerPresentation",
    sidebar:"nos-online__presentation-root-sidebar-display",
    subContainer:"nos-online__presentation-root-subContainer",
    innerContainer:"nos-online__presentation-root-innerContainer",
    headerDisplay:"nos-online__presentation-root-header-display",
    inputField:"nos-online__presentation-root-input-field",
    discription:"nos-online__presentation-root-discription",
    cancelButton:"nos-online__presentation-root-cancel-button",
    nextButton:"nos-online__presentation-root-next-button",
    examCard:"nos-online__presentation-root-exam-card",
    artCard:"nos-online__presentation-root-art-card",
}
export default ExamCourse
