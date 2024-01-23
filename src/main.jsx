import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Project from './components/Projects/Project.jsx'
import LanguageSkills from './components/LanguageSkills/LanguageSkills.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Home />
    <About />
    <Project/>
    <LanguageSkills/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
)
