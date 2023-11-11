import React from 'react'
import {Link} from 'react-router-dom'
import HomeImg from './HomeImg'
import {motion} from "framer-motion"
import Slider from './Slider'
import { Parallax } from 'react-parallax'
import image7 from './picture/marty.jpg'
import image8 from './picture/simba.jpg'
import './Parallax.css'
import CanYou from "./CanYou"
import LearnMore from './LearnMore' 
import Footer from './Footer'


const Home = () => {
  return (
    <>
      <HomeImg />

      <div className='content3'><LearnMore /></div>

      <Parallax strength={300} bgImage={image7}>
        <div className="content">
          <div className='text-content'>Meet Marty</div>
          <div className='text'> Marty is an adorable and loving Corgi </div>
          <div className='text2'> He is eagerly waiting for his forever home. </div>
          
        </div>
      </Parallax>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h1 className='tip1'><Link to='/register' className='registerlink'>Register</Link> or <Link to='/signin' className='signinlink'>Sign-in</Link> to access Re-homing Section.</h1>
      
      
      <h3 className='tips'>Drag & Pull left/right to see some of our cattos n doggos</h3>
      <div className='content1'>
        <Slider />
        </div>

      <Parallax strength={200} bgImage={image8}>
        <div className="content">
          <div className='text-content'>This is Simba</div>
          <div className='text3'> His sparkling green eyes are full of curiosity </div>
          <div className='text4'> with an unmistakable longing for love and companionship. </div>
 
        </div>
      </Parallax>

      <div className='content1'><CanYou /></div>
      <br/><br/><br/><br/><br/><br/><br/>

      <Footer/>

      
    </>
 
  )
}

export default Home