import { useParams } from 'react-router-dom';
import { getProjectBySlug } from '../utils/cards';
import { getImageURL } from '../utils/image-utils';
import NavBar from '../features/navbar/NavBar.tsx';
import Footer from '../features/footer/Footer.tsx';
import './ProjectPage.css'
import NotFound from './NotFound.tsx'
import { useEffect } from "react";
import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../components/mdxComponents.tsx'



function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (<NotFound></NotFound>
    );
  }

  const { title, role, text, skills, date, imgSrc, Content } = project;

  if (!Content) {
  return (<NotFound></NotFound>
    );


  }

  useEffect(() => {
      document.title = "sumodha | portfolio";
    }, []);

  return (
    <>
  
    
    <div className="projectpage">
      <NavBar></NavBar>

      <div className="project">
      <img className="project-image" src={getImageURL(imgSrc)} alt={title} />
      <h1 className="project-title">{title}</h1>
      <h3 className="project-role">{role}</h3>
      <p className="project-text">{text}</p>
        <ul className="project-skills">
                {skills.map((element, idx) => <li className="card-skill" key={idx}>{element}</li>)}
      </ul>
      {date? <h3 className="project-date">{date}</h3>: <></>}
      <hr className="divider"/>

      <div className="project-content">
        <MDXProvider components={mdxComponents}>
      <Content></Content>
      </MDXProvider>
        
      </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default ProjectPage;