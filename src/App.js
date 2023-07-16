import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Banner from './Components/Banner'
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Ebooks from './Components/Ebook';
import Footer from "./Components/Footer";
import Intranet from "./Page/Intranet";
import CartoesVisita from "./Page/CartoesVisita";
import AcerteNumero from "./Page/AcerteNumero";


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

    <Route path="/projects_intranet" element={<Intranet />} />
    <Route path="/projects_cartoes-de-visita" element={<CartoesVisita />} />
    <Route path="/projects_acerte-numero" element={<AcerteNumero />} />

  </Routes>

<Footer />
</BrowserRouter>
</div>
  );
}

export default App;
