import React from 'react'
import "../../teacher/styles/presentation-card.scss"
import SideBar from '../../components/common/sideBar'
import MenuSidebar from '../../components/common/MenuSidebar'
import { ICONS } from '../../utils/enums/Index'

const PresentationCourse = () => {
    return (
        <div className={PresentationCourse.styles.mainContainer}>
            <div className={PresentationCourse.styles.sidebar}>
            <div className={PresentationCourse.styles.sidebar}>
                <SideBar />
                <MenuSidebar />
            </div>
            <div className={PresentationCourse.styles.subContainer}>
                <div className={PresentationCourse.styles.innerContainer}>
                    <div className={PresentationCourse.styles.headerDisplay}>
                    <div className={PresentationCourse.styles.sidebar} style={{padding:'3%'}}>
                        <img src={ICONS.MSG2}/>
                        <div>Create new Presentation</div>
                        </div>
                        <div>
                            <img src={ICONS.TAGP}/>
                        </div>
                        </div>
                        <hr />
                        <div style={{marginLeft:'27%',marginTop:'5%'}}>
                        <div>
                            <div>
                            <div>Presentation Title (*)</div>
                            <input type='text' className={PresentationCourse.styles.inputField}></input>
                            </div>
                            <div style={{marginTop:'5%'}}>
                            <div>Description (*)</div>
                            <input type='text' className={PresentationCourse.styles.discription}></input>
                            </div>
                            <div style={{marginTop:'20px'}}>Enable comment</div>
                        </div>
                        <div style={{marginLeft:'35%'}}>
                            <button type="button" className={PresentationCourse.styles.cancelButton}><img src={ICONS.CROSS}/>Cancel</button>
                            <button type="button" className={PresentationCourse.styles.nextButton}> {'>'} Next</button>
                        </div>
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}
PresentationCourse.styles={
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
export default PresentationCourse
