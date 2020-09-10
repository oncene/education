import React from 'react'
import {Link} from "react-router-dom";
import "./app/styles/home.scss"


const Buttons=()=> {
    return (
        <div>
            <div>
            <Link to="/home">
           <button type="button"  className={Buttons.styles.studentButton}>Home</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
               <Link to="/student">
           <button type="button"  className={Buttons.styles.studentButton}>Student Home1</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
               <Link to="studenthome2">
           <button type="button" className={Buttons.styles.studentButton}>Student Home2</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="homeroom">
           <button type="button" className={Buttons.styles.studentButton}>Home Room</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
           <Link to="groups">
           <button type="button" className={Buttons.styles.studentButton}>Groups</button>
           </Link>
           </div>
           <div className={Buttons.styles.buttonContainer}>
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
           </div>
        </div>
    )
}
Buttons.styles = {
    mainContainer: "nos-online__add-home-container-root",
    studentButton:"nos-online__add-home-container-studentButton",
    buttonContainer:"nos-online__add-home-container-buttonContainer"
}
export default Teacher
