import React from 'react';
import './About.css';
import Footer from './Footer';
const About = () => {
  return (
    <>
    <div className='about-container'>
      <div className="about-container">
        <img src="/shibaAbout.jpg" height="200" width="200"/>
        <img src="/CatAbout1.jpg" height="200" width="200" className='cattoSpacing'/>
        <img src="/golder-retriever-puppy.jpeg" height="200" width="200" className='goldieSpacing'/>
      </div>
      <h2 className='fade-in-element-1'>Our Story</h2>
      <p className='fade-in-element-5'>
        Founded by a group of dedicated animal lovers, Pet Heaven was born out of a deep concern for the welfare of abandoned pets. We understand that life's circumstances can change, leaving beloved pets without the care and companionship they need. 
        That's where we step in. With a shared commitment to the well-being of animals, we created Pet Heaven as a sanctuary of hope, compassion, and a fresh start for pets in need.
      </p>
      <br/>
      <h2 className='fade-in-element-2'>What We Do</h2>
      <p className='fade-in-element-5'>
        Pet Heaven is more than just a shelter; we are a community of caring individuals who are passionate about connecting abandoned pets with loving families. 
        We rescue, rehabilitate, and provide a safe haven for cats and dogs, giving them the opportunity to thrive once more. Our dedicated team works tirelessly to ensure that each animal in our care receives the love, attention, and medical care they need to lead happy and healthy lives.
      </p>
      <br/>
      <h2 className='fade-in-element-3'>Adoption Made Easy</h2>
      <p className='fade-in-element-5'>
        We believe that every pet deserves a forever home. That's why we have made it simple for you to make a request for adoption right from the comfort of your own home. Our user-friendly website allows online visitors like you to browse through the profiles of our lovable companions, learning about their unique personalities, backgrounds, and needs. When you find the perfect match for your family, you can submit an adoption request, and we will guide you through the process.
      </p>
      <br/>
      <h2 className='fade-in-element-4'>Why Choose Pet Heaven?</h2>
      <br/>
      <ul className='fade-in-element-5'>
        <li>Unwavering commitment to the welfare of abandoned pets.</li>
        <li>Experienced and caring team dedicated to their well-being.</li>
        <li>Convenient online adoption requests.</li>
        <li>A variety of cats and dogs waiting for their forever homes.</li>
        <li>An opportunity to make a difference in the lives of animals in need.</li>
      </ul>
      <br/><br/>
      <p className='fade-in-element-5'>
        At Pet Heaven, we're not just finding homes for pets; we're creating lifelong bonds and enriching the lives of both animals and their new families. We invite you to explore our website, learn more about our rescue efforts, and consider adopting a pet in need. Together, we can make a profound impact and bring happiness to both our furry friends and their human companions.
      </p>
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
    <Footer />
    </>
  );
}

export default About;
