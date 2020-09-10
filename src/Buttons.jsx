import React from 'react'
import {Link} from "react-router-dom";
import "./app/styles/home.scss"


const Buttons=()=> {
    return (
        <div>
            <div>
            <Link to="/teacher">
           <button type="button"  className={Buttons.styles.studentButton}>Dashboard</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
               <Link to="/presentation">
           <button type="button"  className={Buttons.styles.studentButton}>PresentationCourse</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
               <Link to="exam">
           <button type="button" className={Buttons.styles.studentButton}>ExamCourse</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="course">
           <button type="button" className={Buttons.styles.studentButton}>CourseActivity</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="homeroom">
           <button type="button" className={Buttons.styles.studentButton}>Home</button>
           </Link>
           </div>
           {/* <div className={Buttons.styles.buttonContainer}>
           <Link to="collaborations">
           <button type="button" className={Buttons.styles.studentButton}>collaboratins</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="coferences">
           <button type="button" className={Buttons.styles.studentButton}>Conferences</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="ratings">
           <button type="button" className={Buttons.styles.studentButton}>Ratings</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="program">
           <button type="button" className={Buttons.styles.studentButton}>Program</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="chatsection">
           <button type="button" className={Buttons.styles.studentButton}>Chat</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="chatsectiongroup">
           <button type="button" className={Buttons.styles.studentButton}>Chat Room</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="groupsection">
           <button type="button" className={Buttons.styles.studentButton}>Qualification Room</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="homeroom1">
           <button type="button" className={Buttons.styles.studentButton}>Home Room1</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="program1">
           <button type="button" className={Buttons.styles.studentButton}>Program1</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="ratings1">
           <button type="button" className={Buttons.styles.studentButton}>Ratings1</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="groupsection1">
           <button type="button" className={Buttons.styles.studentButton}>GroupSection1</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="home1">
           <button type="button" className={Buttons.styles.studentButton}>Home1</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="homeroom2">
           <button type="button" className={Buttons.styles.studentButton}>HomeRoom2</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="homeroom3">
           <button type="button" className={Buttons.styles.studentButton}>HomeRoom3</button>
           </Link>
           </div> */}
        </div>
    )
}
Buttons.styles = {
    mainContainer: "nos-online__add-home-container-root",
    studentButton:"nos-online__add-home-container-studentButton",
    buttonContainer:"nos-online__add-home-container-buttonContainer"
}
export default Buttons
