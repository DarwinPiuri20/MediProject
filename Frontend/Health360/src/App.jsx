import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ResponsiveAppBar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'


function App() {

  return (
    <BrowserRouter>
    <ResponsiveAppBar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
