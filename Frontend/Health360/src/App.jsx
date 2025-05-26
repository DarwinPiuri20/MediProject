import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import AboutUs from './pages/aboutus/AboutUs.jsx';
import Contact from './pages/contact/Contact.jsx';
import NavBar from './components/navbar/NavBar.jsx';
import Login from './pages/login/Login.jsx'
import PatientLayout from "./pages/patient/PatientLayout.jsx";

function AppContent() {
  const location = useLocation();
  const showNavBar = ['/home', '/about-us', '/contact', '/'].includes(location.pathname.toLowerCase());

  return (
      <>
        {showNavBar && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
            <Route path='/patients' element={<PatientLayout/>}/>

        </Routes>
      </>
  );
}

function App() {
  return (
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
  );
}

export default App;