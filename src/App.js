import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import GroupCard from './app/components/common/GroupCard';
// import HomeCard from './app/components/common/HomeCard';
// import Exampe from './Exampe';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Ratings1 from './app/features/Ratings1';
import ProgramCard from './app/components/common/ProgramCard';
import Program from './app/features/Program';
import ChatSection from './app/features/ChatSection';
import ChatSectionGroup from './app/features/ChatSectionGroup';
import GroupSection from './app/features/GroupSection';
import GroupSection1 from './app/features/GroupSection1';
import ConferenceSection from './app/features/ConferenceSection';
import Buttons from './Buttons';
import Program1 from './app/features/Program1';
import HomeCard1 from './app/components/common/HomeCard1';
import Home1 from './app/features/Home1';
import HomeRoom2 from './app/features/HomeRoom2';
import HomeRoom1 from './app/features/HomeRoom1';
import MenuSideBarBig from './app/components/common/MenuSideBarBig';




// import LeftMenuBar from './app/components/common/LeftMenuBar';
// import Card from './app/components/common/Card';

function App() {
  return (
    <div >
      <Router>
      <Switch>
      <Route exact path="/" component={Buttons} />
        <Route  path="/home" component={Home} />
        <Route  path="/home1" component={Home1} />
        <Route  path="/homeroom2" component={HomeRoom2} />
        <Route  path="/homeroom1" component={HomeRoom1} />
       <Route exact path="/" component={Buttons} />
       <Route exact path="/home" component={Home} />
        <Route path="/student" component={StudentHome1}></Route>
        <Route path="/homeroom" component={HomeRoom}></Route>
        <Route path="/groups" component={Groups}></Route>
        <Route path="/chatsection" component={ChatSection}></Route>
        <Route path="/chatsectiongroup" component={ChatSectionGroup}></Route>
        <Route path="/collaborations" component={Collaborations}></Route>
        <Route path="/coferences" component={Conference}></Route>
        <Route path="/groupsection" component={GroupSection}></Route>
        <Route path="/groupsection1" component={GroupSection1}></Route>
        <Route path="/program" component={Program}></Route>
        <Route path="/program1" component={Program1}></Route>
        <Route path="/ratings" component={Ratings}></Route>
        <Route path="/ratings1" component={Ratings1}></Route>
        <Route path="/studenthome2" component={StudentHome2}></Route>
        </Switch>
        </Router>
      {/* <Home /> */}
      {/* <StudentHome1 /> */}
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
