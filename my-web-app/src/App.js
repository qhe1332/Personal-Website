import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar";

import Homepage from "./pages/homepage";
import Projects from "./pages/projects";
import Media from "./pages/media";
import Hobbies from "./pages/hobbies";
import ContactMe from "./pages/contactMe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact component={Homepage} />
        <Route path='/projects' component={Projects} />
        <Route path='/media' component={Media} />
        <Route path='/hobbies' component={Hobbies} />
        <Route path='/contact-me' component={ContactMe} />

      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
