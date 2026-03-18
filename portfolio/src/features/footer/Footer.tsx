import './Footer.css'
import {Link} from 'react-router-dom';


type refsProps= {
    skills: React.RefObject<HTMLElement | null>,
    work: React.RefObject<HTMLElement | null>,
    leadership: React.RefObject<HTMLElement | null>,
    projects: React.RefObject<HTMLElement | null>

}

function Footer({refs} : {refs: refsProps}) {

    // scrolls to a specific section within the home page; sections defined by keys of refs dict
    function scrollTo(ref: keyof refsProps){
        refs[ref].current?.scrollIntoView({behavior: 'smooth', block:'start'})
        
    }
    return (
        <div className='footer'>
            <ul className = "footer-links">
                
                <li className="footer-link"><Link to="/" onClick={()=>scrollTo('work')}>WORK</Link></li>
                <li className="footer-link"><Link to = "/" onClick={()=>scrollTo('projects')}>PROJECTS</Link></li>
                <li className='footer-link-main'> <Link  to="/" onClick={() => window.scrollTo({top:0, behavior:"smooth"})}>SUMODHA</Link></li>
                <li className="footer-link"><Link to="/" onClick={()=>scrollTo('skills')}>SKILLS</Link></li>
                <li className="footer-link"><Link to ="/" onClick={()=>scrollTo('leadership')}>LEADERSHIP</Link></li>
                
            </ul>
            <p className="footer-text">Made with love. © Sumodha Pokhrel</p>
        
        </div>
        
    );
}

export default Footer;