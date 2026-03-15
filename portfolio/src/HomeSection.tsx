import './HomeSection.css'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsSend } from 'react-icons/bs'; 
import CoverImage from './assets/cover.jpg'

function HomeSection() {

    return (
        <div className="home">
        <h1 className="home-title"> SUMODHA POKHREL </h1>
        <h2 className= "home-subtitle"> Software Developer - CS @ Rice</h2>
        <div className="home-icons">
            
            <a href="https://www.linkedin.com/in/sumodha/"><FaLinkedinIn color="black" size={45}></FaLinkedinIn></a>
            <a href = "mailto:pokhrel.sumodha@gmail.com"><BsSend color="black" size = {45}></BsSend></a>
            <a href="https://github.com/sumodha"><FaGithub color = "black" size={45}></FaGithub></a>
            
        </div>
        <img className="home-cover"src={CoverImage}/>
        <blockquote className = "home-quote">
            "Hi, I'm Sumodha Pokhrel. I'm an undergraduate student at Rice University, majoring in Computer Science with a minor in Data Science. Everything I do is guided by my passion to learn -- and never stop learning."
        </blockquote>
        
        </div>
    );
}

export default HomeSection;