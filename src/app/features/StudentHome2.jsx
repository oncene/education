import React from 'react'
import "../styles/student-home2.scss"
import { ICONS} from "../utils/enums/Index";
import Card from "../components/common/Card"
import ActivitiesCard from '../components/common/ActivitiesCard';


const StudentHome2=()=> {
    return (
        <div className={StudentHome2.styles.mainContainer}>
            <div className={StudentHome2.styles.innerConatiner}>
                <div className={StudentHome2.styles.subjectContainer}>
                <div className={StudentHome2.styles.leftBar}>
                    <div className={StudentHome2.styles.iconContainer}>
                    <img 
                    src={ICONS.SURFACE}
                    className={StudentHome2.styles.surfaceIcon}

                    />
                    </div>
                    <div>
                        <img  
                        src={ICONS.FEATURES_LIST}
                        className={StudentHome2.styles.icons}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.FILE_EXPLORER}
                        className={StudentHome2.styles.icons}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.CHAT_MESSAGE}
                        className={StudentHome2.styles.icons}
                         />
                    </div>
                    <div>
                        <img 
                        src={ICONS.NOTIFICATION}
                        className={StudentHome2.styles.icons}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.LOGOUT}
                        className={StudentHome2.styles.logout}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.USER}
                        className={StudentHome2.styles.user}
                        />
                    </div>

                </div>
                <div className={StudentHome2.styles.cardContainer}>
                    <h3 className={StudentHome2.styles.text}>My Subjects</h3>
                <div>
                <Card image={ICONS.BG} subject="Plastic Arts"
                 discription="plastic arts of the second semester of preparatory"
                  by="By: Juan Gabriel Torrez"/>
                </div>
                <div style={{marginTop:'5%'}}>
                <Card 
                image={ICONS.BG1} subject="Biology"
                discription="study of human biology and plants"
                 by="By: Gabriela Rocabado"
                />
                </div>
                <div style={{marginTop:'5%'}}>
                <Card 
                image={ICONS.BG2} subject="Mathemetics"
                discription="study of human biology and plants"
                 by="By: Gabriela Rocabado"
                />
                </div>
                <div style={{marginTop:'5%'}}>
                <Card 
                image={ICONS.BG3} subject="Natural Sciences"
                discription="study of human biology and plants"
                 by="By: Gabriela Rocabado"
                />
                </div>
                </div>
                <div className={StudentHome2.styles.activitiesCard}>
                    <div className={StudentHome2.styles.buttonDisplay}>
                    <h4>New Activities</h4>
                    <div>
                    <button type="button" className={StudentHome2.styles.button}><img src={ICONS.PLUS}></img>See All</button>
                    </div>
                    </div>
                    <div className={StudentHome2.styles.cardDisplay}>
                 <div style={{marginRight:'5%'}}>
                     <ActivitiesCard 
                     image={ICONS.GOOGLE_DRIVE}
                     label="Basic Theory"
                     text="Explorer"
                     />
                 </div>
                 <div>
                     <ActivitiesCard 
                     image={ICONS.LIST}
                     label="Practise N0.1 Arts"
                     text="Explorer"
                     />
                 </div>
                 </div>
                 <div className={StudentHome2.styles.cardDisplay1}>
                 <div style={{marginRight:'5%'}}>
                     <ActivitiesCard 
                     image={ICONS.PDF}
                     label="Arts Reading"
                     text="Explorer"
                     />
                 </div>
                 <div>
                     <ActivitiesCard 
                     image={ICONS.YOUTUBE}
                     label="Exploratory Video"
                     text="Explorer"
                     />
                 </div>
                 </div>
                 <div className={StudentHome2.styles.cardDisplay1}>
                 <div style={{marginRight:'5%'}}>
                     <ActivitiesCard 
                     image={ICONS.GOOGLE}
                     label="Contemporary Art"
                     text="Explorer"
                     />
                 </div>
                 </div>
                </div>
                <div className={StudentHome2.styles.chartContainer}>
                    <div>
                    <img
                     className={StudentHome2.styles.image}
                     src={ICONS.BG1}
                    />
                    </div>
                    <div>
                    <h6 style={{marginRight:'67%', marginTop:'5%'}}>Plastic Arts</h6>
                     <p style={{color:'#7287B0'}}>plastic arts of the second semester of preparatory</p>
                      <p style={{color:'#7287B0', marginRight:'48%'}}>By: Juan Gabriel Torrez</p>
                    </div>
                    <div>
                        <h6 style={{color:'#39507C', marginRight:'41%'}}>Complience with activities</h6>
                    </div>
                    <div>
                        <img 
                        src={ICONS.CHART}
                        />
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}
StudentHome2.styles = {
    mainContainer: "nos-online__student-home2-container-root",
    leftBar:"nos-online__student-home2-container-leftBar",
    innerConatiner:"nos-online__student-home2-container-innerContainer",
    iconContainer:"nos-online__student-home2-container-icon-container",
    icons:"nos-online__student-home2-container-icons",
    surfaceIcon:"nos-online__student-home2-container-surface-icon",
    logout:"nos-online__student-home2-container-logout",
    user:"nos-online__student-home2-container-user-icon",
    cardContainer:"nos-online__student-home2-container-card-container",
    subjectContainer:"nos-online__student-home2-container-subject-container",
    text:"nos-online__student-home2-container-text",
    activitiesCard:"nos-online__student-home2-container-activitiesCard-container",
    cardDisplay:"nos-online__student-home2-container-card-display",
    cardDisplay1:"nos-online__student-home2-container-card-display1",
    chartContainer:"nos-online__student-home2-container-chart-container",
    image:"nos-online__student-home2-container-image",
    button:"nos-online__student-home2-container-button",
    buttonDisplay:"nos-online__student-home2-container-button-display",
}

export default StudentHome2
