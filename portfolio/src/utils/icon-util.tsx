import ExternalIcon from '../assets/react.svg?react'
import GithubIcon from '../assets/react.svg?react'
import MailIcon from '../assets/react.svg?react'
import LinkedInIcon from '../assets/react.svg?react'

const icons = {
    github: GithubIcon,
    external: ExternalIcon,
    mail: MailIcon,
    linkedIn: LinkedInIcon
}

type IconName = keyof typeof icons
type IconProps = {
    name: IconName, 
    size?: number, 
    color: string
}

// function that creates a svg icon based on name, size, and fill color
function Icon({name, size=35, color="currentcolor"}:IconProps) {
    const Svg = icons[name];

    return (
        <Svg width={size} height={size} style={{ fill: color }}>

        </Svg>
    );

}

export {Icon}