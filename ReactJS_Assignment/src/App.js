import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyTown from "./Pages/MyTown";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <nav>
        <Link className='navBarLink' to="/" > About Me </Link>
        <Link className='navBarLink' to="/MyTown" > My Town </Link>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/MyTown" element={<MyTown/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
