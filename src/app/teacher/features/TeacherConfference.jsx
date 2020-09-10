import React from 'react'
import "../../teacher/styles/teacher-group.scss"
import SideBar from '../../components/common/sideBar'
import MenuSideBarBig from '../../components/common/MenuSideBarBig'
import { ICONS } from '../../utils/enums/Index'
import HomeCard from '../../components/common/HomeCard'
import ConferenceCard from '../../components/common/ConferenceCard'

const TeacherConfference = () => {
    return (
        <div className={TeacherConfference.styles.mainContainer}>
            <div className={TeacherConfference.styles.displayContainer}>
                <SideBar />
                <MenuSideBarBig />
                <div className={TeacherConfference.styles.middleContainer}>
                    <div style={{marginLeft:'30px',marginTop:'20px'}}>
                        <div>Live conferences</div>
                       <ConferenceCard 
                       icon={ICONS.CONFERENCE}
                        header='Modern Art'
                        min='Hace 3 minutos'
                        colortext='EN VIVO'
                        button='JOIN'

                       />
                       <div style={{marginTop:'10px'}}>Group Conferences</div>
                       <div >
                       <ConferenceCard 
                        icon={ICONS.CONFERENCE}
                        header='El Arte Moderno'
                        min='Nov 2020 08:00 PM'
                        colortext1='PROGRAMADA'
                        button='JOIN'
                       />
                       </div>
                       <div style={{marginTop:'10px'}}>
                        <ConferenceCard 
                        icon={ICONS.CONFERENCE}
                        header='El Arte Moderno'
                        min='Hace 10 minutos'
                        colortext='EN VIVO'
                        button='JOIN' 
                       />
                       </div>
                       <div style={{marginTop:'10px'}}>Scheduled Conferences</div>
                       <div style={{marginTop:'10px'}}>
                       <ConferenceCard 
                        icon={ICONS.CONFERENCE}
                        header='Contemporary Art'
                        min='Hace 10 minutos'
                        colortext='EN VIVO'
                        button='JOIN' 
                       />
                       </div>
                       <div style={{marginTop:'10px'}}>
                       <ConferenceCard 
                        icon={ICONS.CONFERENCE}
                        header='The Plastic Arts'
                        min='Nov 2020 08:00 PM'
                        colortext1='PROGRAMMED'
                        button='JOIN'
                       />
                       </div>
                       <div style={{marginTop:'10px'}} >
                       <ConferenceCard 
                        icon={ICONS.CONFERENCE}
                        header='Watercolor painting'
                        min='Nov 2020 08:00 PM'
                        colortext1='PROGRAMMED'
                        button='JOIN'
                       />
                       </div>
                 </div>
                </div>
                <div className={TeacherConfference.styles.rightContainer}>
                    <div>
                        <button className={TeacherConfference.styles.conbutton}  data-toggle="modal" data-target="#myModal">+ NEW CONFERENCE</button>
                        <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
   
        <div class="modal-header">
          <div className={TeacherConfference.styles.displayContainer} >
              <img src={ICONS.MSG2}/>
              <p>Schedule new conference</p>
          </div>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
       
        <div class="modal-body">
          <div>Conference name (*)</div>
          <input type='text' className={TeacherConfference.styles.inputField}></input>
          <div>Date (*)</div>
          <input type='text' className={TeacherConfference.styles.inputField}></input>
        </div>
        
      
        <div class="modal-footer">
          <button type="button" className={TeacherConfference.styles.programedButton} data-dismiss="modal">+ Programed</button>
        </div>
        
      </div>
    </div>
  </div>
                    </div>
                    <div>
                       <div style={{marginTop:'90px',padding:'10px'}}><b>Conference History</b></div>
                       <div className={TeacherConfference.styles.displayContainer} style={{marginTop:'5px',marginLeft:'20px'}}>
                      <div className={TeacherConfference.styles.round}><img src={ICONS.RIGHTMARK}/></div>
                       <div style={{marginLeft:'20px'}}>Las Artes Plásticas<br />18 Abril 2020 12:00 PM</div>
                   </div>
                   <div className={TeacherConfference.styles.displayContainer} style={{marginTop:'5px',marginLeft:'20px'}}>
                      <div className={TeacherConfference.styles.round}><img src={ICONS.RIGHTMARK}/></div>
                       <div style={{marginLeft:'20px'}}>Las Artes Plásticas<br />18 Abril 2020 12:00 PM</div>
                   </div>
                   </div>
                   </div>
            </div>
            
        </div>
    )
}
TeacherConfference.styles = {
    mainContainer: "nos-online__teachergroup-root-containerteacher",
    displayContainer: "nos-online__teachergroup-root-group-display",
    middleContainer: "nos-online__teachergroup-root-middle-container",
    rightContainer: "nos-online__teachergroup-root-right-container",
    newbutton: "nos-online__teachergroup-root-newgroup-button",
    groupImage: "nos-online__teachergroup-root-group-image",
    round: "nos-online__teachergroup-root-round",
    conbutton: "nos-online__teachergroup-root-confferencebutton",
    inputField: "nos-online__teachergroup-root-input-field",
    programedButton: "nos-online__teachergroup-root-programed",
}
export default TeacherConfference
