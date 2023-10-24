import { useState, useEffect } from 'react';
import '../Styles/LatestNews.css';
import '../Styles/Root.css';
import MiniBlog from './MiniBlog';
function LatestNews() {

  


  return (
    <>
      <div className="news-body">
        <div className="news-title">
          <p>Latest</p>
        </div>
        <div className="news-show" >

           <MiniBlog />
           </div>
           </div>
      
    </>
  )
}

/*  function scroll(){
  const element = document.getElementById("news");
  element.scrollLeft = element.scrollWidth
}

scroll()  */

export default LatestNews;