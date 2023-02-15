import React from 'react'
import { data } from '../../helper/data.js'
import './lessonCard.css'
const LessonCard = () => {
  return (
    <div>
      <div className='text'>Lesson Reminder</div>
      <div className='main'>
        {data.map(({ image, name, age }) => (
          <div className='section'>
            <img width='200px' height='180px' src={image} alt="" />
            <div className='lesson'>
              <h3><span>Lesson Name :</span> {name}</h3>
              <h3><span>Lesson Hour :</span> {age}</h3>


            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LessonCard