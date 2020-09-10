import React from 'react'
import "../../teacher/styles/teacher-group.scss"
import SideBar from '../../components/common/sideBar'
import MenuSideBarBig from '../../components/common/MenuSideBarBig'
import TeacherGroupCard from '../common/TeacherGroupCard'
import { ICONS } from '../../utils/enums/Index'

const TeacherGroup = () => {
    return (
        <div className={TeacherGroup.styles.mainContainer}>
            <div className={TeacherGroup.styles.displayContainer}>
                <SideBar />
                <MenuSideBarBig />
                <div className={TeacherGroup.styles.middleContainer}>
                  <TeacherGroupCard />
                </div>
                <div className={TeacherGroup.styles.rightContainer}>
                    <div>
                        <button className={TeacherGroup.styles.newbutton} data-toggle="modal" data-target="#myModal">+ New Group</button>
                        <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
   
        <div class="modal-header">
          <div className={TeacherGroup.styles.displayContainer} >
              <img src={ICONS.MSG2}/>
              <p>Create new Group</p>
          </div>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
       
        <div class="modal-body">
          <div>Group Name (*)</div>
          <input type='text' className={TeacherGroup.styles.inputField}></input>
          <div>Members (*)</div>
          <input type='text' className={TeacherGroup.styles.inputField}></input>
          <div className={TeacherGroup.styles.displayContainer} style={{padding:'20px'}}>
              <img src={ICONS.AVATAR3} />
              <p>Juan Jose Torrez</p>
              <img src={ICONS.TRASH} className={TeacherGroup.styles.trash}/>
          </div>
          <div className={TeacherGroup.styles.displayContainer}>
              <img src={ICONS.AVATAR4}  style={{marginLeft:'20px'}}/>
              <p>Juan Jose Torrez</p>
              <img src={ICONS.TRASH} className={TeacherGroup.styles.trash}/>
          </div>
        </div>
        
      
        <div class="modal-footer">
          <button type="button" className={TeacherGroup.styles.programedButton} data-dismiss="modal">+ New Group</button>
        </div>
        
      </div>
    </div>
  </div>
                    </div>
                    <hr></hr>
                    <div>Groups</div>
                   <div className={TeacherGroup.styles.displayContainer} style={{marginTop:'5px',marginLeft:'20px'}}>
                       <img className={TeacherGroup.styles.groupImage} src={ICONS.GROUP}/>
                       <div style={{marginLeft:'20px'}}>Grupo los ACOPLADOS<br />5 persons</div>
                   </div>
                   <div className={TeacherGroup.styles.displayContainer} style={{marginTop:'5px',marginLeft:'20px'}}>
                       <img className={TeacherGroup.styles.groupImage} src={ICONS.GROUP}/>
                       <div style={{marginLeft:'20px'}}>Grupo los ACOPLADOS<br />5 persons</div>
                   </div>
                   <div className={TeacherGroup.styles.displayContainer} style={{marginTop:'5px',marginLeft:'20px'}}>
                       <img className={TeacherGroup.styles.groupImage} src={ICONS.GROUP}/>
                       <div style={{marginLeft:'20px'}}>Grupo los ACOPLADOS<br />5 persons</div>
                   </div>
                   <div>
                       <div>Persons</div>
                   </div>
                   <div className={TeacherGroup.styles.displayContainer} style={{marginTop:'5px',marginLeft:'20px'}}>
                       <img src={ICONS.AVATAR2}/>
                       <div style={{marginLeft:'20px'}}>Juan Jose Torrez</div>
                   </div>
                   <div className={TeacherGroup.styles.displayContainer} style={{marginTop:'5px',marginLeft:'20px'}}>
                       <img src={ICONS.AVATAR3}/>
                       <div style={{marginLeft:'20px'}}>Gabriela Rocabado</div>
                   </div>
                   <div className={TeacherGroup.styles.displayContainer} style={{marginTop:'5px',marginLeft:'20px'}}>
                       <img src={ICONS.AVATAR4}/>
                       <div style={{marginLeft:'20px'}}>Gabriela Rocabado</div>
                   </div>
                </div>
            </div>
            
        </div>
    )
}
TeacherGroup.styles = {
    mainContainer: "nos-online__teachergroup-root-containerteacher",
    displayContainer: "nos-online__teachergroup-root-group-display",
    middleContainer: "nos-online__teachergroup-root-middle-container",
    rightContainer: "nos-online__teachergroup-root-right-container",
    newbutton: "nos-online__teachergroup-root-newgroup-button",
    groupImage: "nos-online__teachergroup-root-group-image",
    inputField: "nos-online__teachergroup-root-input-field",
    programedButton: "nos-online__teachergroup-root-programed",
    trash: "nos-online__teachergroup-root-trash",

}
export default TeacherGroup
