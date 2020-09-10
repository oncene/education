import React from 'react'
import "../../teacher/styles/dashboard.scss"
import SideBar from '../../components/common/sideBar'
import { ICONS } from '../../utils/enums/Index'
import ClassCard from '../common/ClassCard'
import Card from '../../components/common/Card'
import Chatcard from '../common/Chatcard'
import ClassCard1 from '../common/Classcard1'


const TeacherDashboard = () => {
    return (
        <div className={TeacherDashboard.styles.mainContainer}>
            <div className={TeacherDashboard.styles.container}>
            <div>
                <SideBar />
            </div>
            <div className={TeacherDashboard.styles.schoolCards}>
            <div className={TeacherDashboard.styles.container}>
                <div style={{marginLeft:'16px',marginTop:'25px'}}><b>Parallels</b></div>
                <div style={{marginLeft:'160px',marginTop:'16px'}}>
                  <a data-toggle="modal" data-target="#myModal"><img src={ICONS.BUTTON1}/></a>
                  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
      
        <div class="modal-header">
          <div className={TeacherDashboard.styles.container}>
              <img src={ICONS.MSG2}/>
              <p>Create new Parallel</p>
          </div>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        
        <div class="modal-body">
            <div>
          <p>School (*)</p>
          <input className={TeacherDashboard.styles.inputField}></input>
          </div>
          <div>
          <p>Title (*)</p>
          <input className={TeacherDashboard.styles.inputField}></input>
          </div>
          <div>
          <p>Discription (*)</p>
          <input className={TeacherDashboard.styles.inputField}></input>
          </div>
        </div>
        {/* <div>
            <button type="button" className={TeacherDashboard.styles.modalButton}>+ New Parallel</button>
        </div> */}
    
        <div class="modal-footer">
        <button type="button" className={TeacherDashboard.styles.modalButton}>+ New Parallel</button>
        </div>
        
      </div>
    </div>
  </div>
  
                </div>
            </div>
            <div className={TeacherDashboard.styles.sCards}>
            <ClassCard 
             image={ICONS.SURFACE4}
             heading='2C High School'
             content='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.'
            />
            </div>
            <div className={TeacherDashboard.styles.sCards}>
                <ClassCard1 
                 image={ICONS.SURFACE3}
                 heading='2A High School'
                 content='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.'
                />
            </div>
            <div className={TeacherDashboard.styles.sCards}>
                <ClassCard1 
                 image={ICONS.SURFACE3}
                 heading='2B High School'
                 content='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.'
                />
            </div>
            </div>
            <div>
            <div className={TeacherDashboard.styles.container}>
                <div style={{marginLeft:'16px',marginTop:'25px'}}><b>Subjects</b></div>
                <div style={{marginLeft:'160px',marginTop:'16px'}}>
                   <a  data-toggle="modal" data-target="#myModal1"><img src={ICONS.BUTTON}/></a>
                   <div class="modal" id="myModal1">
    <div class="modal-dialog">
      <div class="modal-content">
      
      
        <div class="modal-header">
          <div className={TeacherDashboard.styles.container}>
              <img src={ICONS.MSG2}/>
              <p>Create new Matter</p>
          </div>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        
        <div class="modal-body">
            <div>
          <p>School Parallel (*)</p>
          <input className={TeacherDashboard.styles.inputField}></input>
          </div>
          <div>
          <p>Cover image (*)</p>
          <div className={TeacherDashboard.styles.inputField}>
              <button className={TeacherDashboard.styles.upload}>Upload</button>
          </div>
          </div>
          <div>
          <p>Matter title (*)</p>
          <input className={TeacherDashboard.styles.inputField}></input>
          </div>
          <div>
          <p>Discription (*)</p>
          <input className={TeacherDashboard.styles.inputField}></input>
          </div>
        </div>
        {/* <div>
            <button type="button" className={TeacherDashboard.styles.modalButton}>+ New Parallel</button>
        </div> */}
    
        <div class="modal-footer">
        <button type="button" className={TeacherDashboard.styles.modalButton}>+ New Matter</button>
        </div>
        
      </div>
    </div>
  </div>
                </div>
            </div>
            <div className={TeacherDashboard.styles.sCards}>
                <Card 
                 image={ICONS.BG1}
                 subject="Plastic Arts"
                 discription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
                 by="Juan Gabriel Torrez"
                />
                <div style={{marginTop:'16px'}}>
                <Card 
                 image={ICONS.BG4}
                 subject="Plastic Arts"
                 discription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
                 by="Juan Gabriel Torrez"
                />
                </div>
                <div style={{marginTop:'16px'}}>
                <Card 
                 image={ICONS.BG5}
                 subject="Plastic Arts"
                 discription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
                 by="Juan Gabriel Torrez"
                />
                </div>
            </div>
            </div>
            <div className={TeacherDashboard.styles.chatContainer}>
              <div style={{marginLeft:'16px',marginTop:'25px'}}><b>Notifications</b></div>
              <div  className={TeacherDashboard.styles.sCards}>
                  <Chatcard 
                    icon={ICONS.AVATAR2}
                    name="Vincent Marshall"
                    chat="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, st ut."
                  />
              </div>
              <div className={TeacherDashboard.styles.sCards} >
                  <Chatcard 
                    icon={ICONS.AVATAR2}
                    name="Vincent Marshall"
                    chat="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, st ut."
                  />
              </div>
            </div>
            </div>
        </div>
    )
}
TeacherDashboard.styles={
    mainContainer:"nos-online__classcard-root-containerDashboard",
    container:"nos-online__classcard-root-container",
    schoolCards:"nos-online__classcard-root-schoolCards",
    sCards:"nos-online__classcard-root-scards",
    chatContainer:"nos-online__classcard-root-chatContainer",
    inputField:"nos-online__classcard-root-input-field",
    modalButton:"nos-online__classcard-root-modal-button",
    upload:"nos-online__classcard-root-upload"

}
export default TeacherDashboard
