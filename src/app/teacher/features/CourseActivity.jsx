import React from 'react'
import "../../teacher/styles/presentation-card.scss"
import SideBar from '../../components/common/sideBar'
import MenuSidebar from '../../components/common/menuSidebar'
import { ICONS } from '../../utils/enums/Index'

const CourseActivity = () => {
    return (
        <div className={CourseActivity.styles.mainContainer}>
            <div className={CourseActivity.styles.sidebar}>
            <div className={CourseActivity.styles.sidebar}>
                <SideBar />
                <MenuSidebar />
            </div>
            <div className={CourseActivity.styles.subContainer}>
                <div className={CourseActivity.styles.innerContainer}>
                    <div className={CourseActivity.styles.headerDisplay}>
                    <div className={CourseActivity.styles.sidebar} style={{padding:'3%'}}>
                        <img src={ICONS.MSG2}/>
                        <div>Create new Activity</div>
                        </div>
                        <div>
                            <img src={ICONS.TAGP}/>
                        </div>
                        </div>
                        <hr />
                        <div style={{marginLeft:'27%',marginTop:'1%'}}>
                        <div>
                            <div>
                            <div>Activity Title (*)</div>
                            <input type='text' className={CourseActivity.styles.inputField}></input>
                            </div>
                            <div style={{marginTop:'1%'}}>
                            <div>Activity Details (*)</div>
                            <input type='text' className={CourseActivity.styles.discription}></input>
                            </div>
                            <div style={{marginTop:'20px'}}>Deliverable files</div>
                            <div style={{marginTop:'20px'}}>Enable comment</div>
                            <div><img src={ICONS.ACTIVITYIMAGE}/></div>
                        </div>
                        <div style={{marginLeft:'20%'}}>
                            <button type="button" className={CourseActivity.styles.cancelButton} ><img src={ICONS.SURFACE13}/>Add</button>
                            <button type="button" className={CourseActivity.styles.cancelButton} style={{marginLeft:'3%'}}><img src={ICONS.CROSS}/>Cancel</button>
                            <button type="button" className={CourseActivity.styles.nextButton}> <img src={ICONS.SURFACE14}/>Finalize</button>
                        </div>
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}
CourseActivity.styles={
    mainContainer:"nos-online__presentation-root-containerPresentation",
    sidebar:"nos-online__presentation-root-sidebar-display",
    subContainer:"nos-online__presentation-root-subContainer",
    innerContainer:"nos-online__presentation-root-innerContainer",
    headerDisplay:"nos-online__presentation-root-header-display",
    inputField:"nos-online__presentation-root-input-field",
    discription:"nos-online__presentation-root-discription",
    cancelButton:"nos-online__presentation-root-cancel-button",
    nextButton:"nos-online__presentation-root-next-button",
    
}
export default CourseActivity
