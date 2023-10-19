import React from 'react';
import Header from './Header';
import ImageSection from './ImageSection';
import LatestNews from './LatestNews';
import '../Styles/Home.css';
import '../Styles/Root.css';

function Home() {

    return(
        <>
            <ImageSection />
            <LatestNews />
        </>
    );
}

export default Home;
