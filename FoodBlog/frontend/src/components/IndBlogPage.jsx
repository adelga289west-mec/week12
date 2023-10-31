import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import '../Styles/IndBlogPage.css';
import '../Styles/Root.css'
import sampleImg from '../Images/steak.png';

function IndBlogPage() {

    return (
        <div className="indblog-grid">
            <img className="indblog-image" src={sampleImg} />
            <p className="indblog-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="indblog-credit">Written By username0000</p>
            <p className="indblog-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quia sit facilis, molestiae magnam porro nemo, qui inventore quibusdam tempore aspernatur obcaecati enim quidem assumenda architecto, suscipit asperiores iusto praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex quibusdam eos, enim illo esse quo corporis quod atque! Modi debitis quod aut? Dolorem repellat voluptas exercitationem quae eos. Repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius animi adipisci, amet rerum rem? Quos, saepe enim officiis culpa itaque provident magni natus, facere hic dolores id maiores suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quod magnam! Et eaque odit sequi consequuntur at fugiat. Laborum consectetur quisquam illo officia accusamus ipsa ipsum ab id? Quidem, praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quia sit facilis, molestiae magnam porro nemo, qui inventore quibusdam tempore aspernatur obcaecati enim quidem assumenda architecto, suscipit asperiores iusto praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex quibusdam eos, enim illo esse quo corporis quod atque! Modi debitis quod aut? Dolorem repellat voluptas exercitationem quae eos. Repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius animi adipisci, amet rerum rem? Quos, saepe enim officiis culpa itaque provident magni natus, facere hic dolores id maiores suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quod magnam! Et eaque odit sequi consequuntur at fugiat. Laborum consectetur quisquam illo officia accusamus ipsa ipsum ab id? Quidem, praesentium?</p>
        </div>
    );
}

export default IndBlogPage;