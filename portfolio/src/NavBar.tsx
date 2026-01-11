import {Icon} from './utils/icon-util.tsx'


function NavBar() {
    return (
        <nav>
            <ul>
                <li><a><Icon name="linkedIn" color='blue'></Icon></a></li>
                <li><a><Icon name="github" color='blue'></Icon></a></li>
                <li><a><Icon name="mail" color='blue'></Icon></a></li>
            </ul>
            <ul>
                <li><a >home</a></li>
                <li><a >skills</a></li>
                <li><a >work</a></li>
                <li><a >leadership</a></li>
                <li><a >projects</a></li>
            
            </ul>
        </nav>
    );
}
export default NavBar;
