import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import GroupCard from './app/components/common/GroupCard';
// import HomeCard from './app/components/common/HomeCard';
// import Exampe from './Exampe';
import Home from './app/features/Home';
import HomeRoom from './app/features/HomeRoom';
import StudentHome1 from './app/features/StudentHome1';
import StudentHome2 from './app/features/StudentHome2';
import Groups from './app/features/Groups';
import Collaborations from './app/features/Collaborations';
import ConferenceCard from './app/components/common/ConferenceCard';
import Conference from './app/features/Conference';
import RatingTable from './app/components/common/RatingTable';
import Ratings from './app/features/Rating';
import ProgramCard from './app/components/common/ProgramCard';
import Program from './app/features/Program';
import ChatSection from './app/features/ChatSection';
import ChatSectionGroup from './app/features/ChatSectionGroup';
import GroupSection from './app/features/GroupSection';
import ConferenceSection from './app/features/ConferenceSection';


// import LeftMenuBar from './app/components/common/LeftMenuBar';
// import Card from './app/components/common/Card';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Home /> */}
      <StudentHome1 />
      {/* <Card /> */}
      {/* <LeftMenuBar /> */}
      {/* <HomeCard /> */}
      {/* <GroupCard /> */}
      {/* <HomeRoom /> */}
      {/* <Groups /> */}
      {/* <Collaborations /> */}
  {/* <ConferenceCard /> */}
  {/* <Conference /> */}
  {/* <RatingTable /> */}
  {/* <Ratings /> */}
  {/* <ProgramCard /> */}
  {/* <Program /> */}
  {/* <ChatSection /> */}
  {/* <ChatSectionGroup /> */}
  {/* <GroupSection /> */}
  {/* <ConferenceSection /> */}
    </div>
  );
}

export default App;
