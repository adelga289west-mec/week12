import { useState, useEffect } from 'react';
import '../Styles/LatestNews.css';
import '../Styles/Root.css';
import MiniBlog from './MiniBlog';
import axios from 'axios';

function LatestNews() {

  


  return (
    <>
      <div className="news-body">
        <div className="news-title">
          <p>Latest</p>
        </div>
        <div className="news-show">

           <MiniBlog />
           </div>
           </div>
      
    </>
  )
}

export default LatestNews;