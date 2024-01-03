import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Computer from "./Components/CS/Computer";
import ContentDs from "./Content";
import Data from "./Data";

import IntroDs from "./Components/CS/DataStructure/Intro(ds)";
import ListDs from "./Components/CS/DataStructure/List(ds)";
import AimDsStack from "./Components/CS/DataStructure/Stack/Aim(ds,stack)";
import ProgramDsStack from "./Components/CS/DataStructure/Stack/Program(ds,stack)";
import SimulationDsStack from "./Components/CS/DataStructure/Stack/Simulation(ds,stack)";
import ReferencesDsStack from "./Components/CS/DataStructure/Stack/References(ds,stack)";
import TheoryDsStack from "./Components/CS/DataStructure/Stack/Theory(ds,stack)";
import VivaDsStack from "./Components/CS/DataStructure/Stack/Viva(ds,stack)";
import AimDsQueues from "./Components/CS/DataStructure/Queues/Aim(Queues,DS)";
import ProgramDsQueues from "./Components/CS/DataStructure/Queues/Program(Queues,DS)";
import SimulationDsQueues from "./Components/CS/DataStructure/Queues/Simulation(Queues,DS)";
import ReferencesDsQueues from "./Components/CS/DataStructure/Queues/References(Queues,DS)";
import TheoryDsQueues from "./Components/CS/DataStructure/Queues/Theory(Queues,DS)";
import VivaDsQueues from "./Components/CS/DataStructure/Queues/Viva(Queues,DS)";
import AlgorithmDsQueues from "./Components/CS/DataStructure/Queues/Algorithm(Queues,DS)";
import PreTestDsQueues from "./Components/CS/DataStructure/Queues/PreTest(Queues,DS)";
import PostTestDsQueues from "./Components/CS/DataStructure/Queues/PostTest(Queues,DS)";

// import IntroJava from "./Components/CS/Java/Intro(Java)";
// import ListJava from "./Components/CS/Java/List(Java)";
// import AimJava9 from "./Components/CS/Java/9/Aim(9,Java)";
// import ProgramJava9 from "./Components/CS/Java/9/Program(9,Java)";
// import SimulationJava9 from "./Components/CS/Java/9/Simulation(9,Java)";
// import ReferencesJava9 from "./Components/CS/Java/9/References(9,Java)";
// import TheoryJava9 from "./Components/CS/Java/9/Theory(9,Java)";
// import VivaJava9 from "./Components/CS/Java/9/Viva(9,Java)";

import IntroDbs from "./Components/CS/Dbs/Intro(Dbs)";
import ListDbs from "./Components/CS/Dbs/List(Dbs)";
import AimDbs13 from "./Components/CS/Dbs/13/Aim(13,Dbs)";
import ProgramDbs13 from "./Components/CS/Dbs/13/Program(13,Dbs)";
import SimulationDbs13 from "./Components/CS/Dbs/13/Simulation(13,Dbs)";
import ReferencesDbs13 from "./Components/CS/Dbs/13/References(13,Dbs)";
import TheoryDbs13 from "./Components/CS/Dbs/13/Theory(13,Dbs)";
import VivaDbs13 from "./Components/CS/Dbs/13/Viva(13,Dbs)";

import IntroDaa from "./Components/CS/DAA/Intro(DAA)";
import ListDaa from "./Components/CS/DAA/List(DAA)";
import AimDaaclasses from "./Components/CS/DAA/5/Aim(5,DAA)";
import ProgramDaaclasses from "./Components/CS/DAA/5/Program(5,DAA)";
import SimulationDaaclasses from "./Components/CS/DAA/5/Simulation(5,DAA)";
import ReferencesDaaclasses from "./Components/CS/DAA/5/References(5,DAA)";
import TheoryDaaClasses from "./Components/CS/DAA/5/Theory(5,DAA)";
import VivaDaaClasses from "./Components/CS/DAA/5/Viva(5,DAA)";

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/CS/Computer" element={<Computer />} />
      <Route
            path="/DataStructure/Content"
            element={
              <ContentDs
                department=<a href="/CS/Computer">Computer Science And Engineering</a>
                lab="Data Structure"
                ListofExperiment={<ListDs />}
                Intro={<IntroDs />}
              />
            }
          />
          <Route
            path="/DataStructure/Stack/data"
            element={
              <Data
                dep=<a href="/CS/Computer">Computer Science And Engineering</a>
                lab=<a href="/DataStructure/Content">Data Structure</a>
                exp="Stack"
                Aim={<AimDsStack />}
                Theory={<TheoryDsStack />}
                Program={<ProgramDsStack />}
                Simulation={<SimulationDsStack />}
                Viva={<VivaDsStack />}
                References={<ReferencesDsStack />}
              />
            }
          />
          <Route
            path="/DataStructure/Queues/data"
            element={
              <Data
                dep=<a href="/CS/Computer">Computer Science And Engineering</a>
                lab=<a href="/DataStructure/Content">Data Structure</a>
                exp="Queue"
                Aim={<AimDsQueues />}
                Theory={<TheoryDsQueues />}
                Program={<ProgramDsQueues />}
                Simulation={<SimulationDsQueues />}
                Viva={<VivaDsQueues />}
                References={<ReferencesDsQueues />}
                Algorithm={<AlgorithmDsQueues/>}
                PreTest={<PreTestDsQueues/>}
                PostTest={<PostTestDsQueues/>}
              />
            }
          />
          <Route
            path="/Dbs/Content"
            element={
              <ContentDs
                department=<a href="/CS/Computer">Computer Science And Engineering</a>
                lab="Database"
                ListofExperiment={<ListDbs />}
                Intro={<IntroDbs />}
              />
            }
          />
          <Route
            path="/Dbs/13/data"
            element={
              <Data
                dep=<a href="/CS/Computer">Computer Science And Engineering</a>
                lab=<a href="/Dbs/Content">Database</a>
                exp="13"
                Aim={<AimDbs13 />}
                Theory={<TheoryDbs13 />}
                Program={<ProgramDbs13 />}
                Simulation={<SimulationDbs13 />}
                Viva={<VivaDbs13 />}
                References={<ReferencesDbs13 />}
              />
            }
          />
          <Route
            path="/DAA/Content"
            element={
              <ContentDs
                department=<a href="/CS/Computer">Computer Science And Engineering</a>
                lab="Design and Analysis of Algorithm"
                ListofExperiment={<ListDaa />}
                Intro={<IntroDaa />}
              />
            }
          />
          <Route
            path="/Daa/classes/data"
            element={
              <Data
                dep=<a href="/CS/Computer">Computer Science And Engineering</a>
                lab=<a href="/DAA/Content">Design and Analysis of Algorithm</a>
                exp="Java classes and objects"
                Aim={<AimDaaclasses />}
                Theory={<TheoryDaaClasses />}
                Program={<ProgramDaaclasses />}
                Simulation={<SimulationDaaclasses />}
                Viva={<VivaDaaClasses />}
                References={<ReferencesDaaclasses />}
              />
            }
          />
      </Routes>
    </Router>
    </>
  );
}

export default App;
