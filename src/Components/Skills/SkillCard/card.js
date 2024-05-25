import React from 'react'
import "./card.css"

const Card = (props) => {
    const {item,getSkillId,isActive}=props
    const {category,icon,skillInfo} = item
    const skillId = () => {
        getSkillId(category,skillInfo)
    }
  return (
    <li onClick={skillId} className={`${isActive?"active":""}`}>
        {category}
        <div className='skill-icon-container'>
            {icon}
        </div>
    </li>
  )
}

export default Card