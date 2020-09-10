import React from 'react'
import "../../teacher/styles/teacher-group.scss"
import SideBar from '../../components/common/sideBar'
import MenuSideBarBig from '../../components/common/MenuSideBarBig'
import { ICONS } from '../../utils/enums/Index'
import HomeCard from '../../components/common/HomeCard'

const TeacherCollaboration = () => {
    return (
        <div className={TeacherCollaboration.styles.mainContainer}>
            <div className={TeacherCollaboration.styles.displayContainer}>
                <SideBar />
                <MenuSideBarBig />
                <div className={TeacherCollaboration.styles.middleContainer}>
                    <div style={{marginLeft:'30px'}}>
                 <HomeCard 
                   icon={ICONS.AVATAR4}
                   name='Yerson Virreira'
                   minute='Yerson Virreira'
                   designation='DOCENTE DE COMPUTACION'
                   icon1={ICONS.SURFACE14}
                   header='Las Artes con la Computación'
                   text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempo incididunt ut labore et dolore magna aliqua. 
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.'
                 />
                 </div>
                </div>
                <div className={TeacherCollaboration.styles.rightContainer}>
                    <div>
                        <button className={TeacherCollaboration.styles.collaborator} data-toggle="modal" data-target="#myModal">+ NEW COLLABORATOR</button>
                        <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
   
        <div class="modal-header">
          <div className={TeacherCollaboration.styles.displayContainer} >
              <img src={ICONS.MSG2}/>
              <p>Invite new collaborator</p>
          </div>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
       
        <div class="modal-body">
          <div>Contributor Email (*)</div>
          <input type='text' className={TeacherCollaboration.styles.inputField}></input>
        </div>
        
      
        <div class="modal-footer">
          <button type="button" className={TeacherCollaboration.styles.programedButton} data-dismiss="modal">+ Invite</button>
        </div>
        
      </div>
    </div>
  </div>
                    </div>
                       <div style={{marginTop:'40px',marginLeft:'10px'}}>Collabortions</div>
                       <div className={TeacherCollaboration.styles.displayContainer} style={{marginTop:'5px',marginLeft:'20px'}}>
                       <img src={ICONS.AVATAR2}/>
                       <div style={{marginLeft:'20px'}}>Juan Jose Torrez</div>
                   </div>
                   </div>
            </div>
            
        </div>
    )
}
TeacherCollaboration.styles = {
    mainContainer: "nos-online__teachergroup-root-containerteacher",
    displayContainer: "nos-online__teachergroup-root-group-display",
    middleContainer: "nos-online__teachergroup-root-middle-container",
    rightContainer: "nos-online__teachergroup-root-right-container",
    newbutton: "nos-online__teachergroup-root-newgroup-button",
    groupImage: "nos-online__teachergroup-root-group-image",
    collaborator: "nos-online__teachergroup-root-collaboratorbutton",
    inputField:'nos-online__teachergroup-root-input-field',
    programedButton:'nos-online__teachergroup-root-programed'

}
export default TeacherCollaboration
