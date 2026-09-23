import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from "./context/Notes/NoteState";


function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
         <Navbar/>
  <Routes>
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/about" element={<About />} />
  </Routes>
</Router>
      </NoteState>

    </div>
  );
}

export default App;
