import React from 'react'
import "../styles/student-home.scss"
import "../styles/card.scss"
import { ICONS} from "../utils/enums/Index";
import Card from "../components/common/Card"
import ActivitiesCard from '../components/common/ActivitiesCard';


const StudentHome1=()=> {
    return (
        <div className={StudentHome1.styles.mainContainer}>
            <div className={StudentHome1.styles.innerConatiner}>
                <div className={StudentHome1.styles.subjectContainer}>
                <div className={StudentHome1.styles.leftBar}>
                    <div className={StudentHome1.styles.iconContainer}>
                    <img 
                    src={ICONS.SURFACE}
                    className={StudentHome1.styles.surfaceIcon}

                    />
                    </div>
                    <div>
                        <img  
                        src={ICONS.FEATURES_LIST}
                        className={StudentHome1.styles.icons}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.FILE_EXPLORER}
                        className={StudentHome1.styles.icons}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.CHAT_MESSAGE}
                        className={StudentHome1.styles.icons}
                         />
                    </div>
                    <div>
                        <img 
                        src={ICONS.NOTIFICATION}
                        className={StudentHome1.styles.icons}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.LOGOUT}
                        className={StudentHome1.styles.logout}
                        />
                    </div>
                    <div>
                        <img
                        src={ICONS.USER}
                        className={StudentHome1.styles.user}
                        />
                    </div>

                </div>
                <div className={StudentHome1.styles.cardContainer}>
                    <h3 className={StudentHome1.styles.text}>My Subjects</h3>
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
                <div className={StudentHome1.styles.activitiesCard}>
                    <div className={StudentHome1.styles.buttonDisplay}>
                    <h4>New Activities</h4>
                    <div>
                    <button type="button" className={StudentHome1.styles.button}><img src={ICONS.PLUS}></img>See All</button>
                    </div>
                    </div>
                    <div className={StudentHome1.styles.cardDisplay}>
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
                 <div className={StudentHome1.styles.cardDisplay1}>
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
                 <div className={StudentHome1.styles.cardDisplay1}>
                 <div style={{marginRight:'5%'}}>
                     <ActivitiesCard 
                     image={ICONS.GOOGLE}
                     label="Contemporary Art"
                     text="Explorer"
                     />
                 </div>
                 </div>
                </div>
                <div className={StudentHome1.styles.chartContainer}>
                    <div>
                    <img
                     className={StudentHome1.styles.image}
                     src={ICONS.BGBIG}
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
StudentHome1.styles = {
    mainContainer: "nos-online__student-home-container-root",
    leftBar:"nos-online__student-home-container-leftBar",
    innerConatiner:"nos-online__student-home-container-innerContainer",
    iconContainer:"nos-online__student-home-container-icon-container",
    icons:"nos-online__student-home-container-icons",
    surfaceIcon:"nos-online__student-home-container-surface-icon",
    logout:"nos-online__student-home-container-logout",
    user:"nos-online__student-home-container-user-icon",
    cardContainer:"nos-online__student-home-container-card-container",
    subjectContainer:"nos-online__student-home-container-subject-container",
    text:"nos-online__student-home-container-text",
    activitiesCard:"nos-online__student-home-container-activitiesCard-container",
    cardDisplay:"nos-online__student-home-container-card-display",
    cardDisplay1:"nos-online__student-home-container-card-display1",
    chartContainer:"nos-online__student-home-container-chart-container",
    image:"nos-online__student-home-container-image",
    button:"nos-online__student-home-container-button",
    buttonDisplay:"nos-online__student-home-container-button-display",
}

export default StudentHome1
