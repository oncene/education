import React from 'react'
import "../../teacher/styles/teacher-home.scss"
import SideBar from '../../components/common/sideBar'
import MenuSideBarBig from '../../components/common/MenuSideBarBig'
import { ICONS } from '../../utils/enums/Index'
import HomeCard1 from '../../components/common/HomeCard1'

const TeacherHome = () => {
    return (
        <div className={TeacherHome.styles.mainContainer}>
            <div className={TeacherHome.styles.sideBar}>
            <SideBar />
            <MenuSideBarBig />
            <div className={TeacherHome.styles.middleContainer}>
               <div className={TeacherHome.styles.postContainer}>
                  <div className={TeacherHome.styles.text}>Write to post ...</div>
                  <hr></hr>
                  <div className={TeacherHome.styles.sideBar} style={{padding:'10px',marginTop:'80px'}}>
                      <button className={TeacherHome.styles.addExercise}><img src={ICONS.SURFACE13}/>Add</button>
                      <button className={TeacherHome.styles.addExercise} style={{marginLeft:'30px'}}>Exercise</button>
                      <div>
                      <button className={TeacherHome.styles.postbutton}><img src={ICONS.SURFACE14}/>To Post</button>
                      </div>
                  </div>
                  <div style={{marginTop:'30px'}}>
                      <HomeCard1 />
                  </div>
               </div>
            </div>
            <div className={TeacherHome.styles.sideContainer}>
                 <div style={{padding:'20px'}}>Publications</div>
                 <div className={TeacherHome.styles.sideBar} style={{padding:'20px'}}>
                 <div className={TeacherHome.styles.round}>
                  <p style={{textAlign:'center'}}>A</p>
                 </div>
                 <div style={{marginLeft:'20px'}}>
                 <div className={TeacherHome.styles.text1}>Second part activity</div>
                  <div className={TeacherHome.styles.text2}>10 Minute ago</div>
                 </div>
                 </div>
                 <div className={TeacherHome.styles.sideBar} style={{padding:'20px'}}>
                 <div className={TeacherHome.styles.round}>
                  <p style={{textAlign:'center'}}>A</p>
                 </div>
                 <div style={{marginLeft:'20px'}}>
                 <div className={TeacherHome.styles.text1}>Preparation activity ...</div>
                  <div className={TeacherHome.styles.text2}>10 Minute ago</div>
                 </div>
                 </div>
                 <div className={TeacherHome.styles.sideBar} style={{padding:'20px'}}>
                 <div className={TeacherHome.styles.round}>
                  <p style={{textAlign:'center'}}>E</p>
                 </div>
                 <div style={{marginLeft:'20px'}}>
                 <div className={TeacherHome.styles.text1}>First partial Arts</div>
                  <div className={TeacherHome.styles.text2}>10 Minute ago</div>
                 </div>
                 </div>
            </div>
            </div>
        </div>
    )
}
TeacherHome.styles = {
    mainContainer: "nos-online__teacherhome-root-containerHome",
    sideBar: "nos-online__teacherhome-root-sidebar",
    middleContainer: "nos-online__teacherhome-root-middle-container",
    sideContainer: "nos-online__teacherhome-root-right-container",
    postContainer: "nos-online__teacherhome-root-post",
    text: "nos-online__teacherhome-root-text",
    text1: "nos-online__teacherhome-root-text1",
    text2: "nos-online__teacherhome-root-text2",
    addExercise: "nos-online__teacherhome-root-add-exercise",
    postbutton: "nos-online__teacherhome-root-postbutton",
    round: "nos-online__teacherhome-root-round",
}
export default TeacherHome;
