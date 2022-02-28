import React from 'react'
import './About'
import profilePhoto from './../../assets/profilePhoto.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {BsHddNetwork} from 'react-icons/bs'

export default function About() {
  return (
    <section className='about__section' id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profilePhoto} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            
               {/*Experience 01  */}
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

               {/*Experience 02  */}
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ Clients worldwide</small>
            </article>
            
               {/*Experience 03  */}
            <article className='about__card'>
              <BsHddNetwork className='about__icon'/>
              <h5>Experience</h5>
              <small>80+ Completed</small>
            </article>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat cupiditate eum doloribus nulla! Perferendis cum 
              minima dolore deleniti, ullam error.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sit libero voluptas dolore soluta delectus atque pariatur
              iure sint necessitatibus reiciendis.
            </p>
          
          </div>
        </div>
      </div>
    </section>
  )
}
