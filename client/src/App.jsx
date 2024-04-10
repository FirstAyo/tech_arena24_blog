import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Header from "./components/Header"
import Signup from "./pages/Signup"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="about" element = {<About />} />
        <Route path="contact" element = {<Contact />} />
        <Route path="dashboard" element = {<Dashboard />} />
        <Route path="privacy-policy" element = {<PrivacyPolicy />} />
        <Route path="sign-up" element = {<Signup />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
