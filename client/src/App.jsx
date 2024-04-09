import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"
import PrivacyPolicy from "./pages/PrivacyPolicy"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="about" element = {<About />} />
        <Route path="contact" element = {<Contact />} />
        <Route path="dashboard" element = {<Dashboard />} />
        <Route path="privacy-policy" element = {<PrivacyPolicy />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
