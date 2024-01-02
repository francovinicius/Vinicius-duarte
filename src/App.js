import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Banner from './Components/Banner'
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Ebooks from './Components/Ebook';
import Footer from "./Components/Footer";


function App() {
  return (

<div>
<BrowserRouter>

<Banner />

  <Routes>
    <Route path="/" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/ebook" element={<Ebooks />} />

  </Routes>

<Footer />
</BrowserRouter>
</div>
  );
}

export default App;
