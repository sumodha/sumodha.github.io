
import './NavBar.css';
import {Link} from 'react-router-dom';

type refsProps= {
    skills: React.RefObject<HTMLElement | null>,
    work: React.RefObject<HTMLElement | null>,
    leadership: React.RefObject<HTMLElement | null>,
    projects: React.RefObject<HTMLElement | null>

}

function NavBar({refs} : {refs: refsProps}) {

    // scrolls to a specific section within the home page; sections defined by keys of refs dict
    function scrollTo(ref: keyof refsProps){
        refs[ref].current?.scrollIntoView({behavior: 'smooth', block:'start'})
        
    }

    return (
        <div className="navbar">
        <h2 className='navbar-name'> <Link  to="/" onClick={() => window.scrollTo({top:0, behavior:"smooth"})}>SUMODHA POKHREL</Link></h2>
        <ul className = "navbar-links">
                <li className="navbar-link"><Link to="/" onClick={()=>scrollTo('skills')}>SKILLS</Link></li>
                <li className="navbar-link"><Link to="/" onClick={()=>scrollTo('work')}>WORK</Link></li>
                <li className="navbar-link"><Link to ="/" onClick={()=>scrollTo('leadership')}>LEADERSHIP</Link></li>
                <li className="navbar-link"><Link to = "/" onClick={()=>scrollTo('projects')}>PROJECTS</Link></li>
        </ul>
        </div>

    );
}

export default NavBar;