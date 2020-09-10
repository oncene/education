import React from 'react'
import "../../teacher/styles/teacher-home.scss"
import SideBar from '../../components/common/sideBar'
import MenuSideBarBig from '../../components/common/MenuSideBarBig'
import { ICONS } from '../../utils/enums/Index'
import HomeCard3 from '../../components/common/HomeCard3'
import TeacherProgramCard from '../common/TeacherProgramCard'

const TeacherGroupSection = () => {
    return (
        <div className={TeacherGroupSection.styles.mainContainer}>
            <div className={TeacherGroupSection.styles.sideBar}>
            <SideBar />
            <MenuSideBarBig />
            <div className={TeacherGroupSection.styles.middleContainer}>
               <div className={TeacherGroupSection.styles.postContainer}>
                  <div className={TeacherGroupSection.styles.text}>Write to post ...</div>
                  <hr></hr>
                  <div className={TeacherGroupSection.styles.sideBar} style={{padding:'10px',marginTop:'80px'}}>
                      <button className={TeacherGroupSection.styles.addExercise}><img src={ICONS.SURFACE13}/>Add</button>
                      <button className={TeacherGroupSection.styles.addExercise} style={{marginLeft:'30px'}}>Exercise</button>
                      <div>
                      <button className={TeacherGroupSection.styles.postbutton}><img src={ICONS.SURFACE14}/>To Post</button>
                      </div>
                  </div>
                  <div style={{marginTop:'30px'}}>
                      <HomeCard3 />
                  </div>
               </div>
            </div>
            <div className={TeacherGroupSection.styles.sideContainer}>
                <div className={TeacherGroupSection.styles.sideBar} style={{marginLeft:'60px'}}>
                    <img src={ICONS.CROWNICON}/>
                    <div>
                    <img src={ICONS.PLUSICON} />
                    <div>
                    <img src={ICONS.MINUSICON} style={{marginLeft:'15px'}}/>
                    </div>
                    </div>
                </div>
                <div className={TeacherGroupSection.styles.sideBar} style={{padding:'30px'}}>
                    <img src={ICONS.GROUP} className={TeacherGroupSection.styles.groupImage}/>
                    <p style={{marginLeft:'10px'}}>Group los ACOPLADOS</p>
                    <p style={{fontSize:'0.5rem',marginTop:'-10%',backgroundColor:'#38A7FC',marginTop:'30px',marginLeft: '-106px'}}>ACEPTED</p>
                </div>
                <hr></hr>
                <div>
                    <div style={{padding:'10px'}}>Members</div>
                    <div  className={TeacherGroupSection.styles.sideBar} style={{padding:'5px'}}>
                        <img src={ICONS.AVATAR4}/>
                        <p>Eugene Wade</p>
                    </div>
                    <div  className={TeacherGroupSection.styles.sideBar} style={{padding:'5px'}}>
                        <img src={ICONS.AVATAR1}/>
                        <p>Carolyn Stewart</p>
                    </div>
                    <div  className={TeacherGroupSection.styles.sideBar} style={{padding:'5px'}}>
                        <img src={ICONS.AVATAR3}/>
                        <p>Roger Wade</p>
                    </div>
                </div>
                 <div style={{padding:'20px'}}>Publications</div>
                 <div className={TeacherGroupSection.styles.sideBar} style={{padding:'5px'}}>
                 <div className={TeacherGroupSection.styles.round}>
                  <p style={{textAlign:'center'}}>A</p>
                 </div>
                 <div style={{marginLeft:'20px'}}>
                 <div className={TeacherGroupSection.styles.text1}>Second part activity</div>
                  <div className={TeacherGroupSection.styles.text2}>10 Minute ago</div>
                 </div>
                 </div>
                 <div className={TeacherGroupSection.styles.sideBar} style={{padding:'5px'}}>
                 <div className={TeacherGroupSection.styles.round}>
                  <p style={{textAlign:'center'}}>A</p>
                 </div>
                 <div style={{marginLeft:'20px'}}>
                 <div className={TeacherGroupSection.styles.text1}>Preparation activity ...</div>
                  <div className={TeacherGroupSection.styles.text2}>10 Minute ago</div>
                 </div>
                 </div>
                 <div className={TeacherGroupSection.styles.sideBar} style={{padding:'5px'}}>
                 <div className={TeacherGroupSection.styles.round}>
                  <p style={{textAlign:'center'}}>E</p>
                 </div>
                 <div style={{marginLeft:'20px'}}>
                 <div className={TeacherGroupSection.styles.text1}>First partial Arts</div>
                  <div className={TeacherGroupSection.styles.text2}>10 Minute ago</div>
                 </div>
                 </div>
            </div>
            </div>
        </div>
    )
}
TeacherGroupSection.styles = {
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
    groupImage:"nos-online__teacherhome-root-group-image",
}
export default TeacherGroupSection;
