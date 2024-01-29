import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import DriverDetail from "./Components/DriverDetail/Detail";
import Home from "./Components/Home/Home";
import Form from "./Components/Form/Form";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* {location.pathname === "/" && <NavBar />} */}
      {location.pathname !== "/" &&
        location.pathname !== "/about" &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" && <NavBar />}

      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/about" element={<About />} />

        <Route path="/drivers" element={<Home />} />

        <Route path="/drivers/:id" element={<DriverDetail />} />

        <Route path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
