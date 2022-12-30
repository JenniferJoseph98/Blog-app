import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Header/pages/Contact";
import About from "./Components/Header/pages/About";
import More from "./Components/Header/pages/More";
import FullPage from "./Components/Fullpage/FullPage";
import Header from "./Components/Header/Header";
import Home from "./Components/Header/pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FullPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </div>
  );
}

export default App;
