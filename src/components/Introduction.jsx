import React from 'react'

import menimCv from '../assets/myCv.pdf'
import './Introduction.css'

import Typed from 'react-typed';
import MovingComponent from 'react-moving-text'
const Introduction = () => {
  return (
    <div className='introduction row'>
        <div className='col-12 col-md-6 col-lg-7 bg-warning'>

        <Typed
        className='typing-effect'
                strings={[
                    'Hi',
                    'I am John',
                    'Creative Programmer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                    
                </Typed>

                <MovingComponent
  type="fadeInFromBottom"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aspernatur quia sapiente temporibus vel dolorem?</p>
</MovingComponent>

        
            <a href={menimCv} className='download-resume' download>Download Resume</a>
        
        </div>

        <div className='col-12 col-md-6 col-lg-5 bg-success d-flex justify-content-center' data-aos="fade-left">
            <img src="https://photo-baomoi.bmcdn.me/w300_r3x2_sm/2022_11_16_20_44287195/cb02b0a39cee75b02cff.jpg" alt="" />
        </div>
        
    </div>
  )
}

export default Introduction