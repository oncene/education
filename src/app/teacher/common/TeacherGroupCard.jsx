import React from 'react'
import "../../teacher/styles/teacher-group-card.scss"
import { ICONS } from '../../utils/enums/Index'

const TeacherGroupCard=()=> {
    return (
        <div className={TeacherGroupCard.styles.mainContainer}>
            <div className={TeacherGroupCard.styles.groupChat}>
            <div className={TeacherGroupCard.styles.groupIcon}>
                <img 
                className={TeacherGroupCard.styles.icon}
                 src={ICONS.GROUP}
                />
                <p style={{marginLeft:"2%"}}><b>Grupo los ACOPLADOS</b><br /><p className={TeacherGroupCard.styles.content}>ACEPTADO</p></p>
                <img style={{marginLeft:'380px'}} src={ICONS.CROWNICON}/>
            </div>
            <div className={TeacherGroupCard.styles.iconContainer}>
                <img 
                src={ICONS.AVATAR1}
                />
                 <img 
                  className={TeacherGroupCard.styles.icons}
                 src={ICONS.AVATAR2}
                />
                 <img 
                  className={TeacherGroupCard.styles.icons}
                src={ICONS.AVATAR3}
                />
                 <img 
                  className={TeacherGroupCard.styles.icons}
                src={ICONS.AVATAR4}
                />
                 <img 
                  className={TeacherGroupCard.styles.icons}
                src={ICONS.AVATAR}
                />
                 <div className={TeacherGroupCard.styles.persons}>5persons</div>
            </div>
            <div>
                <img
                className={TeacherGroupCard.styles.message}
                src={ICONS.MESSAGE}
                />
               
            </div>
           
            </div>
            <hr></hr>
            <div style={{display:'flex',flexDirection:'row'}}>
                <img style={{width:'40px',height:'40px'}}src={ICONS.AVATAR2}/>
                <div style={{marginLeft:'30px'}}>Monica Salinas<br/>10 min ago<br />Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</div>
            </div>
            <div className={TeacherGroupCard.styles.bussinesscard} style={{marginLeft:'20px'}}>
                <div style={{display:'flex',flexDirection:'row'}}>
               <img src={ICONS.BMC}/>
               <p>Image SCRUM organization<br />Hojas de Calculo de Google</p>
               </div>
               <img style={{marginTop:'5px'}}src={ICONS.LIKE}></img>
            </div>
            <div style={{display:'flex',flexDirection:'row' ,marginTop:'30px'}}>
                <img style={{width:'40px',height:'40px'}}src={ICONS.AVATAR4}/>
                <div style={{marginLeft:'30px'}}>Monica Salinas<br/>20 min ago <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                <br />
                <img src={ICONS.LIKE}/>
                </div>
            </div>

            
        </div>
    )
}
TeacherGroupCard.styles = {
    mainContainer: "nos-online__teacher-group-container-card-groupContainer",
    groupChat: "nos-online__teacher-group-container-card-groupChat",
    groupIcon: "nos-online__teacher-group-container-card-groupIcon",
    content: "nos-online__teacher-group-container-content",
    icon: "nos-online__teacher-group-container-card-gicon",
    icons: "nos-online__teacher-group-container-card-icons",
    chartContent: "nos-online__teacher-group-container-card-chartcontent",
    persons: "nos-online__teacher-group-container-card-persons",
    iconContainer: "nos-online__teacher-group-container-card-icons-container",
    message: "nos-online__teacher-group-container-card-message",
    bussinesscard: "nos-online__teacher-group-container-bussinesscard",
}

export default TeacherGroupCard
