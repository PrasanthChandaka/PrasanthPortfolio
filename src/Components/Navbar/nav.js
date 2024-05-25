import {React,useState} from 'react'
import "./nav.css"
import {Link} from "react-scroll"
import { FaAlignLeft,FaAlignRight } from "react-icons/fa";

const Nav = () => {
  const [nav,setNav]=useState(false)
  
  const  menu=()=>{
    setNav(prev=>!prev)
    
  }

  return (
    <div className='w-full bg-black top-0 sticky flex justify-center z-50'>
      <div className='flex w-[100%] max-w-[1240px] items-center justify-between p-3 text-white z-50'>
        <h1 className='z-50'><Link to="home" smooth={true} offset={-300} duration={500} className='no-underline text-white' href='#home'>Portfo<span>lio</span></Link></h1>
        {/* ***********Desktoop Menu*********** */}
        <div className='hidden md:block'>
          <ul className="list-none text-white flex items-center gap-5 relative">
            <Link to="home" smooth={true} offset={-300} duration={500} className=' no-underline text-white font-serif font-semibold' >Home</Link>
            <Link to="about" smooth={true} offset={-70} duration={500} className=' no-underline text-white font-serif font-semibold' >About Us</Link>
            <Link to="skills" smooth={true} offset={-70} duration={500} className=' no-underline text-white font-serif font-semibold' >Skills</Link>
            <Link to="services" smooth={true} offset={-70} duration={500} className=' no-underline text-white font-serif font-semibold' >Projects</Link>
            <Link to="contact" smooth={true} offset={-70} duration={500} className=' no-underline text-white font-serif font-semibold' >Contact Us</Link>
          </ul>
        </div>
        {/* ***********Mobile Menu*********** */}
        <div className={` w-full mobile-menu md:hidden flex absolute top-0 left-0 bg-cover pt-[60px] ${nav?"mobile-nav-open":"mobile-nav-close"} justify-center`}>
          <ul className='list-none text-white flex items-center gap-5 relative flex-col p-10'>
            <Link to="home" smooth={true} offset={-280} duration={500} className='p-5 no-underline text-white font-serif font-semibold' onClick={menu} >Home</Link>
            <Link to="about" smooth={true} offset={-70} duration={500} className='p-5 no-underline text-white font-serif font-semibold' onClick={menu}>About Us</Link>
            <Link to="skills" smooth={true} offset={-70} duration={500} className='p-5 no-underline text-white font-serif font-semibold' onClick={menu}>Skills</Link>
            <Link to="services" smooth={true} offset={-70} duration={500} className='p-5 no-underline text-white font-serif font-semibold' onClick={menu}>Projects</Link>
            <Link to="contact" smooth={true} offset={-70} duration={500} className='p-5 no-underline text-white font-serif font-semibold' onClick={menu}>Contact Us</Link>
          </ul>
        </div>
        <div className='md:hidden nav z-50'>
          {nav?(<FaAlignLeft className='' size={30} color="white" onClick={menu}/>):
          (<FaAlignRight className='' size={30} color="white" onClick={menu}/>)}
        </div>
      </div>
    </div>
  )
}

export default Nav