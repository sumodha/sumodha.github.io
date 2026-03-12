import './HomeSection.css'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsSend } from 'react-icons/bs'; 

function HomeSection() {

    return (
        <>
        <h1 className="home-title"> SUMODHA POKHREL </h1>
        <h2 className= "home-subtitle"> Software Developer - CS @ Rice</h2>
        <div className="home-icons">
            <FaGithub size={45}></FaGithub>
            <FaLinkedinIn size={45}></FaLinkedinIn>
            <BsSend size = {45}></BsSend>

        </div>
        <blockquote className = "home-quote">
            "Hi, I'm Sumodha Pokhrel. I'm an undergraduate student at Rice University, majoring in Computer Science with a minor in Data Science. Everything I do is guided by my passion to learn -- and never stop learning."
        </blockquote>
        </>
    );
}

export default HomeSection;