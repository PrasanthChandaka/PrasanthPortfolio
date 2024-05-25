import {React,useState} from 'react'
import "./skill.css"
import { MdDeveloperBoard } from "react-icons/md";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import Card from './SkillCard/card';


const skills=[
  {
    id:1,
    category:"Frontend",
    icon:<MdDeveloperBoard color="#b05fab" size={30}/>,
    skillInfo:[
      {skill:"HTML",percentage:"90%"},
      {skill:"CSS",percentage:"90%"},
      {skill:"JavaScript",percentage:"85%"},
      {skill:"React.js",percentage:"80%"},
    ]
  },
  {
    id:2,
    category:"Backend",
    icon:<MdOutlineDeveloperMode color="#b05fab" size={30}/>,
    skillInfo:[
      {skill:"Node.js",percentage:"75%"},
      {skill:"Express.js",percentage:"80%"},
    ]
  },
  {
    id:3,
    category:"Tools",
    icon:<FaTools color="#b05fab" size={30}/>,
    skillInfo:[
      {skill:"Git & GitHub",percentage:"70%"},
      {skill:"Visual Studio Code",percentage:"90%"},
    ]
  },
  {
    id:4,
    category:"Soft Skills",
    icon:<GiSkills color="#b05fab" size={30}/>,
    skillInfo:[
      {skill:"Problem-solving",percentage:"70%"},
      {skill:"Collabration",percentage:"80%"},
      {skill:"Attention to Detail",percentage:"85%"},
    ]
  },
  
]

const Skills = () => {

  const [category,setCategry] = useState("Frontend")
  const [Info,setInfo] = useState(skills[0].skillInfo)

  const getSkillId=(category,item) => {
      setCategry(category)
      setInfo(item)
      console.log(item)
  }
  return (
    <div id="skills" className='bg-cover flex justify-center items-center mt-10 mb-10'>
      <div className='w-full max-w-[1240px] flex py-10 px-10 flex-col'>
          <h1 className='mb-5 text-center'>My <span>Skills</span></h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-10 '>
            <ul className='unordered-skills-list grid-cols-1'>
              {skills.map(each=>(
                <Card key={each.id} item={each} getSkillId={getSkillId} isActive={each.category===category}/>
              ))}
            </ul>
            <div className='skill-bars-container'>
                <h2 className='skill-head'>{category}</h2>
                {Info.map((each,index)=>(
                  <div key={index} className='percentage'>
                    <div>
                      <p>{each.skill}</p>
                      <p>{each.percentage}</p>
                    </div>
                    <div>
                      <div style={{width:each.percentage}}></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Skills