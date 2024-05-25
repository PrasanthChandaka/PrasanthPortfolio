import React from 'react'
import {Link} from "react-scroll"
import "./About.css"

import prasanth from "../../Assets/prasanthEnhanced.jpg"

const About = () => {
  return (
    <div id="about" className='bg-cover flex justify-center gradient-container'>
      <div className='w-full max-w-[1240px] p-3 grid grid-cols-1 md:grid-cols-2 place-items-center gap-5'>         
              <div className='rounded-2xl  max-h-[400px] max-w-[400px] w-full img-container'><img className=' h-full w-full object-cover bg-center' src={prasanth} alt="about-img"/></div>

              <div className='w-full p-5'>
                  <h1 className='text-white text-4xl font-extrabold'>About <span>Me</span></h1>
                  <p className="about-para font-serif mt-3">Hi there! I'm Prasanth Chandaka, a passionate web developer with a flair for crafting beautiful and functional websites that make an impact.I specialize in front-end technologies such as HTML, CSS, and JavaScript. I'm also proficient in back-end development using frameworks like Node.js.I've had the privilege of working on projects ranging from e-commerce platforms to responsive corporate websites.If you're looking for a dedicated web developer to bring your vision to life, I'd love to hear from you! Feel free to reach out via email or connect with me on LinkedIn.</p>
                  <Link to="contact" smooth={true} offset={-70} duration={500}><button type="button" className='text-white font-bold mt-5 p-3 border-none outline-none rounded-lg bg-[#2e65db] hover:bg-[#6d6ddf] transition-all cursor-pointer'>Let's Talk</button></Link>
              </div>
      </div>
    </div>
  )
}

export default About