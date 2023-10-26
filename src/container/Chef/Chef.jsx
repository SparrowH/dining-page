import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Chef.css'

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding ' >
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt="chef" />
      </div>

      <div className='app__wrapper_info'>
        <SubHeading title="Chef's Word" />
        <h1 className='headtext__cormorant'>What We Believe In</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'> Making your tastes watery is our priority. </p>
          </div>
          <p className='p__opensans'>He was born in an obscure village, the child of a peasant woman. Build and deploy 4 modern react apps and get hired as a frontend developer</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'> Chef & Founder </p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>

    </div>
  )
}

export default Chef