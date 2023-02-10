
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Rate from './component/Rate';
import Contact from './component/Contact';
import About from './component/About';
import Footer from './component/Footer';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rate" element={<Rate />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
