import { useState } from 'react';
import '../Styles/ImageSection.css';
import '../Styles/Root.css';
import  img1 from '../Images/steak.png'
import img2 from  '../Images/multfoodpic.png'

function ImageSection() {

  return (
    <div className="image-section-main">
        <div className="image-section">
          <img className="image-top-left" />
          <img className="image-top-right" src={img1} width={100} />
          <img className="image-bottom-left" src={img2} />
          <img className="image-bottom-right" />
        </div>
    </div>
  )
}

export default ImageSection;