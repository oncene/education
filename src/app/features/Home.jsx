import React from 'react'
import "../styles/home.scss"
import history from './../history';

const  Home=()=> {
    return (
        <div className={Home.styles.mainContainer}>
        <div className={Home.styles.buttonContainer}>
        <button className={Home.styles.studentButton} onClick={() => history.push('/StudentHome')}>STUDENTS</button>
        </div>
        <div className={Home.styles.buttonContainer}>
        <button className={Home.styles.studentButton}>TEACHERS</button>
        </div>
        <div className={Home.styles.buttonContainer}>
        <button className={Home.styles.studentButton}>SECRETARIATS</button>
        </div>
        <div className={Home.styles.buttonContainer}>
        <button className={Home.styles.studentButton}>ADMIN BLANUR</button>
        </div>
        </div>
    )
}
Home.styles = {
    mainContainer: "nos-online__add-home-container-root",
    studentButton:"nos-online__add-home-container-studentButton",
    buttonContainer:"nos-online__add-home-container-buttonContainer"
}
export default Home
