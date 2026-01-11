import ExternalIcon from '../assets/external.svg?react'
import GithubIcon from '../assets/github.svg?react'
import MailIcon from '../assets/mail.svg?react'
import LinkedInIcon from '../assets/linkedin.svg?react'
import GithubCardIcon from '../assets/github-card.svg?react'


const icons = {
    github: GithubIcon,
    external: ExternalIcon,
    mail: MailIcon,
    linkedIn: LinkedInIcon,
    "github-card": GithubCardIcon
}

type IconName = keyof typeof icons
type IconProps = {
    name: IconName, 
    size?: string, 
    color?: string
}

// function that creates a svg icon based on name, size, and fill color
function Icon({name, size="40px", color="black"}:IconProps) {
    const Svg = icons[name];

    return (
        <Svg width={size} height={size} style={{ fill: color}}>

        </Svg>
    );

}

export {Icon}