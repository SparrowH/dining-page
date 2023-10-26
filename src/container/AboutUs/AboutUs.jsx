import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center' >
        <img src={images.G} alt="g letter" />
      </div>

      <div className='app__aboutus-content flex__center' >
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className='p__opensans'>He was born in an obscure village, the child of a peasant woman. Build and deploy 4 modern react apps and get hired as a frontend developer</p>
          <button type='button ' className='custom__button' >Know more</button>  
        </div>

        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className='p__opensans'>He was born in an obscure village, the child of a peasant woman. Build and deploy 4 modern react apps and get hired as a frontend developer</p>
          <button type='button ' className='custom__button' >Know more</button>  
        </div>
      </div>
    </div>
  )
}

export default AboutUs