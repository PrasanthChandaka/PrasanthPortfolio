import {React} from 'react'
import "./App.css"
import Home from './Components/Home/home'
import Nav from './Components/Navbar/nav'
import About from './Components/About/About'
import Services from './Components/Services/service'
import Skills from './Components/Skills/skill'
import Contact from './Components/ContactUs/contact'

const App = () => {

  return (
    <div className='app h-full w-full flex flex-col text-white scroll-smooth scale-90'>
        <Nav/>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Contact/>
    </div>
  )
}

export default App