import {Icon} from './utils/icon-util.tsx'
import {Link} from 'react-router-dom'


type refsProps= {
    skills: React.RefObject<HTMLElement | null>,
    work: React.RefObject<HTMLElement | null>,
    leadership: React.RefObject<HTMLElement | null>,
    projects: React.RefObject<HTMLElement | null>

}
function NavBar({refs}: {refs: refsProps}) {
    
    // scrolls to a specific section within the home page; sections defined by keys of refs dict
    function scrollTo(ref: keyof refsProps){
        refs[ref].current?.scrollIntoView({behavior: 'smooth', block:'start'})
        
    }
    return (
        <nav>
            <ul >
                <li><a><Icon name="linkedIn" ></Icon></a></li>
                <li><a><Icon name="github" ></Icon></a></li>
                <li><a><Icon name="mail"></Icon></a></li>
            </ul>
            <ul>
                <li><Link to="/" onClick={() => window.scrollTo({top:0, behavior:"smooth"})}>home</Link></li>
                <li><Link to="/" onClick={()=>scrollTo('skills')}>skills</Link></li>
                <li><Link to="/" onClick={()=>scrollTo('work')}>work</Link></li>
                <li><Link to ="/" onClick={()=>scrollTo('leadership')}>leadership</Link></li>
                <li><Link to = "/" onClick={()=>scrollTo('projects')}>projects</Link></li>
            
            </ul>
        </nav>
    );
}
export default NavBar;
